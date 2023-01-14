using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SFAS.Common;
using SFAS.Common.Exceptions;
using SFAS.Common.Helpers;
using SFAS.Common.Models.AuthDtos;
using SFAS.Common.Models.User;
using SFAS.Database;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services
{
    public class AuthService : AuthenticatedService, IAuthService
    {
        #region private fields

        private readonly AppSettings _appSettings;
        private readonly ApplicationDbContext _db;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;
        private readonly IEmailService _mailService;
        private readonly IUsersService _usersService;
        private readonly IClaimsService _claimsService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        #endregion

        #region public methods

        public AuthService(
            ApplicationDbContext dbContext,
            IMapper mapper,
            IOptions<AppSettings> appSettings,
            UserManager<User> userManager,
            IHttpContextAccessor contextAccessor,
            IUserResolverService userResolverService,
            ILogger<AuthService> logger,
            IEmailService mailService,
            IUsersService usersService,
            IClaimsService claimsService) : base(userManager, userResolverService)
        {
            _appSettings = appSettings.Value;
            _db = dbContext;
            _mapper = mapper;
            _logger = logger;
            _mailService = mailService;
            _usersService = usersService;
            _claimsService = claimsService;
            _httpContextAccessor = contextAccessor;
        }

        public async Task<LoginResponse> Authenticate(LoginRequest request)
        {
            var user = _userManager.Users.SingleOrDefault(r => r.UserName == request.Name);
            if (user == null)
            {
                throw new AuthException("Incorrect user login or password");
            }
            if (!user.EmailConfirmed)
            {
                throw new AuthException("Email is not confirmed");
            }
            if (user.IsExternalUser)
            {
                throw new AuthException("User is not configured to log in with this type of authentication");
            }
            var result = await _userManager.CheckPasswordAsync(user, request.Password);
            if (!result)
            {
                throw new AuthException("Incorrect user login or password");
            }

            _logger.LogInformation($"User {user.UserName} was successfully authenticated.");
            return await GenerateLoginResponse(user);
        }

        public async Task<LoginResponse> RefreshToken(RefreshTokenRequest request)
        {
            var tokenValidationParameters = new TokenValidationParameters()
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = AuthHelper.GetSymmetricSecurityKey(_appSettings.Secret),
                ValidateLifetime = false
            };
            var cp = new JwtSecurityTokenHandler()
                .ValidateToken(request.AccessToken, tokenValidationParameters, out var validatedToken);
            if (cp == null)
            {

                throw new AuthException("Invalid token", "Could not validate or get claimprincipal from access token");
            }

            var nameClaim = cp.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name);
            if (nameClaim == null || string.IsNullOrEmpty(nameClaim.Value))
            {
                throw new AuthException("Invalid token", "Can't get user id from claims");
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == nameClaim.Value);
            if (user == null)
            {
                throw new AuthException("Invalid token", $"User with id {nameClaim.Value} not found");
            }

            if (!user.HasValidRefreshToken(request.RefreshToken))
            {
                throw new AuthException("There is no valid refresh tokens found for current user, please authorize again");
            }

            user.RemoveRefreshToken(request.RefreshToken);
            await _db.SaveChangesAsync();
            return await GenerateLoginResponse(user);
        }

        public async Task<bool> ConfirmUser(PasswordResetRequest request)
        {
            if (request == null || request.Code == null)
            {
                throw new AuthException("Invalid data provided");
            }

            request.Code = new Base62.Base62Converter().Decode(request.Code);
            _logger.LogInformation($"Validating user {request.UserId} with code {request.Code}");

            var passwordValidationResult = await ValidatePassword(request.Password);
            if (!passwordValidationResult.Succeeded)
            {
                throw new AuthException(passwordValidationResult.Errors);
            }

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == request.UserId);
            if (user == null)
            {
                throw new AuthException("Incorrect user ID or code");
            }

            var isEmailTokenValid = await _userManager.VerifyUserTokenAsync(
                user,
                _userManager.Options.Tokens.EmailConfirmationTokenProvider,
                UserManager<User>.ConfirmEmailTokenPurpose,
                request.Code);

            if (!isEmailTokenValid)
            {
                throw new AuthException("Incorrect user ID or code", $"Email token is not valid for user {user}");
            }

            await _userManager.RemovePasswordAsync(user);
            var passwordResult = await _userManager.AddPasswordAsync(user, request.Password);
            if (!passwordResult.Succeeded)
            {
                throw new AuthException(passwordResult.Errors);
            }

            user.EmailConfirmed = true;
            var confirmEmailResult = await _userManager.UpdateAsync(user);
            if (!confirmEmailResult.Succeeded)
            {
                throw new AuthException(confirmEmailResult.Errors, "Failed to confirm e-mail, contact administrator");
            }
            return true;
        }

        public async Task<bool> ResetPassword(PasswordResetRequest request)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Id == request.UserId);
            _logger.LogInformation($"Resetting password for user {user.UserName}");
            if (user == null)
            {
                throw new NotFoundException("User not found");
            }

            var resetPasswordResult = await _userManager.ResetPasswordAsync(user, new Base62.Base62Converter().Decode(request.Code), request.Password);
            if (!resetPasswordResult.Succeeded)
            {
                throw new AuthException(resetPasswordResult.Errors, "Can't reset user password");
            }

            return true;
        }

        public async Task<UserDto> UpdateAccount(UpdatePhysicianRequest request)
        {
            var physician = await GetCurrentUser();
            if (physician == null)
            {
                throw new NotFoundException("User not found");
            }

            physician = _mapper.Map(request, physician);
            var result = await _userManager.UpdateAsync(physician);
            if (!result.Succeeded)
            {
                throw new InternalServerException(string.Join("; ", result.Errors.Select(x => x.Description)));
            }

            if (!string.IsNullOrEmpty(request.Password))
            {
                var removePasswordResult = await _userManager.RemovePasswordAsync(physician);
                if (!removePasswordResult.Succeeded)
                {
                    throw new InternalServerException(string.Join("; ", result.Errors.Select(x => x.Description)));
                }
                var addPasswordResult = await _userManager.AddPasswordAsync(physician, request.Password);
                if (!addPasswordResult.Succeeded)
                {
                    throw new InternalServerException(string.Join("; ", result.Errors.Select(x => x.Description)));
                }
            }
            return _mapper.Map<UserDto>(physician);
        }

        public async Task<UserDto> GetAccountInfo()
        {
            var physician = await GetCurrentUser();
            if (physician == null)
            {
                throw new NotFoundException("User not found");
            }

            return _mapper.Map<UserDto>(physician);
        }
        
        public async Task<bool> SendPasswordResetLink(SendPasswordResetLinkRequest request)
        {
            //var user = await _userManager.FindByNameAsync(request.Username);
            //if (user == null)
            //{
            //    throw new NotFoundException("User not found");
            //}

            //if (!user.EmailConfirmed)
            //{
            //    throw new BadRequestException("Account is not confirmed");
            //}

            //var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            //var queryParams = new Dictionary<string, string>
            //    {
            //        { "userId", user.Id.ToString() },
            //        { "code", resetToken.ToBase62() },
            //        { "userName", user.UserName },
            //        { "email", user.Email },
            //        { "IsConfirm", false.ToString() }
            //    };
            //_logger.LogInformation($"Sending password request link with params: {JsonConvert.SerializeObject(queryParams)}");

            //var httpRequest = _httpContextAccessor.HttpContext.Request;
            //UriBuilder builder = new(httpRequest.Scheme, httpRequest.Host.Host);
            //if (httpRequest.Host.Port.HasValue)
            //{
            //    builder.Port = httpRequest.Host.Port.Value;
            //}
            //builder.Path = "confirm";
            //var callbackUrl = QueryHelpers.AddQueryString(builder.Uri.AbsoluteUri, queryParams);
            //var message = await _mailService.GenerateResetPasswordMailMessage(user, callbackUrl);
            //return await _mailService.SendEmailAsync(user.Email, "SFAS password reset requested", message);

            return true;
        }

        public static string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        #endregion

        #region private methods

        private async Task<ClaimsIdentity> GetIdentity(User user)
        {
            var claims = await _claimsService.GetRoleClaimsAsync(user);
            claims.AddRange(new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.UserName),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, string.Join(", ", await _userManager.GetRolesAsync(user))),
            });

            ClaimsIdentity claimsIdentity =
                new(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
            return claimsIdentity;
        }

        private async Task<string> GenerateJwtToken(User user)
        {
            var now = DateTime.UtcNow;
            var jwt = new JwtSecurityToken(
                issuer: _appSettings.TokenIssuer,
                audience: _appSettings.TokenAudience,
                notBefore: now,
                claims: (await GetIdentity(user)).Claims,
                expires: now.Add(TimeSpan.FromMinutes(_appSettings.TokenValidMinutes)),
                signingCredentials: new SigningCredentials(AuthHelper.GetSymmetricSecurityKey(_appSettings.Secret), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        private async Task<LoginResponse> GenerateLoginResponse(User user)
        {
            var response = _mapper.Map<LoginResponse>(user);
            response.AccessToken = await GenerateJwtToken(user);
            response.AccessTokenExpiresIn = (int)TimeSpan.FromMinutes(_appSettings.TokenValidMinutes).TotalSeconds; //get from token or
            var refreshToken = GenerateRefreshToken();
            user.AddRefreshToken(refreshToken, _httpContextAccessor.HttpContext.Connection.RemoteIpAddress?.ToString());
            await _db.SaveChangesAsync();
            response.Role = (await _userManager.GetRolesAsync(user)).FirstOrDefault();
            response.RefreshToken = refreshToken;
            return response;
        }

        #endregion
    }
}
