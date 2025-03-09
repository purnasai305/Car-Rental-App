using Car_Rental_App.DTO;
using Car_Rental_App.Models;

namespace Car_Rental_App.Repository
{
    public interface IBookingsRepository
    {
         List<Bookings> GetBookings();
         Bookings GetBookings(Guid id);
         List<Bookings> GetUserBookings(Guid userId);
         List<Bookings> GetCarBookings(Guid car_id);
         List<Bookings> GetOwnerBookings(Guid ownerId);
         List<Bookings> GetBookingsByCarId(Guid carId);

         Bookings CreateBooking(Bookings bookings);
         Bookings ChangeBookingStatus(int bookingStatus, Guid bookingId);
        Bookings GetBookingByUserIdAndCarID(Guid userId, Guid carId);
        bool IsAvailable(BookingRequest booking);
        Bookings GetLatestBookingByCarId(Guid id);
    }
}
