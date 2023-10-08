using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class MyProfileController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _configuration;

    public MyProfileController(ApplicationDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    [HttpGet]
    public async Task<ActionResult<UserDto>> GetCurrentUserInfo()
    {
        int currentUserId = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value ?? "0");

        var user = await _context.Users.FindAsync(currentUserId);

        if (user == null)
        {
            return NotFound();
        }
        
        return new UserDto 
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email
        };
    }

    [HttpPut]
    public async Task<ActionResult> UpdateUserDetails(UserDto updatedUser)
    {
        int currentUserId = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value ?? "0");

        if (updatedUser.Id != currentUserId)
        {
            return BadRequest("Invalid user data");
        }

        var user = await _context.Users.FindAsync(currentUserId);

        if (user == null)
        {
            return NotFound();
        }

        user.Username = updatedUser.Username ?? user.Username;
        user.Email = updatedUser.Email ?? user.Email;

        await _context.SaveChangesAsync();

        return Ok();
    }
}