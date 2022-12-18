using SFAS.Common.Models.User;

namespace SFAS.Services.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponse> Authenticate(LoginRequest request);
    }
}
