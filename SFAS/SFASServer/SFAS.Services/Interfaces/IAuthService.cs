using SFAS.Common.Models.Admin;

namespace SFAS.Services.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponse> Authenticate(LoginRequest request);
    }
}
