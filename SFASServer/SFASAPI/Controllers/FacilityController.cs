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

        /// <summary>
        /// Returns Facility by its Id. Used for any user in the View facility mode (like when the user is just watching facility info).
        /// Contains all info about the facility. But not everything we should show for simple user who can't change it.
        /// </summary>
        /// <param name="id">Guid Facility Id</param>
        /// <returns>Facility Dto</returns>
        [HttpGet]
        [Route("{id:Guid}")]
        [AllowAnonymous]
        public async Task<ActionResult<FacilityDto>> GetFacility(Guid id)
        {
            return await _facilityService.GetFacility(id);
        }

        /// <summary>
        /// Filters and sorts facilities. Used for a page with list of facilities.
        /// </summary>
        /// <param name="request">DataSourceRequest from Kendo.DynamicLinqCore with params to filter and sort.</param>
        /// <returns>List of facilities as Facility Dto found</returns>
        [HttpPost]
        [Route("search")]
        [AllowAnonymous]
        public IEnumerable<FacilityDto> SearchFacilities(DataSourceRequest request)
        {
            return _facilityService.SearchFacilities(request);
        }

        #region Admin methods

        /// <summary>
        /// Creates a new facility FacilityDto with info about facility. Used on a page with all facilities + modal changing facility. For admins only.
        /// </summary>
        /// <param name="request">FacilityDto with info</param>
        /// <returns>Created facility DTO</returns>
        [HttpPost]
        [Route("facility")]
        public async Task<ActionResult<FacilityDto>> CreateFacility(FacilityDto request)
        {
            return await _facilityService.CreateFacility(request);
        }

        /// <summary>
        /// Updates a facility FacilityDto with info about facility. Used on a page with all facilities + modal creating facility. For admins only.
        /// </summary>
        /// <param name="request">FacilityDto with info</param>
        /// <returns>Created facility DTO</returns>
        [HttpPut]
        [Route("facility")]
        public async Task<ActionResult<FacilityDto>> UpdateFacility(FacilityDto request)
        {
            return await _facilityService.UpdateFacility(request.FacilityId.Value, request);
        }

        /// <summary>
        /// Deletes the facility by its id. Used in the list of facilities page.
        /// </summary>
        /// <param name="id">Facility to delete</param>
        [HttpDelete]
        [Route("facility/{id}")]
        public async Task<ActionResult> DeleteFacility(Guid id)
        {
            await _facilityService.DeleteFacility(id);
            return Ok();
        }

        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="file"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("facility/uploadGroup")]
        //public async Task UploadGroupOfFacilities(IFormFile file)
        //{
        //    await _facilityService.UploadGroupOfFacilities(file);
        //}

        //[HttpPost]
        //[Route("facility/downloadReport")]
        //public async Task<FileStreamResult> DownloadReport()
        //{
        //    return await _facilityService.DownloadReport();
        //}
        #endregion

    }
}
