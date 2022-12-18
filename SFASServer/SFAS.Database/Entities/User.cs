using Microsoft.AspNetCore.Identity;
using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class User : IdentityUser<Guid>, ICreated, IDeleted, IModified
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

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
    }
}
