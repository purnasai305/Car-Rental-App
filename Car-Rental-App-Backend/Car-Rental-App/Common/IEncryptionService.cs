namespace Car_Rental_App.Common
{
    public interface IEncryptionService
    {
        string Encrypt(string password);
        string Decrypt(string passwordHash);
    }
}
