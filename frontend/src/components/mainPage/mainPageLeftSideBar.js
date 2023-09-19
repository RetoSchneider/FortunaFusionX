import React from 'react';

const LeftSideBar = () => {
  return (
    <div className="w-[300px] bg-white p-4 border-r border-gray-300">
      <div className="content">
        <h2 className="font-cabin font-bold text-lg text-black mb-4">Statistic</h2>
        
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
          Latest Results
        </button>
        
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
          Result History
        </button>
        
        <h2 className="font-cabin font-bold text-lg text-black mb-4">Generator</h2>
        
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
          Random Number Generator
        </button>
        
        <button className="font-cabin font-bold text-lg text-black hover:text-gray-600 transform transition-transform duration-100 hover:scale-105 active:scale-95 mb-2">
          Enhanced Number Generator
        </button>
      </div>
    </div>
  );
} 

export default LeftSideBar;
