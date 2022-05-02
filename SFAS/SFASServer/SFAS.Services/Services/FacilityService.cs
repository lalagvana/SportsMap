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

        public async Task<FacilityWithIdDto> CreateFacility(FacilityDto request)
        {
            var facility = _mapper.Map<SportsFacility>(request);
            facility.FacilityId = new Guid();

            await _db.SportsFacilities.AddAsync(facility);
            _logger.LogInformation($"Sports facility {request.Name} created successfully");

            return _mapper.Map<FacilityWithIdDto>(facility);
        }

        public async Task<FacilityWithIdDto> UpdateFacility(Guid id, FacilityWithIdDto request)
        {
            var facility = _mapper.Map<SportsFacility>(request);

            var facilityDb = _db.SportsFacilities.Update(facility);
            _logger.LogInformation($"Sports facility {request.Name} updated successfully");

            return _mapper.Map<FacilityWithIdDto>(facilityDb.Entity);
        }

        public async Task<FacilityDto> GetFacility(Guid id)
        {
            return _mapper.Map<FacilityDto>(await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id));
        }

        public async Task DeleteFacility(Guid id)
        {
            var facility = await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id);
            _db.SportsFacilities.Remove(facility);
            _logger.LogInformation($"Sports facility {facility.Name} deleted successfully");
        }

        public async Task<LocationDto> GetLocation(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FacilityWithIdDto> SearchFacilities(DataSourceRequest request)
        {
            return _mapper.ProjectTo<FacilityWithIdDto>(_db.SportsFacilities.Where(x => !x.Hidden && !x.DeletedAt.HasValue));
        }

        public IEnumerable<FacilityWithIdDto> SearchFacilitiesAdmin(DataSourceRequest request)
        {
            return _mapper.ProjectTo<FacilityWithIdDto>(_db.SportsFacilities.Where(x => !x.DeletedAt.HasValue));
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
            _logger.LogInformation($"Sports facility {facility.Name} hidden successfully");
        }

        public async Task UnhideFacility(Guid id)
        {
            var facility = await _db.SportsFacilities.FirstOrDefaultAsync(f => f.FacilityId == id);
            facility.Hidden = false;
            _db.SportsFacilities.Update(facility);
            _logger.LogInformation($"Sports facility {facility.Name} hidden successfully");
        }

        public async Task UploadGroupOfFacilities(byte[] file)
        {
            throw new NotImplementedException();
        }

        public async Task<FileStreamResult> DownloadReport()
        {
            return await _reportService.GenerateReport(await _db.SportsFacilities.Where(x => !x.DeletedAt.HasValue).ToArrayAsync());
        }
    }
}
