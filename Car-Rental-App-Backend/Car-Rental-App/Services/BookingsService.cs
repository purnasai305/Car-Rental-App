using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using Car_Rental_App.Repository;

namespace Car_Rental_App.Services
{

    public class BookingsService : IBookingsService
    {
        private IBookingsRepository _bookingRepository;
        private readonly ICarService _carService;
        public BookingsService(IBookingsRepository bookingsRepository,ICarService carService) {
            _bookingRepository = bookingsRepository;
            _carService= carService;
        }

        public List<Bookings> GetBookings()
        {
            return _bookingRepository.GetBookings();
        }

        public Bookings GetBookings(Guid id)
        {
            return _bookingRepository.GetBookings(id);
        }
        public Bookings GetBookingByUserIdAndCarId(Guid userId, Guid carId)
        {
            return _bookingRepository.GetBookingByUserIdAndCarID(userId, carId);
        }

        public List<Bookings> GetBookingByOwnerIdAndCarId(Guid ownerId, Guid carId)
        {
            return _bookingRepository.GetBookings()
          .Where(booking => booking.CarId == carId && booking.OwnerId == ownerId).ToList();
        }

        public CarBookingDetails CreateBooking(BookingRequest booking)
        {
            Car car = _carService.GetCar(booking.Userid, booking.Carid);
            if (car == null) throw new NullReferenceException();
            bool isAvailable = _bookingRepository.IsAvailable(booking);
            BookingStatus status = isAvailable ? BookingStatus.Pending : BookingStatus.NotAvailable;
            if(!isAvailable) car.BookingStatus = BookingStatus.Pending;
            Bookings Newbooking = new Bookings
            {
                LesseeId = booking.Userid,
                CarId = booking.Carid,
                OwnerId = car.OwnerId,
                Price = car.Price,
                BookingStatus = status,
                DistanceCovered = 0,
                HoursUsed = 0,
                StartDate=booking.StartDate,
                EndDate=booking.EndDate,
            };
            _bookingRepository.CreateBooking(Newbooking);
            CarBookingDetails carBookingDetails = new CarBookingDetails
            {
                bookings = Newbooking,
                car = car,
            };
            return carBookingDetails;
        }

        public List<CarBookingDetails> GetUserBookings(Guid id)
        {
            List<Bookings> userBookings = _bookingRepository.GetUserBookings(id);
            List<CarBookingDetails> carBookingDetails = new List<CarBookingDetails>();

            foreach(Bookings booking in userBookings)
            {
                Car car = _carService.GetCar(booking.LesseeId, booking.CarId);
                CarBookingDetails carBookingDetail = new CarBookingDetails
                {
                    bookings = booking,
                    car = car
                };
                carBookingDetails.Add(carBookingDetail);
            }
            return carBookingDetails;
        }


        public List<Bookings> GetCarBookings(Guid car_id)
        {
            return _bookingRepository.GetCarBookings(car_id);
        }


        public List<CarBookingDetails> GetPendingBookings(Guid ownerId)
        {
            List<Bookings> userBookings = _bookingRepository.GetOwnerBookings(ownerId);
            List<CarBookingDetails> carBookingDetails = new List<CarBookingDetails>();

            foreach (Bookings booking in userBookings)
            {
                if (booking.BookingStatus == BookingStatus.Pending)
                {
                    Car car = _carService.GetCar(booking.CarId, booking.CarId);
                    CarBookingDetails carBookingDetail = new CarBookingDetails
                    {
                        bookings = booking,
                        car = car
                    };
                    carBookingDetails.Add(carBookingDetail);
                }
            }
            return carBookingDetails;
        }

        public CarBookingDetails ChangeBookingStatus(int bookingStatus,Guid bookingid)
        {
            Bookings resBooking = _bookingRepository.GetBookings(bookingid);
            BookingRequest  bookingRequest= new BookingRequest
            {
                Carid=resBooking.CarId,
                Userid=resBooking.LesseeId,
                StartDate=resBooking.StartDate,
                EndDate=resBooking.EndDate
            };
            Bookings booking = new Bookings();
            if (bookingStatus == 3)
            {
                 booking = _bookingRepository.ChangeBookingStatus(bookingStatus, bookingid);
            }
            else
            {
                bool isAvailable = _bookingRepository.IsAvailable(bookingRequest);
                bookingStatus = isAvailable ? 2 : 4;
                booking = _bookingRepository.ChangeBookingStatus(bookingStatus, bookingid);
                List<Bookings> bookingsByCarId = _bookingRepository.GetCarBookings(resBooking.CarId);
                foreach (Bookings carBooking in bookingsByCarId)
                {
                    if (carBooking.Id != bookingid)
                    {
                        BookingRequest carBookingRequest = new BookingRequest
                        {
                            Carid = carBooking.CarId,
                            Userid = carBooking.LesseeId,
                            StartDate = carBooking.StartDate,
                            EndDate = carBooking.EndDate
                        };
                        bool isBookingAvailable = _bookingRepository.IsAvailable(bookingRequest);
                        bookingStatus = isBookingAvailable ? 2 : 4;
                        _bookingRepository.ChangeBookingStatus(bookingStatus, carBooking.Id);
                    }
                }
            }
            Car car =_carService.GetCar(booking.LesseeId, booking.CarId);
            CarBookingDetails carBooingDetails = new CarBookingDetails
            {
                bookings = booking,
                car = car
            };
            return carBooingDetails;
        }
    }
}
