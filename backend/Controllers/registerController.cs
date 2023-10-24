using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class RegisterController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public RegisterController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        if (_context.Users.Any(u => u.Username == dto.Username || u.Email == dto.Email))
        {
            return BadRequest("Username or email already exists.");
        }

        var passwordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        
        var user = new User
        {
            Username = dto.Username,
            Email = dto.Email,
            PasswordHash = passwordHash
        };

        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();

        return Ok();
    }
}
