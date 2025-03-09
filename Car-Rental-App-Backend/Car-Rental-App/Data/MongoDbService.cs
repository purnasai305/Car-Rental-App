using MongoDB.Driver;
namespace Car_Rental_App.Data
{
    public class MongoDbService
    {
        private readonly IConfiguration _configuration;
        private readonly IMongoDatabase _database;
        public MongoDbService(IConfiguration configuration)
        {
            _configuration= configuration;

            var connectionString = _configuration.GetConnectionString("DbConnection");
            var mongoClient=new MongoClient(connectionString);
            _database = mongoClient.GetDatabase("CarRentRepository");
        }
        public IMongoDatabase? Database => _database;
    }
}
