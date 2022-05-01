using SFAS.Common.Models.Enums;

namespace SFAS.Common.Models.Facility
{
    public class FacilityDto
    {
        public FacilityDto(FacilityType type, string name, string owner, PropertyForm propertyForm, double? length, double? width, double? area, long? actualWorkload, long? annualCapacity, string notes, double? height, string? size, double? depth, CoveringType? coveringType, bool? isAccessibleForDisabled, PayingType? payingType, string whoCanUse, string link, string phoneNumber, string openHours, int? eps, bool hidden)
        {
            Type = type;
            Name = name;
            Owner = owner;
            PropertyForm = propertyForm;
            Length = length;
            Width = width;
            Area = area;
            ActualWorkload = actualWorkload;
            AnnualCapacity = annualCapacity;
            Notes = notes;
            Height = height;
            Size = size;
            Depth = depth;
            CoveringType = coveringType;
            IsAccessibleForDisabled = isAccessibleForDisabled;
            PayingType = payingType;
            WhoCanUse = whoCanUse;
            Link = link;
            PhoneNumber = phoneNumber;
            OpenHours = openHours;
            EPS = eps;
            Hidden = hidden;
        }

        public FacilityType Type { get; set; }

        public string Name { get; set; }

        //public Guid AddressId { get; set; }

        public string Owner { get; set; }

        public PropertyForm PropertyForm { get; set; }

        public double? Length { get; set; }

        public double? Width { get; set; }

        public double? Area { get; set; }

        public long? ActualWorkload { get; set; }

        public long? AnnualCapacity { get; set; }

        //public Guid? DocumentId { get; set; }

        public string Notes { get; set; }

        public double? Height { get; set; }

        public string? Size { get; set; }

        public double? Depth { get; set; }

        public CoveringType? CoveringType { get; set; }

        //public Guid? PhotoId { get; set; }

        public bool? IsAccessibleForDisabled { get; set; }

        public PayingType? PayingType { get; set; }

        public string WhoCanUse { get; set; }

        public string Link { get; set; }

        public string PhoneNumber { get; set; }

        public string OpenHours { get; set; }

        public int? EPS { get; set; }

        public bool Hidden { get; set; }
    }
}
