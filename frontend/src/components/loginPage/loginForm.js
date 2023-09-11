import React from 'react';
import logo from '../../assets/fortuna_fusion_x_logo.png';

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center w-1/2 mx-auto rounded-lg shadow-md">
            <img src={logo} alt="Fortuna Fusion X Logo" className="mb-4"/>
            
            <h2 className="mb-4 font-bold text-2xl">Login</h2>
            <form className="w-full">
                <div className="flex flex-col mb-2">
                    <label className="mb-2 font-bold ml-10">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-50 border rounded-md mx-10"
                    />
                </div>
                <div className="flex flex-col mb-1">
                    <label className="mb-2 font-bold ml-10">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="px-4 py-2 w-50 border rounded-md mx-10"
                    />
                </div>
                <div className="text-right">
                    <a href="ForgotPasswordText" className="mr-10 text-blue-500 hover:underline text-sm">Forgot password?</a>
                </div>
                <button type="submit" className="mx-auto my-5 block bg-emerald-500 text-white px-6 py-1 font-bold rounded-md hover:bg-emerald-600">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
