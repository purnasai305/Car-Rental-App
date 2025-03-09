using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Car_Rental_App.Models
{
    public class Comment
    {
        [BsonId]
        public Guid Id { get; set; }
        public Guid CarId { get; set; }
        public string UserName { get; set; }
        public string CommentText { get; set; }
        public Comment()
        {
            Id = Guid.NewGuid();  
        }
    }
}
