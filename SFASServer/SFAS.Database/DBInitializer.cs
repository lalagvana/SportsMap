using Microsoft.AspNetCore.Identity;
using SFAS.Common;
using SFAS.Database.Entities;

namespace SFAS.Database
{
    public class DbInitializer
    {
        public static async Task InitializeAsync(UserManager<User> userManager,
            RoleManager<IdentityRole<Guid>> roleManager, ApplicationDbContext context, AppSettings options)
        {
            if (!userManager.Users.Any(x => !x.IsDeleted && x.UserName == "admin"))
            {
                await context.Users.AddAsync(new User
                {
                    UserName = "admin",
                    PasswordHash = "admin",
                    NormalizedUserName = "Main Admin"
                });

                await context.SaveChangesAsync();
            }
        }
    }
}

