import React, { useState, useEffect } from "react";

const LeftSideBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-[calc(100vh -120px)] border-t border-b border-gray-300">
      <div
        className={`bg-teal-50 p-4 border-r border-gray-300 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "w-[250px]" : "w-[40px]"
        }`}
      >
        {isSidebarVisible && (
          <div className="content">
            <h2 className="font-cabin font-bold text-lg text-black mt-8 mb-4">
              Statistic
            </h2>
            <button className="block font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
              Latest Results
            </button>
            <button className="block font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-8">
              Result History
            </button>
            <h2 className="font-cabin font-bold text-lg text-black mb-4">
              Generators
            </h2>
            <button className="block font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
              Random Number Generator
            </button>
            <button className="block font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
              Enhanced Number Generator
            </button>
          </div>
        )}
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="absolute top-0 right-0 mt-2 mr-2 w-6 h-6 pb-1 rounded-full bg-teal-500 hover:bg-teal-100 border border-black font-bold z-10 flex items-center justify-center text-white hover:text-black"
        >
          {isSidebarVisible ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
