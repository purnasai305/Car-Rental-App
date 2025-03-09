using Car_Rental_App.Models;

namespace Car_Rental_App.DTO
{
    public class CarBookingDetails
    {
        public Bookings bookings { get; set; }
        public Car car { get; set; }
        public string bookingStatus { get; set; }
    }
}
