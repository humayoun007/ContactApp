using contact_app.Model;
using contact_app.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace contact_app.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class UsersController: ControllerBase
    {
       
        private IUserService _userService;

        public UsersController(IUserService userService)
        {            
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AuthenticateModel model)
        {
            var user = _userService.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        
    }
}