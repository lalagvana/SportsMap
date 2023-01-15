using System.ComponentModel.DataAnnotations;

namespace SFAS.Common.Models.User
{
    public class UpdateUserAdminRequest : UpdatePhysicianRequest
    {
        /// <summary>
        /// User's E-mail
        /// </summary>
        [Required]
        public string Email { get; set; }
        
        /// <summary>
        /// User e-mail is already confirmed flag
        /// </summary>
        public bool EmailConfirmed { get; set; }
        
        /// <summary>
        /// If user is SSO user
        /// </summary>
        public bool IsExternalUser { get; set; }

        /// <summary>
        /// If user is Admin
        /// </summary>
        public bool IsAdmin { get; set; }

        /// <summary>
        /// User's Athena provider Id
        /// </summary>
        public int? AthenaProviderId { get; set; }
    }
}
