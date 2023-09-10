import React from 'react';

const LoginForm = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
