
using Car_Rental_App.Models;
using MongoDB.Bson;

namespace Car_Rental_App.Repository
{
    public interface IUserRepository
    {
        User GetUser(Guid id);
        List<User> GetUsers();
        void UpdateUser(Guid id,User user);
        void DeleteUser(Guid id);
        User CreateUser(User user);
        User VerifyUser(LoginDTO loginDTO);
        User GetUserByEmail(string email);
    }
}
