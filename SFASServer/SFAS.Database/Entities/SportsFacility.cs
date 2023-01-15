using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class SportsFacility : EntityBase
    {
        [Key]
        [Required]
        public Guid FacilityId { get; set; }

        [Required]
        public int Type { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public Guid? AddressId { get; set; }

        public Guid? OwnerId { get; set; }

        public int? PropertyForm { get; set; }

        public double? Length { get; set; }

        public double? Width { get; set; }

        public double? Area { get; set; }

        public int? ActualWorkload { get; set; }

        public int? AnnualCapacity { get; set; }

        public Guid? DocumentId { get; set; }

        public string? Notes { get; set; }

        public double? Height { get; set; }

        public string? Size { get; set; }

        public double? Depth { get; set; }

        public int? CoveringType { get; set; }

        public byte[]? Photo { get; set; }

        public bool? IsAccessibleForDisabled { get; set; }

        public int? PayingType { get; set; }

        public string? WhoCanUse { get; set; }

        public string? Link { get; set; }

        public string? PhoneNumber { get; set; }

        public string? OpenHours { get; set; }

        public int? EPS { get; set; }

        public bool Hidden { get; set; }

        public virtual Owner? Owner { get; set; }
        public virtual Document? Document { get; set; }
        public virtual Address? Address { get; set; }
    }
}
