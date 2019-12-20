using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using contact_app.Model;

namespace contact_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly ContactAppContext _context;

        public ContactController(ContactAppContext context)
        {
            _context = context;
        }

        // GET: api/Contact
        [HttpGet]
        // [Route("getAllContact")]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContact()
        {
            return await _context.Contact.ToListAsync();
        }

        // GET: api/Contact/5
        [HttpGet("{id}")]
        // [Route("getContact")]
        public async Task<ActionResult> GetById(long id)
        {
            var contact = await _context.Contact.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return new ObjectResult(contact);
        }

        

        // PUT: api/Contact/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        // [Route("updateContact")]
        public async Task<IActionResult> PutContact(long id, [FromBody]  Contact item)
        {
            // set bad request if contact data is not provided in body
            if (item == null || id == 0)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok( new { message= "Contact is updated successfully."});
        }

        // POST: api/Contact
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        // [Route("addContact")]
        public async Task<ActionResult> Create([FromBody]  Contact item)
        {
            // set bad request if contact data is not provided in body
            if (item == null)
            {
                return BadRequest();
            }
            await _context.Contact.AddAsync(item);            
            await _context.SaveChangesAsync();

            return Ok( new { message= "Contact is added successfully."});
        }

        // DELETE: api/Contact/5
        [HttpDelete("{id}")]
        //  [Route("deleteContact")]
        public async Task<ActionResult> DeleteContact(long id)
        {
            var contact = await _context.Contact.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _context.Contact.Remove(contact);
            await _context.SaveChangesAsync();

           return Ok( new { message= "Contact is deleted successfully."});
        }

        private bool ContactExists(long? id)
        {
            return _context.Contact.Any(e => e.id == id);
        }
    }
}
