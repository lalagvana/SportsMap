using SFAS.Common.Models.Enums;

namespace SFAS.Common.Models.Facility
{
    public class FacilityDto
    {
        public Guid? FacilityId { get; set; }

        public FacilityType Type { get; set; }

        public string Name { get; set; }

        //public Guid? AddressId { get; set; }

        public string? OwnerName { get; set; }

        public PropertyForm? PropertyForm { get; set; }

        public double? Length { get; set; }

        public double? Width { get; set; }

        public double? Area { get; set; }

        public int? ActualWorkload { get; set; }

        public int? AnnualCapacity { get; set; }

        //public Guid? DocumentId { get; set; }

        public string? Notes { get; set; }

        public double? Height { get; set; }

        public string? Size { get; set; }

        public double? Depth { get; set; }

        public CoveringType? CoveringType { get; set; }

        //public Guid? PhotoId { get; set; }

        public bool? IsAccessibleForDisabled { get; set; }

        public PayingType? PayingType { get; set; }

        public string? WhoCanUse { get; set; }

        public string? Link { get; set; }

        public string? PhoneNumber { get; set; }

        public string? OpenHours { get; set; }

        public int? EPS { get; set; }

        public bool Hidden { get; set; }
    }
}
