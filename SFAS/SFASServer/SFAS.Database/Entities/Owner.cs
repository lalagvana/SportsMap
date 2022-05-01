using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class Owner : EntityBase
    {
        [Key]
        [Required]
        public Guid OwnerId { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual ICollection<SportsFacility> Facilities { get; set; } = new HashSet<SportsFacility>();
    }
}
