using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.User;
using SFAS.Services.Interfaces;

namespace SFAS.API.Controllers
{
    /// <summary>
    /// Kek
    /// </summary>
    [ApiController]
    [Route("/api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserService _userService;

        public AdminController(IAuthService authService, IUserService userService)
        {
            _authService = authService;
            _userService = userService;
        }

        /// <summary>
        /// Authenticates user and returns LoginResponse with user info and token + refresh token. Used on a login page.
        /// After login - go to the list of facilities.
        /// </summary>
        /// <param name="request">LoginRequest: Name and Password of the user</param>
        /// <returns>LoginResponse with user info and token + refresh token</returns>
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<LoginResponse>> Token(LoginRequest request)
        {
            return await _authService.Authenticate(request);
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
            return await _userService.UpdateUser(request);
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
