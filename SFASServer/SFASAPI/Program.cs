using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Serilog;
using SFAS.Common;
using SFAS.Database;
using SFAS.Database.Entities;

namespace SFAS.API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            //Read Configuration from appSettings
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
#if DEBUG
                .AddJsonFile("appsettings.development.json", true)
#endif
                .Build();

            //Initialize Logger
            Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(config)
                .CreateLogger();

            var host = CreateHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var userManager = services.GetRequiredService<UserManager<User>>();
                    var rolesManager = services.GetRequiredService<RoleManager<IdentityRole<Guid>>>();
                    var dbContext = services.GetRequiredService<ApplicationDbContext>();
                    var options = services.GetRequiredService<IOptions<AppSettings>>();
                    await DbInitializer.InitializeAsync(userManager, rolesManager, dbContext, options.Value);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>().UseUrls("http://*:6001", "https://*:6002");
                });
    }
}
