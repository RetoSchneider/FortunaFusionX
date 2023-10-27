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
    <div className="relative h-[calc(100vh -120px)] border-t border-b border-gray-200 overflow-hidden">
      <div
        className={`bg-teal-50 p-4 border-r border-white h-full overflow-x-hidden transform transition-all duration-700 ease-in-out shadow-md ${
          isSidebarVisible ? "w-[250px] box-border" : "w-[40px] box-border"
        }`}
      >
        <div
          className={`content space-y-6 text-left ${
            isSidebarVisible
              ? "transition-max-height ease-in-out opacity-100 max-h-[600px]"
              : "transition-max-height duration-400 ease-in-out opacity-0 max-h-0"
          }`}
          style={{
            transitionDuration: isSidebarVisible ? "2600ms" : undefined,
          }}
        >
          <h2 className="w-11/12 ml-2 font-cabin font-bold text-xl text-black border-b pb-2 pt-5">
            Statistic
          </h2>
          <button className="w-11/12 ml-2 text-left font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 py-2 rounded-lg shadow hover:shadow-md bg-white flex items-center pl-3">
            <span className="mr-2">📊</span> Latest Results
          </button>
          <button className="w-11/12 ml-2 text-left font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 py-2 rounded-lg shadow hover:shadow-md bg-white flex items-center pl-3">
            <span className="mr-2">📅</span> Result History
          </button>
          <h2 className="w-11/12 ml-2 font-cabin font-bold text-xl text-black border-b pb-2">
            Generators
          </h2>
          <button className="w-11/12 ml-2 text-left font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 py-2 rounded-lg shadow hover:shadow-md bg-white flex items-center pl-3">
            <span className="mr-2">🎲</span> Random Number Generator
          </button>
          <button className="w-11/12 ml-2 text-left font-cabin font-bold text-md text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 py-2 rounded-lg shadow hover:shadow-md bg-white flex items-center pl-3">
            <span className="mr-2">🚀</span> Enhanced Number Generator
          </button>
        </div>
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className={`absolute top-0 right-0 mt-1 mr-2 font-extrabold z-10 flex items-center justify-center transition-transform duration-500 ${
            isSidebarVisible ? "text-red-500" : "text-blue-500"
          } hover:text-teal-700`}
          style={{
            transform: isSidebarVisible ? "rotate(45deg)" : "rotate(-360deg)",
            fontSize: "2rem",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
