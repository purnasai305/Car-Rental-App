using System.Text;

namespace Car_Rental_App.Common
{
    public class EncryptionService : IEncryptionService
    {
        private readonly string _key;
        public EncryptionService(IConfiguration configuration)
        {
            _key = configuration["Jwt:Key"];
        }

        public string Encrypt(string password)
        {
            if (string.IsNullOrEmpty(password)) return "";
            password += _key;
            var passwordBytes=Encoding.UTF8.GetBytes(password);
            return Convert.ToBase64String(passwordBytes);
        }

        public string Decrypt(string passwordHash)
        {
            if (string.IsNullOrEmpty(passwordHash)) return "";
            var base64EncodeBytes = Convert.FromBase64String(passwordHash);
            var result=Encoding.UTF8.GetString(base64EncodeBytes);
            result = result.Substring(0, result.Length - _key.Length);
            return result;
        }
    }
}