using Kendo.DynamicLinqCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        IEnumerable<FacilityWithIdDto> SearchFacilities(DataSourceRequest request);
        IEnumerable<FacilityWithIdDto> SearchFacilitiesAdmin(DataSourceRequest request);
        Task<LocationDto> GetLocationsList();
        Task HideFacility(Guid id);
        Task UnhideFacility(Guid id);
        Task UploadGroupOfFacilities(IFormFile file);
        Task<FileStreamResult> DownloadReport();
    }
}
