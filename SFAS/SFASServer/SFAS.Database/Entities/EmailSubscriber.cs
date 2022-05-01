using System.ComponentModel.DataAnnotations;

namespace SFAS.Database.Entities
{
    public class EmailSubscriber
    {
        [Key]
        public Guid Id { get; set; }

        public string Email { get; set; }
    }
}
