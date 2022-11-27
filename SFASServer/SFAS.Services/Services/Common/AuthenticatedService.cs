using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using SFAS.Common.Models.Admin;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services.Services.Common
{
    public class AuthenticatedService : IAuthService
    {
        public readonly UserManager<User> _userManager;
        public readonly IHttpContextAccessor _httpContextAccessor;

        public AuthenticatedService(UserManager<User> userManager, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;
        }

        protected async Task<IdentityResult> ValidatePassword(string newPassword)
        {
            List<IdentityError> errors = new();

            var validators = _userManager.PasswordValidators;

            foreach (var validator in validators)
            {
                var result = await validator.ValidateAsync(_userManager, null, newPassword);

                if (!result.Succeeded)
                {
                    errors.AddRange(result.Errors);
                }
            }

            if (errors.Count > 0)
            {
                return IdentityResult.Failed(errors.ToArray());
            }

            return IdentityResult.Success;
        }

        protected async Task<User> GetCurrentUser()
        {
            return await _userManager.FindByNameAsync(_httpContextAccessor.HttpContext.User.Identity?.Name);
        }

        public Task<LoginResponse> Authenticate(LoginRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
