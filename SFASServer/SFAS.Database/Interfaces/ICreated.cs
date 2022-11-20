using SFAS.Database.Entities;
using System;

namespace SFAS.Database.Interfaces
{
    public interface ICreated
    {
        public Guid? CreatedByID { get; set; }
        public User CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
