import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/loginPage/loginActions";
import logo from "../../assets/fortuna_fusion_x_logo.png";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ loginUser, error, token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/main");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <div className="flex flex-col items-center w-96 h-fit mx-auto rounded-lg shadow-md">
      {error && <div className="error rounded-t-lg">{error}</div>}

      <img
        src={logo}
        alt="Fortuna Fusion X Logo"
        className="mb-4 h-full rounded-t-lg"
      />
      <h2 className="mb-4 font-bold text-2xl font-cabin">Login</h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label className="mb-2 font-bold ml-10 font-cabin">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="px-4 py-1 w-50 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
          />
        </div>
        <div className="flex flex-col mb-1">
          <label className="mb-2 font-bold ml-10 font-cabin">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="px-4 py-1 w-100 border rounded-md mx-10 bg-gray-200 opacity-70 font-cabin"
          />
        </div>
        <div className="text-right">
          <a
            href="ForgotPasswordText"
            className="mr-10 text-blue-500 hover:underline text-sm font-cabin"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="mx-auto my-5 block bg-teal-500 text-white px-7 py-0.5 font-bold font-cabin rounded-md hover:bg-teal-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(loginUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
