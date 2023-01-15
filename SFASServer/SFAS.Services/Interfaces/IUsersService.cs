using Kendo.DynamicLinqCore;
using SFAS.Common.Models;
using SFAS.Common.Models.User;

namespace SFAS.Services.Interfaces
{
    public interface IUsersService
    {
        Task<UserDto> UpdateUser(Guid id, UserDto request);
        TypedDataSourceResult<UserDto> GetAllUsers(DataSourceRequest request);
        Task DeleteUser(Guid id);
        Task<UserDto> CreateUser(CreateUserRequest request);
        Task<UserDto> GetUser(Guid id);
    }
}
