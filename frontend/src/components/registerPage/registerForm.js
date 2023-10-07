import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/loginPage/loginActions";
import logo from "../../assets/fortuna_fusion_x_logo.png";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ registerUser, error }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      registerUser(email, username, password);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="flex flex-col items-center w-96 h-fit mx-auto rounded-lg shadow-md">
      {error && <div className="error rounded-t-lg">{error}</div>}
      <img
        src={logo}
        alt="Fortuna Fusion X Logo"
        className="mb-4 h-full rounded-t-lg"
      />
      <h2 className="mb-4 font-bold text-2xl font-cabin">Register</h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold ml-10 font-cabin">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold ml-10 font-cabin">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold ml-10 font-cabin">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="mb-2 font-bold ml-10 font-cabin">
            Repeat Password:
          </label>
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat your password"
            className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="mx-auto my-5 block bg-teal-500 text-white px-7 py-0.5 font-bold font-cabin rounded-md
                 hover:bg-teal-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center items-center w-full mt-2 mb-5 font-cabin">
        <p className="text-gray-600 mr-4">Already have an account?</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-transparent border-none text-blue-500 font-cabin hover:underline
                    focus:outline-none transform transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (email, username, password) =>
    dispatch(registerUser(email, username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
