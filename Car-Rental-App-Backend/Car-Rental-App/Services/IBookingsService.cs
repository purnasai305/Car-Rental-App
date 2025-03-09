using Car_Rental_App.DTO;
using Car_Rental_App.Models;

namespace Car_Rental_App.Services
{
    public interface IBookingsService
    {
        List<Bookings> GetBookings();
        Bookings GetBookings(Guid id);
        CarBookingDetails CreateBooking(BookingRequest bookings);
        List<CarBookingDetails> GetUserBookings(Guid id);
         List<Bookings> GetCarBookings(Guid car_id);

        List<CarBookingDetails> GetPendingBookings(Guid id);
        CarBookingDetails ChangeBookingStatus(int bookingStatus,Guid bookingId);
        Bookings GetBookingByUserIdAndCarId(Guid userId, Guid CarId);
        List<Bookings> GetBookingByOwnerIdAndCarId(Guid ownerId, Guid carId);
    }
}
