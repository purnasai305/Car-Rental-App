using Car_Rental_App.Data;
using Car_Rental_App.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Car_Rental_App.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;
        public UserRepository(MongoDbService mongoDbService)
        {
            _users = mongoDbService.Database.GetCollection<User>("Users");
        }

        public List<User> GetUsers()
        {
            return _users.Find(user => true).ToList();
        }
        public User GetUser(Guid id)
        {
            return _users.Find(user => user.Id == id).FirstOrDefault();
        }

        public User CreateUser(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void UpdateUser(Guid id, User user)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Id,id);
            var update = Builders<User>.Update
                .Set(u => u.FirstName, user.FirstName)
                .Set(u => u.Email, user.Email)
                .Set(u => u.Mobile, user.Mobile)
                .Set(u => u.City, user.City);
            _users.UpdateOne(filter, update);
        }

        public void DeleteUser(Guid id)
        {
            _users.DeleteOne(u => u.Id == id);
        }

        public User VerifyUser(LoginDTO loginDTO)
        {
            return _users.Find(user => user.Email == loginDTO.Email && user.PasswordHash == loginDTO.Password).FirstOrDefault();
        }

        public User GetUserByEmail(string email)
        {
            return _users.Find(user=>user.Email==email).FirstOrDefault();
        }
    }
}

