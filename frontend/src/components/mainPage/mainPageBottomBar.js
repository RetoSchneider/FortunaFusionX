import React from "react";
import Logo from "../../assets/fortuna_fusion_x_logo_symbol_invisible_background.png";
import "./mainPageBottomBar.css";

const MainPageBottomBar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap w-full h-auto px-6 py-4 shadow-inner-t bg-teal-50 border-t border-gray-300">
      <div className="flex items-center space-x-8 text-sm">
        <img src={Logo} alt="Fortuna Fusion X Logo" className="h-10 w-auto" />
        <div className="flex space-x-6">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mr-16">
        Contact Developer
      </button>

      <div className="flex text-center text-sm">
        © 2023 Fortuna Fusion X. All rights reserved.
      </div>
    </div>
  );
};

export default MainPageBottomBar;
