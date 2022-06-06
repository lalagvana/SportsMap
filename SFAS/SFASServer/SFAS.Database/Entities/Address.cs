using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class Address : EntityBase
    {
        [Key]
        [Required]
        public Guid AddressId { get; set; }

        public string AddressString { get; set; }

        public virtual ICollection<SportsFacility> Facilities { get; set; } = new HashSet<SportsFacility>();
    }
}
