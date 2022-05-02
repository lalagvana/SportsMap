using Microsoft.AspNetCore.Mvc;
using SFAS.Database.Entities;

namespace SFAS.Services.Interfaces
{
    public interface IReportService
    {
        Task<FileStreamResult> GenerateReport(SportsFacility[] items);
    }
}
