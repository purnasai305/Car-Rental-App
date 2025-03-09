using Car_Rental_App.Models;
using MongoDB.Bson;

namespace Car_Rental_App.Repository
{
    public interface ICarRepository
    {
        List<Car> GetCars(string transmission,string fuelType,string cartype,string sortby, int minValue,int maxValue,string location);
        List<string> GetLocations();
        Car GetCar(Guid id);
        Car CreateCar(Car car);
        void DeleteCar(Guid id);
        Car UpdateCar(Guid id, Car car);
        Car PostComment(Guid car_id, Comment comment);
        List<Car> GetOwnerCars(Guid id);
    }
}
