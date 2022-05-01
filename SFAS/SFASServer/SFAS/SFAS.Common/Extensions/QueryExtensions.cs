using Kendo.DynamicLinqCore;
using SFAS.Common.Models;

namespace SFAS.Common.Extensions
{
    public static class QueryExtensions
    {
        public static TypedDataSourceResult<T> ToTypedDataSourceResult<T>(this IQueryable<T> collection, DataSourceRequest? request)
        {
            request ??= new DataSourceRequest();
            ConvertFiltersToUpperCase(request.Filter);
            DataSourceResult result = collection.ToDataSourceResult(request);
            var data = new TypedDataSourceResult<T>((IEnumerable<T>)result.Data, result.Total);
            return data;
        }
        
        private static void ConvertFiltersToUpperCase(Filter? filter)
        {
            if (filter == null)
            {
                return;
            }
            if (filter.Filters != null)
            {
                foreach (var subFilter in filter.Filters)
                {
                    ConvertFiltersToUpperCase(subFilter);
                }
            }
            if (!string.IsNullOrEmpty(filter.Field))
            {
                filter.Field = char.ToUpper(filter.Field[0]) + filter.Field.Substring(1);
            }
        }
    }
}
