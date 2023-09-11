import React from 'react';
import logo from '../../assets/fortuna_fusion_x_logo.png';

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center w-96 h-fit mx-auto rounded-lg shadow-md">
            <img src={logo} alt="Fortuna Fusion X Logo" className="mb-4 h-full"/>           
            <h2 className="mb-4 font-bold text-2xl font-cabin">Login</h2>
            <form className="w-full">
                <div className="flex flex-col mb-3">
                    <label className="mb-2 font-bold ml-10 font-cabin">Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
                    />
                </div>
                <div className="flex flex-col mb-1">
                    <label className="mb-2 font-bold ml-10 font-cabin">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="px-4 py-1 w-100 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
                    />
                </div>
                <div className="text-right">
                    <a href="ForgotPasswordText" className="mr-10 text-blue-500 hover:underline text-sm font-cabin">Forgot password?</a>
                </div>
                <button type="submit" className="mx-auto my-5 block bg-teal-500 text-white px-7 py-0.5 font-bold font-cabin rounded-md
                 hover:bg-teal-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"> Login </button>
            </form>
        </div>
    );
}

export default LoginForm;
