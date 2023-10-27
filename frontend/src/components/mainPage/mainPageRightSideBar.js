import React, { useState, useEffect } from "react";

const RightSideBar = () => {
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
    <div className="relative h-[calc(100vh -120px)] border-t border-b border-gray-200">
      <div
        className={`bg-teal-50 p-4 h-full transform transition-all duration-700 ease-in-out ${
          isSidebarVisible ? "w-[250px]" : "w-[40px]"
        }`}
      >
        <div
          className={`content space-y-6 text-left transition-opacity duration-700 ease-in-out transition-max-height overflow-hidden ${
            isSidebarVisible
              ? "opacity-100 max-h-[calc(100vh-120px)]"
              : "opacity-0 max-h-0"
          }`}
        ></div>
        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className={`absolute top-0 left-0 mt-1 ml-2 font-extrabold z-10 flex items-center justify-center transition-transform duration-500 ${
            isSidebarVisible ? "text-red-500" : "text-blue-500"
          } hover:text-teal-700`}
          style={{
            transform: isSidebarVisible ? "rotate(-45deg)" : "rotate(360deg)",
            fontSize: "2rem",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
