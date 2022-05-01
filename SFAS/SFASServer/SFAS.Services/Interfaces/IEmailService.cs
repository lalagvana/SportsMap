using SFAS.Common.Models.Email;

namespace SFAS.Services.Interfaces
{
    public interface IEmailService
    {
        Task SubscribeEmailAsync(string email);
        Task ForgotPasswordAsync(string email);
        Task SendEmailAsync(EmailRequest request);
    }
}
