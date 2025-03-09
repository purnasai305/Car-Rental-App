using MongoDB.Bson.Serialization.Attributes;

namespace Car_Rental_App.Models
{
    public class Car
    {
        [BsonId]
        public Guid Id { get; set; }
        public Guid OwnerId { get; set; }
        public string Title { get; set; }   
        public int  Price { get; set; }
        public string Transmission { get; set; }
        public string Fueltype { get; set; }
        public int Seat { get; set; }
        public int Km { get; set; }
        public string Cartype { get; set; }
        public string Location { get; set; }
        public bool Availability { get; set; }  
        public List<string> Photos { get; set; } 
        public List<Comment> Comment { get; set; }
        public float Like { get; set; }
        public BookingStatus BookingStatus { get; set; }
        public List<Guid> Likes { get; set; }
        public bool  HasLiked { get; set; }
        public Car()
        {
            Likes = new List<Guid>(); 
            Comment = new List<Comment>(); 
            Photos = new List<string>(); 
        }
    }
}
