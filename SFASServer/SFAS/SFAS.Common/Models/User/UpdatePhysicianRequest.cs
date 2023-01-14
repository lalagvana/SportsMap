using System.ComponentModel.DataAnnotations;

namespace SFAS.Common.Models.User
{
    public class UpdatePhysicianRequest
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Password { get; set; }
    }
}
