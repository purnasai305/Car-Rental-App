using Car_Rental_App.Data;
using Car_Rental_App.Models;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

namespace Car_Rental_App.Repository
{
    public class CarRepository : ICarRepository
    {
        private IMongoCollection<Car> _cars;

        public CarRepository(MongoDbService mongoDbService)
        {
            _cars = mongoDbService.Database.GetCollection<Car>("Cars");
        }

        public List<Car> GetCars(string transmission, string fuelType, string cartype, string sortby, int minValue, int maxValue,string location)
        {
            var transmissionValues = transmission?.Split(',') ?? Array.Empty<string>();
            var fuelValues = fuelType?.Split(',') ?? Array.Empty<string>();
            var carTypeValues = cartype?.Split(',') ?? Array.Empty<string>();

            var filterBuilder = Builders<Car>.Filter;
            var sortBuilder = Builders<Car>.Sort;
            var sort = sortBuilder.Ascending(c => c.Price);
            var filter = filterBuilder.Empty;

            if (maxValue > 0)
            {
                var priceFilter = filterBuilder.And(
                                  filterBuilder.Gte(c => c.Price, minValue),
                                  filterBuilder.Lte(c => c.Price, maxValue));
                filter = filterBuilder.And(filter, priceFilter);

            }

            if (transmissionValues.Length > 0)
            {
                var transmissionFilter = filterBuilder.In(c => c.Transmission, transmissionValues);
                filter = filterBuilder.And(filter, transmissionFilter);
            }

            if (!string.IsNullOrEmpty(location) && location!="All")
            {
                var locationFilter = filterBuilder.In(c => c.Location, [location]);
                filter = filterBuilder.And(filter, locationFilter);
            }

            if (fuelValues.Length > 0)
            {
                var fuelTypeFilter = filterBuilder.In(c => c.Fueltype, fuelValues);
                filter = filterBuilder.And(filter, fuelTypeFilter);
            }

            if (carTypeValues.Length > 0)
            {
                var carTypeFilter = filterBuilder.In(c => c.Cartype, carTypeValues);
                filter = filterBuilder.And(filter, carTypeFilter);
            }

            switch (sortby)
            {
                case "priceAsc":
                    sort = sortBuilder.Ascending(c => c.Price);
                    break;
                case "priceDesc":
                    sort = sortBuilder.Descending(c => c.Price);
                    break;
                case "rating":
                    sort = sortBuilder.Descending(c => c.Like);
                    break;
                default:
                    break;
            }

            return _cars.Find(filter).Sort(sort).ToList();
        }

        public Car GetCar(Guid id)
        {
            return _cars.Find(car => car.Id == id).FirstOrDefault();
        }

        public List<Car> GetOwnerCars(Guid ownerId)
        {
            return _cars.Find(car => car.OwnerId == ownerId).ToList();
        }

        public Car CreateCar(Car car)
        {
            _cars.InsertOne(car);
            return car;
        }

        public Car UpdateCar(Guid id, Car car)
        {
            var filter = Builders<Car>.Filter.Eq(u => u.Id, id);
            var update = Builders<Car>.Update
                .Set(c => c.Price, car.Price)
                .Set(c => c.Title, car.Title)
                .Set(c => c.Location, car.Location)
                .Set(c => c.Availability, car.Availability)
                .Set(c => c.Km, car.Km)
                .Set(c => c.Cartype, car.Cartype)
                .Set(c => c.Like, car.Like)
                .Set(c => c.Transmission, car.Transmission)
                .Set(c => c.Likes, car.Likes)
                .Set(c => c.Fueltype, car.Fueltype)
                .Set(c => c.Seat, car.Seat)
                .Set(c => c.HasLiked, car.HasLiked);
            if (car.Photos != null && car.Photos.Any())
            {
                update = update.Set(c => c.Photos, car.Photos);
            }

            if (car.Comment != null && car.Comment.Any())
            {
                update = update.Set(c => c.Comment, car.Comment);
            }
            _cars.UpdateOne(filter, update);
            return _cars.Find(filter).FirstOrDefault();
        }

        public void DeleteCar(Guid id)
        {
            _cars.DeleteOne(c => c.Id == id);
        }

        public Car CreateCar(User user)
        {
            throw new NotImplementedException();
        }

        public void UpdateCar(Guid id, User user)
        {
            throw new NotImplementedException();
        }

        public Car PostComment(Guid car_id, Comment comment)
        {
            var filter = Builders<Car>.Filter.Eq(car => car.Id, car_id);
            var update = Builders<Car>.Update.Push(car => car.Comment, comment);
            _cars.UpdateOne(filter, update);
            return _cars.Find(car => car.Id == car_id).FirstOrDefault();
        }

        public List<string> GetLocations()
        {
            return _cars.Find(FilterDefinition<Car>.Empty).ToList().Select(car => car.Location).Distinct().ToList();
        }
    }
}
