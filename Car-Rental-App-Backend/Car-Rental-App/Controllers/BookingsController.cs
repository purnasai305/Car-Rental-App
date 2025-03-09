using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using Car_Rental_App.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

    
namespace Car_Rental_App.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class BookingsController : Controller
    {
        private IBookingsService _bookingsService;
        private readonly IUserService _userService;
        private readonly ICarService _carService;

        public BookingsController(IBookingsService bookingsService, IUserService userService, ICarService carService)
        {
            _bookingsService = bookingsService;
            _userService = userService;
            _carService = carService;
        }

        [HttpGet]
        public IActionResult GetBookings()
        {
            return Ok(_bookingsService.GetBookings());
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserBookings(Guid userId)
        {
            return Ok(_bookingsService.GetUserBookings(userId));
        }

        [HttpGet(("pending/{ownerId}"))]
        public IActionResult GetPendingBookings(Guid ownerId)
        {
            return Ok(_bookingsService.GetPendingBookings(ownerId));
        }

        [HttpPost("create")]
        public IActionResult CreateBooking([FromBody] BookingRequest booking)
        {
            if (booking == null) return BadRequest("Booking is empty");
            return Ok(_bookingsService.CreateBooking(booking));
        }

        [HttpPut("changebookingstatus")]
        public IActionResult ChangeBookingStatus([FromQuery] int bookingstatus, [FromQuery] Guid bookingid)
        {
            CarBookingDetails c=_bookingsService.ChangeBookingStatus(bookingstatus, bookingid);
            Bookings booking=_bookingsService.GetBookings(bookingid);
            List<Bookings> bookings = _bookingsService.GetBookingByOwnerIdAndCarId(booking.OwnerId,booking.CarId);
            Car car = _carService.GetCar(booking.OwnerId,booking.CarId);
            List<UserBookingDetails> bookingDetails = new List<UserBookingDetails>();
            if (bookings != null && bookings.Count > 0)
            {
                foreach (var booking1 in bookings)
                {
                    User user = _userService.GetUser(booking1.LesseeId);
                    bookingDetails.Add(new UserBookingDetails
                    {
                        bookings = booking1,
                        user = user
                    });
                }
            }
            return Ok(new { car, bookings = bookingDetails });
        }
    }
}
