using Car_Rental_App.Data;
using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Car_Rental_App.Repository
{
    public class BookingsRepository : IBookingsRepository
    {
        private IMongoCollection<Bookings> _bookings;
        public BookingsRepository(MongoDbService mongoDbService)
        {
            _bookings = mongoDbService.Database.GetCollection<Bookings>("Bookings");
        }

        public List<Bookings> GetBookings()
        {
            return _bookings.Find(bookings => true).ToList();
        }

        public Bookings GetBookings(Guid id)
        {
            return _bookings.Find(b => b.Id == id).FirstOrDefault();
        }

        public List<Bookings> GetUserBookings(Guid userId)
        {
            return _bookings.Find(b => b.LesseeId==userId).ToList();
        }

        public List<Bookings> GetCarBookings(Guid car_id)
        {
            return _bookings.Find(b => b.CarId == car_id).ToList();
        }

        public List<Bookings> GetOwnerBookings(Guid ownerId)
        {
            return _bookings.Find(b => b.OwnerId == ownerId).ToList();
        }
        
        public List<Bookings> GetBookingsByCarId(Guid carId)
        {
            return _bookings.Find(b => b.CarId == carId).ToList();
        }

        public Bookings GetLatestBookingByCarId(Guid carId)
        {
            return _bookings.Find(b => b.CarId == carId).FirstOrDefault();
        }

        public Bookings GetBookingByUserIdAndCarID(Guid userId, Guid carId)
        {
            return _bookings.Find(b => b.CarId == carId && b.LesseeId == userId).SortByDescending(b => b.StartDate).FirstOrDefault();
        }
        public Bookings CreateBooking(Bookings bookings)
        {
            _bookings.InsertOne(bookings);
            return bookings;
        }

        public Bookings ChangeBookingStatus(int bookingStatus, Guid bookingId)
        {
            Bookings booking = _bookings.Find(b => b.Id == bookingId).FirstOrDefault();
            if (booking == null)
            {
                return null; 
            }
            booking.BookingStatus = (BookingStatus)bookingStatus;
            var updateResult = _bookings.ReplaceOne(b => b.Id == bookingId, booking);
            return booking;
        }

        public bool IsAvailable(BookingRequest booking)
        {
            List<Bookings> bookings = _bookings.Find(b => b.CarId == booking.Carid && b.BookingStatus==BookingStatus.Accepted).ToList();
            foreach(Bookings existingBooking in bookings)
            {
                if (booking.StartDate < existingBooking.EndDate && booking.EndDate > existingBooking.StartDate)
                {
                    return false;
                }
            }
            return true;
        }

    }
}

