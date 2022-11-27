using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using OfficeOpenXml.Style;
using SFAS.Common.Models.Enums;
using SFAS.Database.Entities;
using SFAS.Services.Interfaces;
using System.Data;
using System.Drawing;
using Dadata;

namespace SFAS.Services.Services;

public class ReportService : IReportService
{
    #region Fields and constructor
    private static readonly object[][] HeaderArray =
    {
        new object[] {
            "№", "Наименование", "Адрес", "Пользователь", "Форма собственности", "Длина", "Ширина", "Площадь",
            "Высота", "Глубина", "Размер", "Покрытие", "ЕПС", "Фактическая загруженность",
            "Годовая мощность", "Документ", "Примечания"
        }
    };

    private static readonly string[] SheetNameArray = { "Плоскостные", "Спортивные залы", "Бассейны", "Крытые катки", "Стрелковые объекты", "Другие", "МО" };
    private static SuggestClientAsync _dadataApi;

    public ReportService()
    {
        ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
        _dadataApi = new SuggestClientAsync("b6782f65c0229f3140ee07d4ba2d51c0c7b37ea8");
    }
    #endregion

    #region Public methods

    public async Task<FileStreamResult> GenerateReportAsync(IEnumerable<SportsFacility> items)
    {
        ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
        var package = new ExcelPackage();
        var sportsFacilities = items.ToList();

        for (int i = 0; i < SheetNameArray.Length; i++)
        {
            CreateExcelWorksheet(package, SheetNameArray[i], sportsFacilities.Where(x => x.Type == i).ToList());
        }

        var file = new FileInfo(@"SportsMap.xlsx");
        await package.SaveAsAsync(file);

        return new FileStreamResult(file.Open(FileMode.OpenOrCreate), "application/octet-stream")
        {
            FileDownloadName = file.Name
        };
    }

    public async Task<IEnumerable<SportsFacility>> UploadFromReport(Stream content)
    {
        var sportsFacilities = new List<SportsFacility>();
        var package = new ExcelPackage(content);
        var sheets = package.Workbook.Worksheets;

        for (int i = 0; i < sheets.Count; i++)
        {
            sportsFacilities.AddRange(await ReadExcelToList(sheets[i], i));
        }

        return sportsFacilities;
    }
    public static async Task<List<SportsFacility>> ReadExcelToList(ExcelWorksheet worksheet, int type)
    {
            List<SportsFacility> collection = new();

            for (int rowNum = 3; rowNum <= worksheet.Dimension.End.Row; rowNum++)
            {
                try
                {
                    var result = await _dadataApi.SuggestAddress(worksheet.Cells[rowNum, 3].Value.ToString()?.Trim());
                    //var res = result.suggestions.First();
                    //var addressString = res.value;
                    //var district = res.data.city_district;

                    var address = new Address
                    {
                        AddressId = Guid.NewGuid(),
                        AddressString = ""
                    };

                    SportsFacility item = new()
                    {
                        Name = worksheet.Cells[rowNum, 2].Value.ToString()?.Trim() ?? throw new ArgumentException($"No name for an item on row {rowNum}"),
                        Type = type,
                        Address = address,
                        Owner = worksheet.Cells[rowNum, 4]?.Value?.ToString() != null ? new Owner
                        {
                            OwnerId = Guid.NewGuid(),
                            Name = worksheet.Cells[rowNum, 4]?.Value?.ToString() ?? "Owner"
                        }:null,
                        PropertyForm = (int)Enum.Parse<PropertyForm>(worksheet.Cells[rowNum, 5]?.Value?.ToString() ?? "Unknown"),
                        Length = (double?)worksheet.Cells[rowNum, 6].Value,
                        Width = (double?)worksheet.Cells[rowNum, 7].Value,
                        Area = (double?)worksheet.Cells[rowNum, 8].Value,
                        Height = (double?)worksheet.Cells[rowNum, 9].Value,
                        Depth = (double?)worksheet.Cells[rowNum, 10].Value,
                        Size = worksheet.Cells[rowNum, 11]?.Value?.ToString()?.Trim(),
                        CoveringType = worksheet.Cells[rowNum, 12]?.Value?.ToString() != null ? (int?)Enum.Parse<CoveringType>(worksheet.Cells[rowNum, 12].Value.ToString() ?? string.Empty) : null,
                        //EPS = (int?)worksheet.Cells[rowNum, 13].Value,
                        //ActualWorkload = (int?)worksheet.Cells[rowNum, 14]?.Value,
                        //AnnualCapacity = (int?)worksheet.Cells[rowNum, 15]?.Value,
                        Document = worksheet.Cells[rowNum, 16]?.Value?.ToString() != null ? new Document
                        {
                            DocumentId = Guid.NewGuid(),
                            Name = worksheet.Cells[rowNum, 16]?.Value?.ToString() ?? "Document",
                            Link = ""
                        }:null,
                        Notes = worksheet.Cells[rowNum, 17]?.Value?.ToString()?.Trim() ?? "",
                        Link = ""
                    };

                    collection.Add(item);
                }
                catch (Exception ex)
                {
                    //Save error log
                }
            }

            return collection;
        }
    #endregion

    #region Private methods

    private static void CreateExcelWorksheet(ExcelPackage package, string worksheetName,
        IEnumerable<SportsFacility> items)
    {
        var sheet = package.Workbook.Worksheets.Add(worksheetName);
        var cells = sheet.Cells[1, 1, 1, 17];
        cells.LoadFromArrays(HeaderArray).AutoFitColumns();

        cells.EntireRow.Height = 30;
        cells.Style.Fill.PatternType = ExcelFillStyle.Solid;
        cells.Style.Font.Bold = true;
        cells.Style.Fill.BackgroundColor.SetColor(Color.SkyBlue);

        using (ExcelRange rng = cells)
        {
            rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Top.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Left.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Right.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Bottom.Color.SetColor(Color.DarkGray);
        }

        var cellSheetCell = sheet.Cells[2, 1, 2, 17];
        cellSheetCell.Style.Fill.PatternType = ExcelFillStyle.Solid;
        cellSheetCell.Style.Font.Bold = true;
        cellSheetCell.Style.Fill.BackgroundColor.SetColor(Color.Lavender);

        using (ExcelRange rng = cellSheetCell)
        {
            rng.Style.Border.Top.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Top.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Left.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Left.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Right.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Right.Color.SetColor(Color.DarkGray);
            rng.Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
            rng.Style.Border.Bottom.Color.SetColor(Color.DarkGray);
        }

        FillWorksheet(sheet, items);
    }

    private static void FillWorksheet(ExcelWorksheet sheet, IEnumerable<SportsFacility> items)
    {
        var row = 3;
        const int column = 1;
        foreach (var item in items)
        {
            sheet.Cells[row, column].Value = row - 2;
            sheet.Cells[row, column + 1].Value = item.Name;
            sheet.Cells[row, column + 2].Value = item.Address.AddressString;
            sheet.Cells[row, column + 3].Value = item.Owner?.Name;
            sheet.Cells[row, column + 4].Value = (PropertyForm)item.PropertyForm;
            sheet.Cells[row, column + 5].Value = item.Length;
            sheet.Cells[row, column + 6].Value = item.Width;
            sheet.Cells[row, column + 7].Value = item.Area;
            sheet.Cells[row, column + 8].Value = item.Height;
            sheet.Cells[row, column + 9].Value = item.Depth;
            sheet.Cells[row, column + 10].Value = item.Size;
            sheet.Cells[row, column + 11].Value = item.CoveringType != null ? (CoveringType)item.CoveringType : "-";
            sheet.Cells[row, column + 12].Value = item.EPS;
            sheet.Cells[row, column + 13].Value = item.ActualWorkload;
            sheet.Cells[row, column + 14].Value = item.AnnualCapacity;
            sheet.Cells[row, column + 15].Value = item.Document?.Name;
            sheet.Cells[row, column + 16].Value = item.Notes;
            row++;
        }

        sheet.Cells.AutoFitColumns();
    }

    #endregion
}