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
                .ReverseMap();
            CreateMap<FacilityWithIdDto, SportsFacility>()
                .ReverseMap()
                .ForMember(x => x.CoveringType, opt => opt.MapFrom(x => (CoveringType?)x.CoveringType))
                .ForMember(x => x.PayingType, opt => opt.MapFrom(x => (PayingType?)x.PayingType))
                .ForMember(x => x.Type, opt => opt.MapFrom(x => (FacilityType?)x.Type));
        }
    }
}
