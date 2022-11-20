using System.Net;
using Microsoft.AspNetCore.Identity;

namespace SFAS.Common.Exceptions
{
    public class BadRequestException : BaseException
    {
        public BadRequestException(string message) : base(HttpStatusCode.BadRequest, message) { }
        public BadRequestException(string message, string loggedMessage) : base(HttpStatusCode.BadRequest, message, loggedMessage) { }

        public BadRequestException(IEnumerable<IdentityError> identityErrors) : base(HttpStatusCode.BadRequest, String.Join("\n", identityErrors.Select(x => x.Description))) { }

        public BadRequestException(IEnumerable<IdentityError> identityErrors, string message) : base(HttpStatusCode.BadRequest, message, String.Join("; ", identityErrors.Select(x => x.Description))) { }
    }
}
