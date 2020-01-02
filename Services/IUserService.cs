using System.Collections.Generic;
using contact_app.Model;

namespace contact_app.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }
}