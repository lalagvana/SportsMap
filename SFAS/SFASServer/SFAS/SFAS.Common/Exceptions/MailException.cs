using System.Net;

namespace SFAS.Common.Exceptions
{
    public class MailException : BaseException
    {
        public MailException(string message) : base(HttpStatusCode.InternalServerError, message) { }
        public MailException(string message, string loggedMessage) : base(HttpStatusCode.InternalServerError, message, loggedMessage) { }
    }
}
