using AutoMapper;
using Kendo.DynamicLinqCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SFAS.Common.Exceptions;
using SFAS.Common.Extensions;
using SFAS.Common.Helpers;
using SFAS.Common.Models;
using SFAS.Common.Models.User;
using SFAS.Database;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services.Services
{
    public class UserService : AuthenticatedService, IUsersService
    {
        #region private fields

        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        private readonly IEmailService _mailService;
        private readonly ILogger<UserService> _logger;
        private readonly RoleManager<IdentityRole<Guid>> _roleManager;
        private readonly IHttpContextAccessor _httpContextAccessor;

        #endregion

        #region public methods

        public UserService(
            ApplicationDbContext dbContext,
            IMapper mapper,
            UserManager<User> userManager,
            IHttpContextAccessor accessor,
            IUserResolverService userResolverService,
            IEmailService mailService,
            ILogger<UserService> logger,
            RoleManager<IdentityRole<Guid>> roleManager) : base(userManager, userResolverService)
        {
            _db = dbContext;
            _mapper = mapper;
            _mailService = mailService;
            _logger = logger;
            _roleManager = roleManager;
            _httpContextAccessor = accessor;
        }

        public async Task<UserDto> UpdateUser(Guid id, UserDto request)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                throw new NotFoundException("Physician not found");
            }

            _logger.LogInformation($"Started physician update: {user.UserName}");
            
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                throw new InternalServerException(string.Join("; ", result.Errors.Select(x => x.Description)));
            }

            if (!string.IsNullOrEmpty(request.Password))
            {
                var passwordValidationResult = await ValidatePassword(request.Password);
                if (!passwordValidationResult.Succeeded)
                {
                    throw new BadRequestException(passwordValidationResult.Errors);
                }
                var removePasswordResult = await _userManager.RemovePasswordAsync(user);
                if (!removePasswordResult.Succeeded)
                {
                    throw new InternalServerException(string.Join("; ", removePasswordResult.Errors.Select(x => x.Description)));
                }
                var addPasswordResult = await _userManager.AddPasswordAsync(user, request.Password);
                if (!addPasswordResult.Succeeded)
                {
                    throw new InternalServerException(string.Join("; ", addPasswordResult.Errors.Select(x => x.Description)));
                }
            }

            _logger.LogInformation($"Finished user update: {user.UserName}");
            return _mapper.Map<UserDto>(user);
        }

        public TypedDataSourceResult<UserDto> GetAllUsers(DataSourceRequest request)
        {
            return _mapper.ProjectTo<UserDto>(_userManager.Users)
                .ToTypedDataSourceResult(request);
        }

        public async Task<List<string>> GetAllRolesAsync()
        {
            return await Task.FromResult(_roleManager.Roles.Select(x => x.Name).ToList());
        }

        public async Task DeleteUser(Guid id)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (user == null)
            {
                throw new NotFoundException("Physician not found");
            }
            await DeleteUser(user);
        }

        public async Task<UserDto> CreateUser(CreateUserRequest request)
        {
            var user = _mapper.Map<User>(request);
            user.EmailConfirmed = false;
            User existingUser = await _db.Users.IgnoreQueryFilters().FirstOrDefaultAsync(x => x.UserName == user.UserName);
            if (existingUser != null)
            {
                if (existingUser.DeletedAt.HasValue)
                {
                    _logger.LogInformation($"Creating a new user from deleted account: {existingUser.UserName}");
                    existingUser = _mapper.Map(request, existingUser);
                    existingUser.DeletedByID = null;
                    existingUser.DeletedAt = null;
                    existingUser.CreatedAt = DateTime.UtcNow;
                    var updateResult = await _userManager.UpdateAsync(existingUser);
                    if (!updateResult.Succeeded)
                    {
                        throw new CreateUserException(string.Join(' ', updateResult.Errors.Select(x => x.Description)).ConvertNullOrEmptyTo("Failed to create new user"));
                    }
                    existingUser.DeletedAt = null;
                    await _userManager.RemovePasswordAsync(existingUser);

                    var roles = await _userManager.GetRolesAsync(existingUser);
                    await _userManager.RemoveFromRolesAsync(existingUser, roles);

                    user = existingUser;
                }
                else
                {
                    throw new CreateUserException("User already exists, please specify different user name");
                }
            }
            else
            {
                var createUserResult = await _userManager.CreateAsync(user);
                _logger.LogInformation($"Created a new user: {user.UserName}");
                if (!createUserResult.Succeeded)
                {
                    throw new CreateUserException(createUserResult.Errors, "Failed to create new user");
                }
            }

            return _mapper.Map<UserDto>(user);
        }

        public async Task<UserDto> GetUser(Guid id)
        {
            var physician = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == id);

            throw new NotImplementedException();
        }
        
        #endregion

        #region private methods

        private async Task DeleteUser(User user)
        {
            await _userManager.RemovePasswordAsync(user);
            // Then remove user
            user.EmailConfirmed = false;
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
            await _userManager.DeleteAsync(user);
            _logger.LogInformation($"User {user.Email} was deleted with roles and passwords");
        }

        #endregion
    }
}
