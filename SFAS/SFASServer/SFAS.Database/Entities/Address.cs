using SFAS.Database.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class Address : EntityBase
    {
        [Key]
        [Required]
        public Guid AddressId { get; set; }

        [Required]
        public string AdmArea { get; set; }

        [Required]
        public string District { get; set; }

        [Required]
        public string AddressString { get; set; }

        [Required]
        public string Longitude_WGS84 { get; set; }

        [Required]
        public string Latitude_WGS84 { get; set; }

        [Required]
        public string Coordinates { get; set; }

        [Required]
        public string GeoData { get; set; }

        public virtual ICollection<SportsFacility> Facilities { get; set; } = new HashSet<SportsFacility>();
    }
}
