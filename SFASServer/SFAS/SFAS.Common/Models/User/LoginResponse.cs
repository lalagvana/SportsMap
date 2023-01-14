namespace SFAS.Common.Models.AuthDtos
{
    public class LoginResponse
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string AccessToken { get; set; }
        public int AccessTokenExpiresIn { get; set; }
        public string RefreshToken { get; set; }
        public string Role { get; set; }
        public bool IsExternalUser { get; set; }
    }
}
