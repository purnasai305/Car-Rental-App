using Car_Rental_App.Models;

namespace Car_Rental_App.DTO
{
    public class UserBookingDetails
    {
        public Bookings bookings { get; set; }
        public User user { get; set; }
    }
}
