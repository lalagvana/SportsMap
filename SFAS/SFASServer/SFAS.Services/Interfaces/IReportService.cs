namespace SFAS.Services.Interfaces
{
    public interface IReportService
    {
        Task<byte[]> GenerateReport();
    }
}
