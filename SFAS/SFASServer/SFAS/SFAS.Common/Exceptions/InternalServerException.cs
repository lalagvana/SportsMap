using System.Net;

namespace SFAS.Common.Exceptions
{
    public class InternalServerException : BaseException
    {
        public InternalServerException(string message) : base(HttpStatusCode.InternalServerError, message) { }
        public InternalServerException(string message, string loggedMessage) : base(HttpStatusCode.InternalServerError, message, loggedMessage) { }
    }
}
