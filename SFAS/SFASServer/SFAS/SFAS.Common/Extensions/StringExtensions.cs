namespace SFAS.Common.Extensions
{
    public static class StringExtensions
    {
        public static string ConvertNullOrEmptyTo(this string value, string defaultValue)
        {
            return string.IsNullOrEmpty(value) ? defaultValue : value;
        }
    }
}
