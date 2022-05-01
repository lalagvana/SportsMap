using SFAS.Common.Models.Facility;

namespace SFAS.Services.Interfaces
{
    public interface IFacilityService
    {
        Task<FacilityWithIdDto> CreateFacility(FacilityDto request);
        Task<FacilityWithIdDto> UpdateFacility(Guid id, FacilityWithIdDto request);
        Task<FacilityDto> GetFacility(Guid id);
        Task DeleteFacility(Guid id);
        Task<LocationDto> GetLocation(Guid id);
        Task<IEnumerable<FacilityWithIdDto>> SearchFacilities(FacilitySearchRequest request);
        Task<LocationDto> GetLocationsList();
        Task HideFacility(Guid id);
        Task UnhideFacility(Guid id);
        Task UploadGroupOfFacilities(byte[] file);
        Task<byte[]> DownloadReport();
    }
}
