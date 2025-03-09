using Car_Rental_App.DTO;
using Car_Rental_App.Models;
using MongoDB.Bson;

namespace Car_Rental_App.Services
{
    public interface ICarService
    {
        public List<CarBookingDetails> GetCars(Guid id,string transmission,string fuelType,string cartype, string sortby,int minValue,int maxValue,string location);
        public Car GetCar(Guid userId,Guid id);
        public List<string> GetLocations();
        public Car CreateCar(Car car);
        public CarBookingDetails PostComment(Guid userId,Guid car_id, Comment comment);   
        public Car UpdateCar(Guid id, Car car);
        public void DeleteCar(Guid id);
        List<CarBookingDetails> GetOwnerCars(Guid ownerId,string bookingStatus);
        CarBookingDetails LikeCar(Guid userId, Guid carId);
    }
}
