import React, { useState } from "react";
import backgroundImage from "../../assets/fortuna_fusion_x_logo_no_text.png";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      className="flex flex-col items-center justify-center min-w-full min-h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-lg p-8 m-4 bg-gray-50 shadow-md rounded-md border border-gray-300">
        <h1 className="mb-8 text-2xl font-cabin font-bold text-center text-black">
          User Profile
        </h1>

        <div className="mb-4">
          <label
            className="block mb-2 font-cabin text-lg text-gray-600"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-cabin text-lg text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-cabin text-lg text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-2 font-cabin font-bold text-white bg-teal-500 hover:bg-teal-400 rounded-md transform transition-transform duration-100 hover:scale-105 active:scale-95">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
