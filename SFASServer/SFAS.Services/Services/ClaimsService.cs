using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services.Services
{
    public class ClaimsService : IClaimsService
    {
        private readonly UserManager<User> _userManager;

        public ClaimsService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<List<Claim>> GetRoleClaimsAsync(User user)
        {
            return new List<Claim>
            {
            };
        }
    }
}