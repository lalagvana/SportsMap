using System.Net;
using Microsoft.AspNetCore.Identity;

namespace SFAS.Common.Exceptions
{
    public class AuthException : BaseException
    {
        public AuthException(string message) : base(HttpStatusCode.Unauthorized, message) { }
        public AuthException(string message, string loggedMessage) : base(HttpStatusCode.Unauthorized, message, loggedMessage) { }

        public AuthException(IEnumerable<IdentityError> identityErrors) : base(HttpStatusCode.Unauthorized, String.Join("; ", identityErrors.Select(x => x.Description))) { }

        public AuthException(IEnumerable<IdentityError> identityErrors, string message) : base(HttpStatusCode.Unauthorized, message, String.Join("; ", identityErrors.Select(x => x.Description))) { }
    }
}
