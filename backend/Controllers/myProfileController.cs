using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
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

        var userDto = new UserDto 
        {
            Id = user.Id,
            Username = user.Username ?? "",
            Email = user.Email ?? "",
            ProfileImage = user.ProfileImage ?? ""
        };

        return userDto;
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
        user.ProfileImage = updatedUser.ProfileImage ?? user.ProfileImage;

        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPut("changePassword")]
    public async Task<ActionResult> ChangePassword(PasswordChangeDto passwordChange)
    {
        int currentUserId = int.Parse(User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value ?? "0");
        var user = await _context.Users.FindAsync(currentUserId);

        if (user == null)
        {
            return NotFound();
        }

        if (!BCrypt.Net.BCrypt.Verify(passwordChange.CurrentPassword, user.PasswordHash))
        {
            return BadRequest("Invalid current password");
        }

        if (passwordChange.NewPassword != passwordChange.ValidatePassword)
        {
            return BadRequest("New password and validation password do not match.");
        }

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(passwordChange.NewPassword);

        await _context.SaveChangesAsync();

        return Ok();
    }


}