using System.Net;

namespace SFAS.Common.Exceptions
{
    public class ForbiddenException : BaseException
    {
        public ForbiddenException(string message) : base(HttpStatusCode.Forbidden, message) { }
    }
}
