using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Car_Rental_App.Models
{
    public class Bookings
    {
        [BsonId]
        public Guid Id { get; set; }
        public Guid LesseeId { get; set; }
        public Guid CarId { get; set; }
        public Guid OwnerId { get; set; }
        public decimal Price { get; set; }
        public BookingStatus BookingStatus { get; set; } 
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int DistanceCovered { get; set; }
        public decimal HoursUsed { get; set; }
        public Bookings()
        {
            Id = Guid.NewGuid();
        }
    }
}
