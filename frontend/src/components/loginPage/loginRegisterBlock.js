import React from 'react';

const LoginRegisterBlock = () => {
    return (
        <div className="flex flex-col items-center w-96 h-fit mx-auto mt-5 px-4 border rounded-lg shadow-md">
            <div className="flex justify-center items-center w-full mt-2 mb-5 font-cabin">
                <p className="text-gray-600 mr-4">Not registered yet?</p>
                <button className="bg-transparent border-none text-blue-500 font-cabin hover:underline
                    focus:outline-none transform transition-transform duration-100 hover:scale-105 active:scale-95"> Register
                </button>
            </div>
            
            <div className="flex flex-col space-y-5 w-full justify-center font-cabin mb-4">
                <button className="px-4 py-2 border rounded-md bg-gray-200 opacity-70 hover:bg-gray-300 transition-all duration-300"> Register with Google
                </button>
                <button className="px-4 py-2 border rounded-md bg-gray-200 opacity-70 hover:bg-gray-300 transition-all duration-300"> Register with Instagram
                </button>
                <button className="px-4 py-2 border rounded-md bg-gray-200 opacity-70 hover:bg-gray-300 transition-all duration-300"> Register with Facebook
                </button>
            </div>
        </div>
    );
}

export default LoginRegisterBlock;
