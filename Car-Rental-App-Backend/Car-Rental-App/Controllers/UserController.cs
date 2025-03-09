using Car_Rental_App.Common;
using Car_Rental_App.Models;
using Car_Rental_App.Services;
using Microsoft.AspNetCore.Mvc;


namespace Car_Rental_App.Controllers
{
    
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService;
        private readonly IEncryptionService _encryptionService;
        public UserController(IUserService userService,IEncryptionService encryptionService)
        {
            _encryptionService = encryptionService;
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_userService.GetUsers());
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(Guid id)
        {
            User user = _userService.GetUser(id);
            string tokenValue = _userService.GenerateJwtToken(user);
            return Ok(new { Token = tokenValue, User = user });
        }

        [HttpPost()]
        public IActionResult CreateUser([FromBody] User user)
        {
            if (user == null) return BadRequest("User details are null!!");
            User u = _userService.GetUserByEmail(user.Email);
            if (u != null) return Conflict(new { message = "user already present  " });
            user.PasswordHash=_encryptionService.Encrypt(user.PasswordHash);
            return Ok(_userService.CreateUser(user));
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO loginDTO)
        {
            loginDTO.Password= _encryptionService.Encrypt(loginDTO.Password);
            User user = _userService.VerifyUser(loginDTO);
            if(user==null) return Unauthorized("User not Found");
            string tokenValue = _userService.GenerateJwtToken(user);
            return Ok(new { Token = tokenValue, User = user });
        }

        [HttpPut("update/{id}")]
        public IActionResult UpdateUser(Guid id, [FromBody] User user)
        {
            User u = _userService.GetUser(id);
            if (u == null) return NotFound("User associated with given id is not present");
            _userService.UpdateUser(id, user);
            return Ok("user updated");
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteUser(Guid id)
        {
            User user = _userService.GetUser(id);
            if (user == null) return NotFound("User associated with given id is not present");
            _userService.DeleteUser(id);
            return Ok("User successfully deleted");
        }
    }
}

