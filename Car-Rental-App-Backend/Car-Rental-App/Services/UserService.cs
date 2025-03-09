using Car_Rental_App.Models;
using Car_Rental_App.Repository;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Car_Rental_App.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim("UserId", user.Id.ToString()),
            new Claim(ClaimTypes.Email,user.Email),
            new Claim (ClaimTypes.Role,user.Role)
        };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                 _configuration["Jwt:Issuer"],
                 _configuration["Jwt:Audience"],
                 claims,
                 expires: DateTime.UtcNow.AddMinutes(60),
                 signingCredentials: signIn
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public User GetUser(Guid id)
        {
            return _userRepository.GetUser(id);
        }

        public List<User> GetUsers()
        {
            return _userRepository.GetUsers();
        }

        public User CreateUser(User user)
        {
            return _userRepository.CreateUser(user);
        }
        public void UpdateUser(Guid id, User user)
        {
            _userRepository.UpdateUser(id, user);
        }

        public void DeleteUser(Guid id)
        {
            _userRepository.DeleteUser(id);
        }

        public User VerifyUser(LoginDTO loginDTO)
        {
            return _userRepository.VerifyUser(loginDTO);
        }

        public User GetUserByEmail(string email)
        {
            return _userRepository.GetUserByEmail(email);
        }
    }
}
