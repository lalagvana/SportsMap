using Kendo.DynamicLinqCore;
using SFAS.Common.Models;
using SFAS.Common.Models.User;

namespace SFAS.Services.Interfaces
{
    public interface IUserService
    {
        Task<AdminUserDto> UpdateUser(Guid id, UpdateUserAdminRequest request);
        Task<TypedDataSourceResult<UserDto>> GetUsers(DataSourceRequest request);
        TypedDataSourceResult<AdminUserDto> GetAllUsers(DataSourceRequest request);
        Task DeleteUser(Guid id);
        Task<AdminUserDto> CreateUser(CreateUserRequest request);
        Task<UserDto> GetUser(Guid id);
    }
}
