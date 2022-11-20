using Microsoft.AspNetCore.Mvc;
using SFAS.Database.Entities;

namespace SFAS.Services.Interfaces
{
    public interface IReportService
    {
        Task<FileStreamResult> GenerateReportAsync(IEnumerable<SportsFacility> items);
        Task<IEnumerable<SportsFacility>> UploadFromReport(Stream content);
    }
}
