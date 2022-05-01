using AutoMapper;
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
                .ReverseMap();
        }
    }
}
