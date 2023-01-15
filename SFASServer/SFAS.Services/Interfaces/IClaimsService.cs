using System.Security.Claims;
using SFAS.Database.Entities;

namespace SFAS.Services.Interfaces
{
    public interface IClaimsService
    {
        Task<List<Claim>> GetRoleClaimsAsync(User user);
    }
}
