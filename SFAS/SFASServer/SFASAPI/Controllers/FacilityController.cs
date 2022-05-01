using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.Facility;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    [ApiController]
    [Route("/api/facility")]
    public class PatientsController : ControllerBase
    {
        private readonly IFacilityService _facilityService;

        public PatientsController(IFacilityService facilityService)
        {
            _facilityService = facilityService;
        }
        
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<FacilityDto>> GetFacility(Guid id)
        {
            return await _facilityService.GetFacility(id);
        }
        
        [HttpPost]
        [Route("search")]
        public async Task<IEnumerable<FacilityWithIdDto>> SearchFacilities(FacilitySearchRequest request)
        {
            return await _facilityService.SearchFacilities(request);
        }
        
        [HttpPost]
        [Route("location/{id}")]
        public async Task<ActionResult<LocationDto>> GetLocation(Guid id)
        {
            return await _facilityService.GetLocation(id);
        }

        [HttpPost]
        [Route("location/list")]
        public async Task<ActionResult<LocationDto>> GetLocationsList()
        {
            return await _facilityService.GetLocationsList();
        }
    }
}
