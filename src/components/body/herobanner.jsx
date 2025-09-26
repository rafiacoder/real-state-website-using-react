// src/components/HeroBanner.jsx

import React from 'react';

const HeroBanner = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" 
      style={{ backgroundImage: `url('herobanner.jpg')` }}
    >
      {/* Semi-transparent blue overlay */}
      <div className="absolute inset-0 opacity-80 z-10"></div>
      
      {/* Content wrapper with angled top and bottom */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        
        {/* Angled top section */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white transform -skew-y-3 origin-top-left z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 20%)' }}></div>
        
        {/* Angled bottom section */}
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white transform skew-y-3 origin-bottom-right z-0" style={{ clipPath: 'polygon(0 80%, 100% 90%, 100% 100%, 0 100%)' }}></div>
        
        <div className="relative text-center max-w-2xl mx-auto z-30">
          <p className="text-sm font-light text-white">Buy or Sell</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Looking to Buy a new property or Sell an existing one?
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light">
            RealHomes provides an easy solution!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#715A5A] hover:bg-[#432d2d] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              Submit Property
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-[#715A5A] text-white font-bold py-3 px-8 rounded transition-colors duration-300">
              Browse Properties
            </button>
          </div>
        </div>
      </div>

      {/* Blue scroll-to-top button */}
      <div className="absolute bottom-8 right-8 z-40">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;