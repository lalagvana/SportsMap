using Microsoft.AspNetCore.Identity;

namespace SFAS.Common.Exceptions
{
    public class CreateUserException : AuthException
    {
        public CreateUserException(string message) : base(message) { }
        public CreateUserException(string message, string loggedMessage) : base (message, loggedMessage) { }

        public CreateUserException(IEnumerable<IdentityError> identityErrors) : base(identityErrors) { }

        public CreateUserException(IEnumerable<IdentityError> identityErrors, string message) : base(identityErrors, message) { }
    }
}
