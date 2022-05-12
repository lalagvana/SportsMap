using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class Document : EntityBase
    {
        [Key]
        [Required]
        public Guid DocumentId { get; set; }

        public string? Name { get; set; }

        public string? Link { get; set; }

        public byte[]? Content { get; set; }

        public virtual ICollection<SportsFacility> Facilities { get; set; } = new HashSet<SportsFacility>();
    }
}
