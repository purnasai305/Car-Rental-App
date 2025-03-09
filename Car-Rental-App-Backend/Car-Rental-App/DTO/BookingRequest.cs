namespace Car_Rental_App.DTO
{
    public class BookingRequest
    {
        public Guid Carid { get; set; }
        public Guid Userid { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
