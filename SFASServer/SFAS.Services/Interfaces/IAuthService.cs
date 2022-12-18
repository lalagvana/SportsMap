using SFAS.Common.Models.AuthDtos;
using SFAS.Common.Models.User;

namespace SFAS.Services.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponse> Authenticate(LoginRequest request);
        Task<bool> ConfirmUser(PasswordResetRequest request);
        Task<LoginResponse> RefreshToken(RefreshTokenRequest request);
        Task<bool> SendPasswordResetLink(SendPasswordResetLinkRequest request);
        Task<bool> ResetPassword(PasswordResetRequest request);
        Task<UserDto> GetAccountInfo();
    }
}
