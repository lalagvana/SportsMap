using SFAS.Database.Entities;
using System;

namespace SFAS.Database.Interfaces
{
    public interface IDeleted
    {
        public Guid? DeletedByID { get; set; }
        public User DeletedBy { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}
