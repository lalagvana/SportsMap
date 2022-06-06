using Kendo.DynamicLinqCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models;
using SFAS.Common.Models.Admin;
using SFAS.Common.Models.Facility;
using SFAS.Common.Models.User;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    [ApiController]
    [Route("/api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly IFacilityService _facilityService;
        private readonly IAuthService _authService;
        private IUserService _userService;

        public AdminController(IFacilityService facilityService, IAuthService authService, IUserService userService)
        {
            _facilityService = facilityService;
            _authService = authService;
            _userService = userService;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<LoginResponse>> AuthAdmin(LoginRequest request)
        {
            return await _authService.Authenticate(request);
        }

        #region Facility
        [HttpPost]
        [Route("facility")]
        public async Task<ActionResult<FacilityDto>> CreateFacility(FacilityDto request)
        {
            return await _facilityService.CreateFacility(request);
        }

        [HttpPut]
        [Route("facility")]
        public async Task<ActionResult<FacilityDto>> UpdateFacility(Guid id, FacilityDto request)
        {
            return await _facilityService.UpdateFacility(id, request);
        }

        [HttpDelete]
        [Route("facility/{id}")]
        public async Task<ActionResult> DeleteFacility(Guid id)
        {
            await _facilityService.DeleteFacility(id);
            return Ok();
        }

        [HttpPut]
        [Route("facility/hide")]
        public async Task HideFacility(Guid id)
        {
            await _facilityService.HideFacility(id);
        }

        [HttpPut]
        [Route("facility/unhide")]
        public async Task UnhideFacility(Guid id)
        {
            await _facilityService.UnhideFacility(id);
        }

        [HttpPost]
        [Route("facility/uploadGroup")]
        public async Task UploadGroupOfFacilities(IFormFile file)
        {
            await _facilityService.UploadGroupOfFacilities(file);
        }

        [HttpPost]
        [Route("facility/downloadReport")]
        public async Task<FileStreamResult> DownloadReport()
        {
            return await _facilityService.DownloadReport();
        }
        #endregion

        #region Users

        /// <summary>
        /// Update user account (admin only)
        /// </summary>
        [HttpPut("users/{userID}")]
        public async Task<ActionResult<AdminUserDto>> UpdateUser(Guid userID, UpdateUserAdminRequest request)
        {
            return await _userService.UpdateUser(userID, request);
        }

        /// <summary>
        /// Get a list of user accounts (admin only)
        /// </summary>
        [HttpPost]
        [Route("users/get")]
        public ActionResult<TypedDataSourceResult<AdminUserDto>> GetUsers(DataSourceRequest request)
        {
            return _userService.GetAllUsers(request);
        }

        /// <summary>
        /// Delete user account (admin only)
        /// </summary>
        [HttpDelete]
        [Route("users/{id}")]
        public async Task<ActionResult> DeleteUser(Guid id)
        {
            await _userService.DeleteUser(id);
            return Ok();
        }

        /// <summary>
        /// Get user details (admin only)
        /// </summary>
        [HttpGet]
        [Route("users/{id}")]
        public async Task<ActionResult<UserDto>> GetUserDetails(Guid id)
        {
            return await _userService.GetUser(id);
        }

        /// <summary>
        /// Create new user account (admin only)
        /// </summary>
        [HttpPost("users")]
        public async Task<ActionResult<AdminUserDto>> CreateUser(CreateUserRequest request)
        {
            var response = await _userService.CreateUser(request);

            return CreatedAtAction("GetUsers", response);
        }
        #endregion
    }
}
