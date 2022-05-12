using AutoMapper;
using SFAS.Common.Models.Enums;
using SFAS.Common.Models.Facility;
using SFAS.Database.Entities;

namespace SFAS.Services.Services.Common
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<FacilityDto, SportsFacility>()
                .ReverseMap()
                .ForMember(x => x.CoveringType, opt => opt.MapFrom(x => x.CoveringType != null ? (CoveringType?)x.CoveringType : null))
                .ForMember(x => x.PayingType, opt => opt.MapFrom(x => x.PayingType != null ? (PayingType?)x.PayingType : null))
                .ForMember(x => x.PropertyForm, opt => opt.MapFrom(x => x.PropertyForm != null ? (PropertyForm?)x.PropertyForm : null))
                .ForMember(x => x.Type, opt => opt.MapFrom(x => (FacilityType)x.Type))
                .IncludeAllDerived();
            CreateMap<FacilityDto, SportsFacility>()
                .ReverseMap()
                .ForMember(x => x.CoveringType, opt => opt.MapFrom(x => (CoveringType?)x.CoveringType))
                .ForMember(x => x.PayingType, opt => opt.MapFrom(x => (PayingType?)x.PayingType))
                .ForMember(x => x.Type, opt => opt.MapFrom(x => (FacilityType?)x.Type));
        }
    }
}
