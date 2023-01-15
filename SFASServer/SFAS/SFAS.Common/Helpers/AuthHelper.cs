using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace SFAS.Common.Helpers
{
    public static class AuthHelper
    {
        public static SymmetricSecurityKey GetSymmetricSecurityKey(string key)
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key));
        }
    }
}
