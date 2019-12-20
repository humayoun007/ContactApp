using Microsoft.EntityFrameworkCore;

namespace contact_app.Model {
    public class ContactAppContext : DbContext {
        public ContactAppContext (DbContextOptions<ContactAppContext> options) : base (options) { }
        public DbSet<Contact> Contact {
            get;
            set;
        }
    }
}