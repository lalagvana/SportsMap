using System.Net;

namespace SFAS.Common.Exceptions
{
    public class ApiResponseException : BaseException
    {
        public Status Status;

        public ApiResponseException(HttpStatusCode code, string message) : base(code, message)
        {
        }

        public ApiResponseException(HttpStatusCode code, string message, string loggedMessage) : base(code, message, loggedMessage)
        {
        }

        public ApiResponseException(string message, Status status) : base(HttpStatusCode.InternalServerError, message)
        {
            Status = status;
        }
    }

    public enum Status
    {
        Ok,
        Warning,
        Error
    }
}
