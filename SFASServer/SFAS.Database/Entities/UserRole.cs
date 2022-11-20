using Microsoft.AspNetCore.Identity;

namespace SFAS.Database.Entities
{
    public class UserRole : IdentityUserRole<Guid>
    {
        public virtual IdentityRole<Guid> Role { get; set; }
    }
}