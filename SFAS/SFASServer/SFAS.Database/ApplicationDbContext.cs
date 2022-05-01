using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SFAS.Database.Entities;

namespace SFAS.Database
{
    public sealed class ApplicationDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private static bool _checkedForMigrations;

#pragma warning disable CS8618
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IHttpContextAccessor httpContextAccessor)
#pragma warning restore CS8618
            : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
            if (!_checkedForMigrations)
            {
                _checkedForMigrations = true;
                Database.Migrate();
            }
        }

        public DbSet<Document> Documents { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<SportsFacility> SportsFacilities { get; set; }
        public DbSet<EmailSubscriber> EmailSubscribers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasOne(x => x.CreatedBy)
                .WithMany(x => x.CreatedUsers)
                .HasForeignKey(x => x.CreatedByID);

            modelBuilder.Entity<User>()
                .HasOne(x => x.ModifiedBy)
                .WithMany(x => x.ModifiedUsers)
                .HasForeignKey(x => x.ModifiedByID);

            modelBuilder.Entity<SportsFacility>()
                .HasOne(x => x.Owner)
                .WithMany(x => x.Facilities)
                .HasForeignKey(x => x.OwnerId);

            modelBuilder.Entity<SportsFacility>()
                .HasOne(x => x.Document)
                .WithMany(x => x.Facilities)
                .HasForeignKey(x => x.DocumentId);

            modelBuilder.Entity<SportsFacility>()
                .HasOne(x => x.Address)
                .WithMany(x => x.Facilities)
                .HasForeignKey(x => x.AddressId);
        }
    }
}
