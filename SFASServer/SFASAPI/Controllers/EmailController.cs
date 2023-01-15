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

        /// <summary>
        /// Subscribes an email to email mailing. Used on a main page, block with subscription
        /// </summary>
        /// <param name="email">Email to subscribe</param>
        [HttpPost]
        [Route("subscribe/{email}")]
        [AllowAnonymous]
        public async Task SubscribeEmail(string email)
        {
            await _emailService.SubscribeEmailAsync(email);
        }


        //[HttpPost]
        //[Route("forgotPassword/{email}")]
        //[AllowAnonymous]
        //public async Task ForgotPassword(string email)
        //{
        //    await _emailService.ForgotPasswordAsync(email);
        //}

        /// <summary>
        /// Sends an email from any user/guest with suggestions. Used on a page Contacts
        /// </summary>
        /// <param name="request">EmailRequest: fullName, email, text</param>
        [HttpPost]
        [Route("send")]
        [AllowAnonymous]
        public async Task SendEmail(EmailRequest request)
        {
            await _emailService.SendEmailAsync(request);
        }
    }
}