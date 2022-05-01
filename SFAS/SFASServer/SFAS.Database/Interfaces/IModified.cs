using SFAS.Database.Entities;
using System;

namespace SFAS.Database.Interfaces
{
    public interface IModified
    {
        public Guid? ModifiedByID { get; set; }
        public User ModifiedBy { get; set; }
        public DateTime? ModifiedAt { get; set; }
    }
}
