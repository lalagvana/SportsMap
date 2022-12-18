using Microsoft.AspNetCore.Identity;
using SFAS.Common.Helpers;
using SFAS.Database.Entities;

namespace SFAS.Services
{
    public class AuthenticatedServiceBase
    {
        protected readonly UserManager<User> _userManager;
        protected readonly IUserResolverService _userResolverService;

        public AuthenticatedServiceBase(UserManager<User> userManager, IUserResolverService userResolverService)
        {
            _userManager = userManager;
            _userResolverService = userResolverService;
        }

        protected async Task<User> GetCurrentUser()
        {
            var userName = _userResolverService.GetUserName();

            // Do not call FindByName with null, it will crash.
            if (string.IsNullOrEmpty(userName))
            {
                return null;
            }

            return await _userManager.FindByNameAsync(userName);
        }
    }
}
