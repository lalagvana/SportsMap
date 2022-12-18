using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.AuthDtos;
using SFAS.Common.Models.User;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    [ApiController]
    [Route("/api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUsersService _userService;

        public AdminController(IAuthService authService, IUsersService userService)
        {
            _authService = authService;
            _userService = userService;
        }

        /// <summary>
        /// Refresh access token
        /// </summary>
        [AllowAnonymous]
        [HttpPost("token/refresh")]
        public async Task<ActionResult<LoginResponse>> RefreshToken(RefreshTokenRequest request)
        {
            var response = await _authService.RefreshToken(request);
            return Ok(response);
        }

        /// <summary>
        /// Confirm user account
        /// </summary>
        [HttpPost("confirm")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> ConfirmEmail(PasswordResetRequest request)
        {
            var response = await _authService.ConfirmUser(request);
            return Ok(response);
        }

        /// <summary>
        /// Send mail with password reset link
        /// </summary>
        [HttpPost("sendpasswordresetlink")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> SendPasswordResetLink(SendPasswordResetLinkRequest request)
        {
            var response = await _authService.SendPasswordResetLink(request);
            return Ok(response);
        }

        /// <summary>
        /// Reset user password
        /// </summary>
        [HttpPost("passwordreset")]
        [AllowAnonymous]
        public async Task<ActionResult<bool>> PasswordReset(PasswordResetRequest request)
        {
            var response = await _authService.ResetPassword(request);
            return Ok(response);
        }
        
        /// <summary>
        /// Get own account information
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<UserDto>> GetAccountInfo()
        {
            return await _authService.GetAccountInfo();
        }

        #region Users

        /// <summary>
        /// Updates user account (admin only). Now not used in UI.
        /// </summary>
        /// <param name="request">UserDto: userId, firstName, lastName, userName, password</param>
        /// <returns>Updated userDto</returns>
        [HttpPut("users/{userID}")]
        public async Task<ActionResult<UserDto>> UpdateUser(UserDto request)
        {
            return await _userService.UpdateUser(request.UserId, request);
        }

        ///// <summary>
        ///// Get a list of user accounts (admin only)
        ///// </summary>
        ///// <param name="request">DataSourceRequest from Kendo.DynamicLinqCore with params to filter and sort.</param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("users/get")]
        //public ActionResult<TypedDataSourceResult<UserDto>> GetUsers(DataSourceRequest request)
        //{
        //    return _userService.GetAllUsers(request);
        //}

        /// <summary>
        /// Deletes user account (admin only). Now not used in UI.
        /// </summary>
        /// <param name="id">User's id to delete</param>
        [HttpDelete]
        [Route("users/{id}")]
        public async Task<ActionResult> DeleteUser(Guid id)
        {
            await _userService.DeleteUser(id);
            return Ok();
        }

        ///// <summary>
        ///// Get user details (admin only)
        ///// </summary>
        ///// <param name="id"></param>
        ///// <returns></returns>
        //[HttpGet]
        //[Route("users/{id}")]
        //public async Task<ActionResult<UserDto>> GetUserDetails(Guid id)
        //{
        //    return await _userService.GetUser(id);
        //}

        /// <summary>
        /// Creates a new user account (admin only). Now not used in UI.
        /// </summary>
        /// <param name="request">CreateUserRequest: firstName, lastName, userName, password</param>
        /// <returns>Created user DTO</returns>
        [HttpPost("users")]
        public async Task<ActionResult<UserDto>> CreateUser(CreateUserRequest request)
        {
            return await _userService.CreateUser(request);
        }

        #endregion
    }
}
