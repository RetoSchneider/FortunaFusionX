import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoText from "../../assets/fortuna_fusion_x_logo_text_invisible.png";

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(logout());
    navigate("/login");
  };

  const handleMyProfileClick = () => {
    navigate("/main/myprofile");
  };

  const handleLogoClick = () => {
    navigate("/main");
  };

  return (
    <div className="flex items-center justify-between flex-wrap w-full h-auto px-6 py-4 shadow-md bg-teal-50">
      <div className="flex items-center space-x-12 mb-2 sm:mb-0">
        <button onClick={handleLogoClick} className="focus:outline-none">
          <img
            src={LogoText}
            alt="Fortuna Fusion X Logo Text"
            className="h-10 w-auto"
          />
        </button>
      </div>

      <div className="flex-grow flex justify-center space-x-24 flex-wrap mb-2 sm:mb-0">
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95">
          Swiss Lotto
        </button>
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95">
          EuroMillions
        </button>
      </div>

      <div className="flex space-x-12">
        <button
          onClick={handleMyProfileClick}
          className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          My Profile
        </button>
        <button
          onClick={handleLogout}
          className="font-cabin font-bold text-lg text-red-500 hover:text-red-400 transform transition-transform duration-100 hover:scale-105 active:scale-95"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;
