using Microsoft.AspNetCore.Identity;
using SFAS.Database.Interfaces;

namespace SFAS.Database.Entities
{
    public class User : IdentityUser<Guid>, ICreated, IDeleted, IModified
    {
        public bool IsExternalUser { get; set; }

        public bool IsDeleted { get; set; }

        public Guid? CreatedByID { get; set; }
        public virtual User CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public Guid? ModifiedByID { get; set; }
        public virtual User ModifiedBy { get; set; }
        public DateTime? ModifiedAt { get; set; }
        public Guid? DeletedByID { get; set; }
        public virtual User DeletedBy { get; set; }
        public DateTime? DeletedAt { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
        public virtual ICollection<User> CreatedUsers { get; set; } = new HashSet<User>();
        public virtual ICollection<User> ModifiedUsers { get; set; } = new HashSet<User>();
        public virtual ICollection<User> DeletedUsers { get; set; } = new HashSet<User>();
        public virtual ICollection<RefreshToken> RefreshTokens { get; set; } = new HashSet<RefreshToken>();

        public bool HasValidRefreshToken(string refreshToken)
        {
            return RefreshTokens.Any(rt => rt.Token == refreshToken && rt.Active);
        }

        public void AddRefreshToken(string token, string remoteIpAddress, double daysToExpire = 5)
        {
            RefreshTokens.Add(new RefreshToken(token, DateTime.UtcNow.AddDays(daysToExpire), Id, remoteIpAddress));
        }

        public void RemoveRefreshToken(string refreshToken)
        {
            RefreshTokens.Remove(RefreshTokens.First(t => t.Token == refreshToken));
        }
        
    }
}
