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
    <div className="relative h-[calc(100vh -120px)] border-t border-b border-gray-300">
      <div
        className={`bg-teal-50 p-4 border-l border-gray-300 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "w-[250px]" : "w-[40px]"
        }`}
      >
        {isSidebarVisible && <div className="content"></div>}

        <button
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="absolute top-0 left-0 mt-2 ml-2 w-6 h-6 pb-1 rounded-full bg-teal-500 hover:bg-teal-100 border border-black font-bold z-10 flex items-center justify-center text-white hover:text-black"
        >
          {isSidebarVisible ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
