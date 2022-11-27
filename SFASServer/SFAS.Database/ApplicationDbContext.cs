using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SFAS.Database.Entities;
using SFAS.Database.Interfaces;

namespace SFAS.Database
{
    public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid, IdentityUserClaim<Guid>, UserRole, IdentityUserLogin<Guid>, IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private static bool _checkedForMigrations;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IHttpContextAccessor httpContextAccessor)
            : base(options)
        {
            _httpContextAccessor = httpContextAccessor;
            if (!_checkedForMigrations)
            {
                _checkedForMigrations = true;
                Database.Migrate();
            }
        }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Owner> Owners { get; set; }
        public virtual DbSet<SportsFacility> SportsFacilities { get; set; }
        public virtual DbSet<EmailSubscriber> EmailSubscribers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserRole>()
                .HasOne<User>()
                .WithMany(u => u.UserRoles)
                .HasForeignKey(x => x.UserId).IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<UserRole>()
                .HasOne(e => e.Role)
                .WithMany()
                .HasForeignKey(e => e.RoleId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

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

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            Guid? userId = null;
            if (_httpContextAccessor.HttpContext != null)
            {
                userId = Set<User>().FirstOrDefault(x => _httpContextAccessor.HttpContext.User.Identity != null && x.Email == _httpContextAccessor.HttpContext.User.Identity.Name)?.Id;
            }

            foreach (var addedEntity in ChangeTracker.Entries<ICreated>().Where(x => x.State == EntityState.Added))
            {
                addedEntity.Entity.CreatedAt = DateTime.UtcNow;
                addedEntity.Entity.CreatedByID = userId;
            }

            foreach (var modifiedEntity in ChangeTracker.Entries<IModified>().Where(x => x.State == EntityState.Modified))
            {
                modifiedEntity.Entity.ModifiedAt = DateTime.UtcNow;
                modifiedEntity.Entity.ModifiedByID = userId;
            }

            foreach (var deletedEntity in ChangeTracker.Entries<IDeleted>().Where(x => x.State == EntityState.Deleted))
            {
                deletedEntity.Entity.DeletedAt = DateTime.UtcNow;
                deletedEntity.Entity.DeletedByID = userId;
                deletedEntity.State = EntityState.Modified;
            }

            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
