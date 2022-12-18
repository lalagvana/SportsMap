using System;

namespace SFAS.Common.Models.AuthDtos
{
    public class PasswordResetRequest
    {
        public Guid UserId { get; set; }
        public string Code { get; set; }
        public string Password { get; set; }
    }
}
