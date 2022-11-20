namespace SFAS.Common.Models.User
{
    public class UpdateUserAdminRequest
    {
        public UpdateUserAdminRequest(string? password, string role)
        {
            Password = password;
            Role = role;
        }

        public string? Password { get; set; }
        public string Role { get; set; }
    }
}
