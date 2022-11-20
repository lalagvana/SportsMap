using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MimeKit;
using Newtonsoft.Json;
using SFAS.Common;
using SFAS.Common.Exceptions;
using SFAS.Common.Models.Email;
using SFAS.Database;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace SFAS.Services.Services
{
    public class EmailService : IEmailService
    {
        #region Fields and Constructor
        private readonly IHttpContextAccessor _accessor;
        private readonly ApplicationDbContext _db;
        private readonly ILogger<EmailService> _logger;
        private readonly UserManager<User> _userManager;
        private static readonly Regex Regex = new("%(?<name>.+?)%");
        private readonly Dictionary<string, string> _globalReplacements;
        private readonly AppSettings _options;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public EmailService(IHttpContextAccessor accessor,
            IOptions<AppSettings> options,
            ILogger<EmailService> logger, ApplicationDbContext db, IMapper mapper,
            UserManager<User> userManager, IHttpContextAccessor httpContextAccessor)
        {
            _accessor = accessor;
            _options = options.Value;
            _logger = logger;
            _db = db;
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;
            _globalReplacements = new Dictionary<string, string>();
            if (_accessor.HttpContext != null)
            {
                _globalReplacements["BASE_ADDRESS"] =
                    $"{_accessor.HttpContext.Request.Scheme}://{_accessor.HttpContext.Request.Host}";
            }
        }
        #endregion

        public async Task SubscribeEmailAsync(string email)
        {
            await _db.EmailSubscribers.AddAsync(new EmailSubscriber
            {
                Email = email,
                Id = new Guid()
            });
        }

        public async Task ForgotPasswordAsync(string email)
        {
            throw new NotImplementedException();
        }

        public async Task SendEmailAsync(EmailRequest request)
        {
            throw new NotImplementedException();
        }

        private async Task<bool> SendConfirmEmail(User user)
        {
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var queryParams = new Dictionary<string, string>
            {
                { "userId", user.Id.ToString() },
                { "firstName", user.FirstName },
                { "lastName", user.LastName },
                { "email", user.Email },
                { "IsConfirm", true.ToString() }
            };
            _logger.LogInformation($"Sending confirm link with params: {JsonConvert.SerializeObject(queryParams)}");

            var httpRequest = _httpContextAccessor.HttpContext.Request;

            UriBuilder builder = new(httpRequest.Scheme, httpRequest.Host.Host);
            if (httpRequest.Host.Port.HasValue)
            {
                builder.Port = httpRequest.Host.Port.Value;
            }

            builder.Path = "confirm";
            var callbackUrl = QueryHelpers.AddQueryString(builder.Uri.AbsoluteUri, queryParams);
            var message = await GenerateTextMessage("title", callbackUrl);

            return await SendEmailAsync(user.Email, "Confirm account", message);
        }

        private static string Replace(string input, IDictionary<string, string?> replacements)
        {
            string result = Regex.Replace(input, m =>
            {
                var name = m.Groups["name"].Value;
                if (replacements.TryGetValue(name, out var value))
                {
                    return value;
                }

                return m.Captures[0].Value;
            });

            return result;
        }

        public async Task<string> GenerateTextMessage(string title, string text)
        {
            var replacements = new Dictionary<string, string?>(_globalReplacements)
            {
                ["TITLE"] = title,
                ["MESSAGE"] = text
            };

            var assembly = Assembly.GetExecutingAssembly();
            var resourceStream = assembly.GetManifestResourceStream("textMessage.html");
            if (resourceStream == null)
            {
                throw new MailException("Error sending mail", $"Can't read embedded resource textMessage.html");
            }

            using var reader = new StreamReader(resourceStream, Encoding.UTF8);
            string message = await reader.ReadToEndAsync();
            message = Replace(message, replacements);
            return message;
        }

        public async Task<string> GenerateResetPasswordMailMessage(User user, string link)
        {
            var replacements = new Dictionary<string, string?>(_globalReplacements)
            {
                ["FIRSTNAME"] = user.FirstName,
                ["LASTNAME"] = user.LastName,
                ["USERNAME"] = user.UserName,
                ["LINK"] = link
            };

            var assembly = Assembly.GetExecutingAssembly();
            var resourceStream = assembly.GetManifestResourceStream("recovery.html");
            if (resourceStream == null)
            {
                throw new MailException("Error sending reset password mail", $"Can't read embedded resource recovery.html");
            }

            using var reader = new StreamReader(resourceStream, Encoding.UTF8);
            var message = await reader.ReadToEndAsync();
            message = Replace(message, replacements);
            return message;
        }

        public async Task<bool> SendEmailAsync(string to, string subjects, string message)
        {
            var mailMessage = new MimeMessage();
            mailMessage.From.Add(new MailboxAddress(_options.PortalMailFromName, _options.PortalMailFromEmail));
            mailMessage.To.Add(new MailboxAddress("New User", to));
            mailMessage.Subject = subjects;
            mailMessage.Body = new TextPart("html")
            {
                Text = message
            };

            using (var smtpClient = new SmtpClient())
            {
                smtpClient.ServerCertificateValidationCallback = (s, c, h, e) => true;

                await smtpClient.ConnectAsync(_options.PortalMailServer, _options.PortalMailPort, false);
                smtpClient.AuthenticationMechanisms.Remove("XOAUTH2");
                await smtpClient.AuthenticateAsync(_options.PortalMailFromEmail, _options.PortalMailPassword);
                await smtpClient.SendAsync(mailMessage);
            }
            _logger.LogInformation($"Email sent to {to} with subject: {subjects}");
            return true;
        }

    }
}
