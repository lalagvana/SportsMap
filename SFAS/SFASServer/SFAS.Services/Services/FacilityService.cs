using AutoMapper;
using Kendo.DynamicLinqCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SFAS.Common.Models.Facility;
using SFAS.Database;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;
using System.Data.Entity;
using Microsoft.AspNetCore.Http;

namespace SFAS.Services.Services
{
    public class FacilityService : IFacilityService
    {
        private readonly IMapService _mapService;
        private readonly IReportService _reportService;
        private readonly ApplicationDbContext _db;
        private readonly ILogger<FacilityService> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public FacilityService(IMapService mapService, IReportService reportService, IMapper mapper, UserManager<User> userManager, ILogger<FacilityService> logger, ApplicationDbContext db)
        {
            _mapService = mapService;
            _reportService = reportService;
            _mapper = mapper;
            _userManager = userManager;
            _logger = logger;
            _db = db;
        }

        public async Task<FacilityDto> CreateFacility(FacilityDto request)
        {
            var facility = _mapper.Map<SportsFacility>(request);
            facility.FacilityId = new Guid();
            facility.AddressId = Guid.NewGuid();
            //await _db.Addresses.AddAsync(new Address() { AddressId = facility.AddressId, AddressString = ""});
            await _db.SportsFacilities.AddAsync(facility);
            await _db.SaveChangesAsync();
            _logger.LogInformation($"Sports facility {request.Name} created successfully");
            return _mapper.Map<FacilityDto>(facility);
        }

        public async Task<FacilityDto> UpdateFacility(Guid id, FacilityDto request)
        {
            var facility = _mapper.Map<SportsFacility>(request);

            var facilityDb = _db.SportsFacilities.Update(facility);
            await _db.SaveChangesAsync();
            _logger.LogInformation($"Sports facility {request.Name} updated successfully");

            return _mapper.Map<FacilityDto>(facilityDb.Entity);
        }

        public async Task<FacilityDto> GetFacility(Guid id)
        {
            return _mapper.Map<FacilityDto>(await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id));
        }

        public async Task DeleteFacility(Guid id)
        {
            var facility = await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id);
            _db.SportsFacilities.Remove(facility);
            await _db.SaveChangesAsync();
            _logger.LogInformation($"Sports facility {facility.Name} deleted successfully");
        }

        public async Task<LocationDto> GetLocation(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FacilityDto> SearchFacilities(DataSourceRequest request)
        {
            return _mapper.ProjectTo<FacilityDto>(_db.SportsFacilities.Where(x => !x.Hidden && !x.DeletedAt.HasValue));
        }

        public IEnumerable<FacilityDto> SearchFacilitiesAdmin(DataSourceRequest request)
        {
            return _mapper.ProjectTo<FacilityDto>(_db.SportsFacilities.Where(x => !x.DeletedAt.HasValue));
        }

        public async Task<LocationDto> GetLocationsList()
        {
            throw new NotImplementedException();
        }

        public async Task HideFacility(Guid id)
        {
            var facility = await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id);
            facility.Hidden = true;
            _db.SportsFacilities.Update(facility); 
            await _db.SaveChangesAsync();
            _logger.LogInformation($"Sports facility {facility.Name} hidden successfully");
        }

        public async Task UnhideFacility(Guid id)
        {
            var facility = await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id);
            facility.Hidden = false;
            _db.SportsFacilities.Update(facility);
            await _db.SaveChangesAsync();
            _logger.LogInformation($"Sports facility {facility.Name} hidden successfully");
        }

        public async Task UploadGroupOfFacilities(IFormFile file)
        {
            var facilities = await _reportService.UploadFromReport(file.OpenReadStream());

            await _db.SportsFacilities.AddRangeAsync(facilities);
            await _db.SaveChangesAsync();
        }

        public async Task<FileStreamResult> DownloadReport()
        {
            return await _reportService.GenerateReportAsync(_db.SportsFacilities.Where(x => !x.DeletedAt.HasValue));
        }
    }
}
