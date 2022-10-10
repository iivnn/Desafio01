using back.Classes;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        private readonly Context _context;

        public UserController(ILogger<UserController> logger, Context context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("Get")]
        public List<UserGetResponse> Get()
        {
            var users = _context.Users.ToList();
            var userResponses = new List<UserGetResponse>();

            foreach (var user in users)
            {
                var userResponse = new UserGetResponse();
                userResponse.Id = user.Id;
                userResponse.Nome = user.Nome;
                userResponse.Sobrenome = user.Sobrenome;
                userResponse.Email = user.Email;
                userResponse.Escolaridade = user.Escolaridade;
                userResponse.DataNascimento = user.DataNascimento.ToString("yyyy-MM-dd");

                userResponses.Add(userResponse);
            }

            return userResponses;               
        }

        [HttpPost("Add")]
        public int Add(UserAddRequest request)
        {
            var user = new User();
            user.Nome = request.Nome;
            user.Sobrenome = request.Sobrenome;
            user.Email = request.Email;
            user.DataNascimento = request.DataNascimento;
            user.Escolaridade = (EscolaridadeEnum)request.Escolaridade;

            _context.Users.Add(user);
            _context.SaveChanges();
            return user.Id;
        }

        [HttpDelete("Delete")]
        public bool Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                return false;
            _context.Users.Remove(user);
            return _context.SaveChanges() > 0;
        }

        [HttpPut("Update")]
        public bool Update(UserUpdateRequest request)
        {
            var user = _context.Users.Find(request.Id);
            user.Nome = request.Nome;
            user.Sobrenome = request.Sobrenome;
            user.Email = request.Email;
            user.Escolaridade = request.Escolaridade;
            user.DataNascimento = request.DataNascimento;

            _context.Users.Update(user);
            return _context.SaveChanges() > 0;
        }
    }
}