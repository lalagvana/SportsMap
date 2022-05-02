namespace SFAS.Common.Models;

public class TypedDataSourceResult<T>
{
    public TypedDataSourceResult(IEnumerable<T> data, int total)
    {
        Data = data;
        Total = total;
    }

    public IEnumerable<T> Data { get; set; }
    public int Total { get; set; }
}