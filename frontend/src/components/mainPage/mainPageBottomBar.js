import React from "react";
import Logo from "../../assets/fortuna_fusion_x_logo_symbol_invisible_background.png";

const MainPageBottomBar = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 items-center w-full px-6 py-4 bg-teal-50 gap-6">
      {" "}
      <div className="flex items-center space-x-8 text-sm">
        <img src={Logo} alt="Fortuna Fusion X Logo" className="h-10 w-auto" />
        <div className="flex space-x-6">
          <a href="/about" className="hover:underline">
            About Me
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="justify-self-center">
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95">
          Contact Developer
        </button>
      </div>
      <div className="text-sm justify-self-end">
        © 2023 Fortuna Fusion X. All rights reserved.
      </div>
    </div>
  );
};

export default MainPageBottomBar;
