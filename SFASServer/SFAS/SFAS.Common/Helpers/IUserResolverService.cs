namespace SFAS.Common.Helpers
{
    /// <summary>
    /// Interface for resolving current user name.
    /// </summary>
    public interface IUserResolverService
    {
        /// <summary>
        /// Get current user name, first from class field, then from http context.
        /// </summary>
        string GetUserName();

        /// <summary>
        /// Set current user name. If it is set by this method, then <see cref="GetUserName"/> will return it.
        /// </summary>
        void SetUserName(string username);
    }
}
