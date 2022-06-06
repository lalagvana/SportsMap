using Kendo.DynamicLinqCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.Facility;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    [ApiController]
    [Route("/api/facility")]
    public class FacilityController : ControllerBase
    {
        private readonly IFacilityService _facilityService;

        public FacilityController(IFacilityService facilityService)
        {
            _facilityService = facilityService;
        }
        
        [HttpGet]
        [Route("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<FacilityDto>> GetFacility(Guid id)
        {
            return await _facilityService.GetFacility(id);
        }
        
        [HttpPost]
        [Route("search")]
        [AllowAnonymous]
        public IEnumerable<FacilityDto> SearchFacilities(DataSourceRequest request)
        {
            return _facilityService.SearchFacilities(request);
        }
        
        [HttpPost]
        [Route("location/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<LocationDto>> GetLocation(Guid id)
        {
            return await _facilityService.GetLocation(id);
        }

        [HttpPost]
        [Route("location/list")]
        [AllowAnonymous]
        public async Task<ActionResult<LocationDto>> GetLocationsList()
        {
            return await _facilityService.GetLocationsList();
        }
    }
}
