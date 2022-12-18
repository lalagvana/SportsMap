using Microsoft.AspNetCore.Http;

namespace SFAS.Common.Helpers
{
    /// <summary>
    /// Service that resolves current user name either from http context or from class field.
    /// </summary>
    public class UserResolverService : IUserResolverService
    {
        #region private fields

        private readonly IHttpContextAccessor _accessor;
        private string _username;

        #endregion

        #region public methods

        /// <summary>
        /// Constructor.
        /// </summary>
        public UserResolverService(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        /// <inheritdoc/>
        public string GetUserName()
        {
            if (!string.IsNullOrEmpty(_username))
            {
                return _username;
            }

            return _accessor.HttpContext?.User.Identity?.Name;
        }

        /// <inheritdoc/>
        public void SetUserName(string username)
        {
            _username = username;
        }

        #endregion
    }
}
