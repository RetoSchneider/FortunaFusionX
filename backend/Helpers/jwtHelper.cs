using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using fortunafusionx.backend;

public static class JwtHelper
{
    public static string GenerateJwtToken(User user, IConfiguration Configuration)
    {
        // Check if user object is null
        if (user == null) 
        {
            throw new ArgumentNullException(nameof(user), "User cannot be null");
        }

        // Check if user's Username is null or empty
        if (string.IsNullOrEmpty(user.Username))
        {
            throw new ArgumentNullException(nameof(user.Username), "Username cannot be null or empty");
        }

        var jwtKey = Configuration["Jwt:Key"];
        if (jwtKey == null)
        {
            throw new ArgumentNullException(nameof(jwtKey), "Jwt:Key must be set in configuration");
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username)
            }),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = creds,
            Issuer = Configuration["Jwt:Issuer"],
            Audience = Configuration["Jwt:Audience"]
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}
