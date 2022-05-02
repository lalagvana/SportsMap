using GemBox.Spreadsheet;
using Microsoft.AspNetCore.Mvc;
using SFAS.Common.Models.Enums;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;

namespace SFAS.Services.Services
{
    public class ReportService : IReportService
    {
        public async Task<FileStreamResult> GenerateReport(SportsFacility[] items)
        {
            var workbook = new ExcelFile();
            var worksheet = workbook.Worksheets.Add("Спортивные объекты, Красногвардейский район");

            // Set styles on rows and columns.
            worksheet.Rows[0].Style.HorizontalAlignment = HorizontalAlignmentStyle.Center;
            worksheet.Rows[0].Style.Font.Weight = ExcelFont.BoldWeight;
            worksheet.Columns[0].SetWidth(40, LengthUnit.Pixel);
            worksheet.Columns[1].SetWidth(100, LengthUnit.Pixel);
            worksheet.Columns[2].SetWidth(100, LengthUnit.Pixel);
            worksheet.Columns[2].Style.NumberFormat = @"\$\ #,##0";

            // Create header row.
            worksheet.Cells["A1"].Value = "№";
            worksheet.Cells["C1"].Value = "Тип объекта";
            worksheet.Cells["B1"].Value = "Наименование";
            worksheet.Cells["C1"].Value = "Адрес";
            worksheet.Cells["D1"].Value = "Пользователь";
            worksheet.Cells["E1"].Value = "Форма собственности";
            worksheet.Cells["F1"].Value = "Длина";
            worksheet.Cells["G1"].Value = "Ширина";
            worksheet.Cells["H1"].Value = "Площадь";
            worksheet.Cells["I1"].Value = "Высота";
            worksheet.Cells["J1"].Value = "Размер";
            worksheet.Cells["K1"].Value = "Глубина";
            worksheet.Cells["L1"].Value = "Покрытие";
            worksheet.Cells["M1"].Value = "ЕПС";
            worksheet.Cells["N1"].Value = "Фактическая загруженность";
            worksheet.Cells["O1"].Value = "Годовая мощность";
            worksheet.Cells["P1"].Value = "Доступно для маломобильных граждан";
            worksheet.Cells["Q1"].Value = "Документ";
            worksheet.Cells["R1"].Value = "Примечания";

            // Create data rows.
            for (var r = 1; r <= items.Length; r++)
            {
                var item = items[r - 1];
                worksheet.Cells[r, 0].Value = item.FacilityId;
                worksheet.Cells[r, 1].Value = (FacilityType)item.Type;
                worksheet.Cells[r, 2].Value = item.Name;
                worksheet.Cells[r, 3].Value = item.Address.AddressString;
                worksheet.Cells[r, 4].Value = item.Owner.Name;
                worksheet.Cells[r, 5].Value = (PropertyForm)item.PropertyForm;
                worksheet.Cells[r, 6].Value = item.Length;
                worksheet.Cells[r, 7].Value = item.Width;
                worksheet.Cells[r, 8].Value = item.Area;
                worksheet.Cells[r, 9].Value = item.Height;
                worksheet.Cells[r, 10].Value = item.Size;
                worksheet.Cells[r, 11].Value = item.Depth;
                worksheet.Cells[r, 12].Value = item.CoveringType != null ? (CoveringType)item.CoveringType : "-";
                worksheet.Cells[r, 13].Value = item.EPS;
                worksheet.Cells[r, 14].Value = item.ActualWorkload;
                worksheet.Cells[r, 15].Value = item.AnnualCapacity;
                worksheet.Cells[r, 16].Value = item.IsAccessibleForDisabled;
                worksheet.Cells[r, 17].Value = item.Document.Name;
                worksheet.Cells[r, 18].Value = item.Notes;
            }

            // Save spreadsheet in specified file format.
            var stream = new MemoryStream();
            workbook.Save(stream, new XlsxSaveOptions());

            // Download file.
            return new FileStreamResult(stream, "application/octet-stream")
            {
                FileDownloadName = "SportsMapReport.xlsx"
            };
        }
    }
}
