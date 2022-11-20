using SFAS.Database.Entities;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace SFAS.Database.Interfaces
{
    public class EntityBase : ICreated, IDeleted, IModified
    {
        public Guid? CreatedByID { get; set; }
        public virtual User CreatedBy { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public Guid? ModifiedByID { get; set; }
        public virtual User ModifiedBy { get; set; }
        public DateTime? ModifiedAt { get; set; }

        public Guid? DeletedByID { get; set; }
        public virtual User DeletedBy { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}
