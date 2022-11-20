namespace SFAS.Common.Models.User
{
    public class CreateUserRequest
    {
        public CreateUserRequest(string role)
        {
            Role = role;
        }

        public string Role { get; set; }
    }
}
