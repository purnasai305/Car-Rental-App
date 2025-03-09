using Car_Rental_App.Models;

namespace Car_Rental_App.Services
{
    public interface IUserService
    {
        List<User> GetUsers();
        User GetUser(Guid id);
        void UpdateUser(Guid id,User user);
        void DeleteUser(Guid id);
        User CreateUser(User user);
        User VerifyUser(LoginDTO loginDTO);
        User GetUserByEmail(string email);
        string GenerateJwtToken(User user);
    }
}
