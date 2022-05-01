using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using SFAS.Database;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services.Services
{
    public class MapService : IMapService
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger<MapService> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
    }
}
