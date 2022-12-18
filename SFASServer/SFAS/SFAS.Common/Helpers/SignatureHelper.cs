using System.Security.Cryptography;
using System.Text;

namespace SFAS.Common.Helpers
{
    public static class SignatureHelper
    {
        /// <summary>
        /// Verify HMAC SHA-256 signature for given source using specified shared key.
        /// </summary>
        public static bool VerifyHMACSHA256Signature(string sharedKey, string source, string signature)
        {
            return ComputeHMACSHA256Hash(sharedKey, source).Equals(signature);
        }

        /// <summary>
        /// Compute HMAC SHA-256 hash for given source using specified shared key.
        /// </summary>
        public static string ComputeHMACSHA256Hash(string sharedKey, string source)
        {
            var key = Encoding.UTF8.GetBytes(sharedKey);

            using (var hmac256 = new HMACSHA256(key))
            {
                var hashedSource = hmac256.ComputeHash(Encoding.UTF8.GetBytes(source));

                var hmac = new StringBuilder();
                foreach (var bytes in hashedSource)
                {
                    // the format hex string should always be 2 characters
                    hmac.AppendFormat("{0:x2}", bytes);
                }

                return hmac.ToString();
            }
        }
    }
}
