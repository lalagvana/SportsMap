using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.Email;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    [ApiController]
    [Route("/api/email")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        [Route("subscribe/{email}")]
        [AllowAnonymous]
        public async Task SubscribeEmail(string email)
        {
            await _emailService.SubscribeEmailAsync(email);
        }

        [HttpPost]
        [Route("forgotPassword/{email}")]
        [AllowAnonymous]
        public async Task ForgotPassword(string email)
        {
            await _emailService.ForgotPasswordAsync(email);
        }

        [HttpPost]
        [Route("send")]
        [AllowAnonymous]
        public async Task SendEmail(EmailRequest request)
        {
            await _emailService.SendEmailAsync(request);
        }
    }
}