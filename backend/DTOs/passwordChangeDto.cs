public class PasswordChangeDto
{
    public string CurrentPassword { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
    public string ValidatePassword { get; set; } = string.Empty;
}
