using SFAS.Common.Models.Enums;

namespace SFAS.Common.Models.Facility
{
    public class FacilityWithIdDto : FacilityDto
    {
        public Guid FacilityId { get; set; }

        public FacilityWithIdDto(FacilityType type, string name, string owner, PropertyForm propertyForm, double? length, double? width, double? area, long? actualWorkload, long? annualCapacity, string notes, double? height, string? size, double? depth, CoveringType? coveringType, bool? isAccessibleForDisabled, PayingType? payingType, string whoCanUse, string link, string phoneNumber, string openHours, int? eps, bool hidden) : base(type, name, owner, propertyForm, length, width, area, actualWorkload, annualCapacity, notes, height, size, depth, coveringType, isAccessibleForDisabled, payingType, whoCanUse, link, phoneNumber, openHours, eps, hidden)
        {
        }
    }
}
