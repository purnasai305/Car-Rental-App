using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using Car_Rental_App.Repository;
using MongoDB.Bson;

namespace Car_Rental_App.Services
{
    public class CarService : ICarService
    {
        private ICarRepository _carRepository;
        private readonly IBookingsRepository _bookingsRepository;

        public CarService(ICarRepository carRepository, IBookingsRepository bookingsRepository)
        {
            _carRepository = carRepository;
            _bookingsRepository = bookingsRepository;
        }

        public Car GetCar(Guid userId, Guid id)
        {
            Car car= _carRepository.GetCar(id);
            if (userId != null)
            {
                if (car.Likes.Contains(userId)) car.HasLiked = true;
                else car.HasLiked = false;
            }
            return car;
        }

        public List<CarBookingDetails> GetOwnerCars(Guid ownerId, string bookingStatus = null)
        {
            List<Car> ownerCars = _carRepository.GetOwnerCars(ownerId);
            List<CarBookingDetails> carBookingDetails = new List<CarBookingDetails>();
            if (bookingStatus == null)
            {
                foreach (Car car in ownerCars)
                {
                    Bookings booking = _bookingsRepository.GetLatestBookingByCarId(car.Id);
                    if (booking != null)
                    {
                        carBookingDetails.Add(new CarBookingDetails
                        {
                            car = car,
                            bookings = booking
                        });
                    }
                    else
                    {
                        carBookingDetails.Add(new CarBookingDetails
                        {
                            car = car,
                            bookings = null
                        });
                    }
                }
            }

            else
            {
                foreach (Car car in ownerCars)
                {
                    List<Bookings> bookingsList = _bookingsRepository.GetBookingsByCarId(car.Id);
                    if (bookingsList != null && bookingsList.Count > 0)
                    {
                        foreach (var booking in bookingsList)
                        {
                            // Add the booking only if the status matches
                            if (booking.BookingStatus.ToString() == bookingStatus)
                            {
                                carBookingDetails.Add(new CarBookingDetails
                                {
                                    car = car,
                                    bookings = booking
                                });
                            }

                        }
                    }
                }
            }
            return carBookingDetails;
        }

        public List<CarBookingDetails> GetCars(Guid id, string transmission, string fuelType, string cartype, string sortby, int minValue, int maxValue,string location)
        {

            List<Car> cars = _carRepository.GetCars(transmission, fuelType, cartype, sortby, minValue, maxValue,location);
            List<CarBookingDetails> carBookingDetailsList = new List<CarBookingDetails>();
            foreach (Car car in cars)
            {
                List<Bookings> carBookings = _bookingsRepository.GetCarBookings(car.Id);
                Bookings userBooking = carBookings.FirstOrDefault(b => b.LesseeId == id);
                carBookingDetailsList.Add(new CarBookingDetails
                {
                    bookings = userBooking,
                    car = car,
                    bookingStatus = userBooking != null
               ? userBooking.BookingStatus.ToString()
               : BookingStatus.LeaseNow.ToString()
                });
            }
            return carBookingDetailsList;
        }

        public Car CreateCar(Car car)
        {
            return _carRepository.CreateCar(car);
        }

        public Car UpdateCar(Guid id, Car car)
        {
            Car updatedCar = _carRepository.UpdateCar(id, car);
            return updatedCar;
        }

        public void DeleteCar(Guid id)
        {
            _carRepository.DeleteCar(id);
        }

        public CarBookingDetails LikeCar(Guid userId, Guid carId)
        {
            Car car = _carRepository.GetCar(carId);
            if (car.Likes.Contains(userId))
            {
                car.Likes.Remove(userId);
                car.Like--;
                car.HasLiked = false;
            }
            else
            {
                car.Likes.Add(userId);
                car.Like++;
                car.HasLiked = true;
            }
            Car updatedCar = _carRepository.UpdateCar(car.Id, car);
            CarBookingDetails carBookingDetails = new CarBookingDetails
            {
                car = updatedCar,
                bookings = _bookingsRepository.GetBookingByUserIdAndCarID(userId, carId)
            };
            return carBookingDetails;
        }

        public CarBookingDetails PostComment(Guid user_id, Guid car_id, Comment comment)
        {
            Comment newComment = new()
            {
                CarId = car_id,
                UserName = comment.UserName,
                CommentText = comment.CommentText
            };
            CarBookingDetails carBookingDetails = new()
            {
                car = _carRepository.PostComment(car_id, newComment),
                bookings = _bookingsRepository.GetBookingByUserIdAndCarID(user_id, car_id)
            };
            return carBookingDetails;
        }

        public List<string> GetLocations()
        {
           return _carRepository.GetLocations();
        }
    }
}
