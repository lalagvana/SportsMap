using Microsoft.AspNetCore.Identity;
using SFAS.Common.Helpers;
using SFAS.Database.Entities;

namespace SFAS.Services
{
    public class AuthenticatedService : AuthenticatedServiceBase
    {
        public AuthenticatedService(UserManager<User> userManager, IUserResolverService userResolverService)
            : base(userManager, userResolverService)
        { }

        protected async Task<IdentityResult> ValidatePassword(string newPassword)
        {
            var errors = new List<IdentityError>();

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
    }
}
