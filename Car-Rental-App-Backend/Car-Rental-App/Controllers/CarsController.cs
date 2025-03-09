using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using Car_Rental_App.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Car_Rental_App.Controllers
{
    [Authorize]
    [Route("/api/[controller]")]
    public class CarsController : Controller
    {
        private readonly ICarService _carService;
        private readonly IBookingsService _bookingsService;
        private readonly IUserService _userService;
        public CarsController(ICarService carService,IBookingsService bookingsService, IUserService IUserService)
        {
            _carService = carService;
            _bookingsService = bookingsService;
            _userService = IUserService;
        }

        [AllowAnonymous] 
        [HttpGet("{id?}")]
        public IActionResult GetCars(Guid id, [FromQuery] string transmission = null, [FromQuery] string fueltype = null, [FromQuery] string cartype = null, [FromQuery] string sortby = null, [FromQuery] int minValue = 0, [FromQuery] int maxValue = 0, [FromQuery] string? location = null)
        {
            return Ok(_carService.GetCars(id,transmission,fueltype,cartype,sortby,minValue,maxValue,location));
        }

        [AllowAnonymous]
        [HttpGet("locations")]
        public IActionResult GetLocations()
        {
            return Ok(_carService.GetLocations());
        }

        [HttpGet("car/{id}")]   
        public IActionResult GetCar([FromQuery] Guid userId, Guid id)
        {
            Car car= _carService.GetCar(userId,id);
            Bookings booking = _bookingsService.GetBookingByUserIdAndCarId(userId, id);

            if (booking != null)
            {
                car.BookingStatus = booking.BookingStatus; 

            }
            else
            {
                car.BookingStatus = BookingStatus.LeaseNow; 
            }
            CarBookingDetails carBookingDetails = new()
            {
                car = car,
                bookings = booking
            };
            return Ok(carBookingDetails);
        }

        [HttpGet("owner/{id}")]
        public IActionResult GetOwnerCars(Guid id, [FromQuery] string bookingStatus)
        {
            return Ok(_carService.GetOwnerCars(id,bookingStatus));
        }

        [HttpGet("car/owner/{id}")]
        public IActionResult GetOwnerCar([FromQuery] Guid ownerId,Guid id)
        {
            Car car= _carService.GetCar(ownerId,id);
            List<Bookings> bookings = _bookingsService.GetBookingByOwnerIdAndCarId(ownerId,id);
            List<UserBookingDetails> bookingDetails = new List<UserBookingDetails>();
            if (bookings != null && bookings.Count>0)
            {
                foreach(var booking in bookings)
                {
                    User user = _userService.GetUser(booking.LesseeId);
                    bookingDetails.Add(new UserBookingDetails
                    {
                        bookings = booking,
                        user = user
                    });
                }
            }

            return Ok(new {car,bookings=bookingDetails});
        }

        [HttpPost()]
        public IActionResult CreateCar([FromBody] Car car)
        {
            if (car == null) return BadRequest("Car details are null!!");
            return Ok(_carService.CreateCar(car));
        }

        [HttpPost("like/{carId}")]
        public IActionResult LikeCar(Guid carId, [FromQuery] Guid userId)
        {
            CarBookingDetails car = _carService.LikeCar(userId, carId);
            if (car == null) return NotFound("Car not found.");
            return Ok(car);
        }

        [HttpPost("comment/{carId}")]
        public IActionResult PostComment(Guid userId,Guid carId,[FromBody] Comment comment)
        {
            return Ok(_carService.PostComment(userId,carId,comment));
        }

        [HttpPut("update/{id}")]
        public IActionResult UpdateCar(Guid id, [FromBody] Car car)
        {
            Car u = _carService.GetCar(id,id);
            if (u == null) return NotFound("Car associated with given id is not present");
            Car updatedCar=_carService.UpdateCar(id, car);
            return Ok(updatedCar);
        }

        [HttpDelete("delete/{id}")]
        public IActionResult DeleteCar(Guid id)
        {
            Car user = _carService.GetCar(id,id);
            if (user == null) return NotFound("Car associated with given id is not present");
            _carService.DeleteCar(id);
            return Ok("Car successfully deleted");
        }
    }
}
