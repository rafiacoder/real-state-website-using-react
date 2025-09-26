// src/components/Words.jsx

import React from 'react';

const Words = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-24 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h3 className="text-gray-700 font-medium text-lg mb-2">Words</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">From Our Customers</h2>
        <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>

      <div className="container mx-auto flex items-center justify-center relative">
        {/* Previous Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-w-4xl mx-auto p-8 rounded-lg">
          <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-8">
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-[#715A5A] text-white p-4 rounded-lg z-10 opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 md:h-32 md:w-32" fill="currentColor" viewBox="0 0 448 512">
                
              </svg>
            </div>
            <img 
              src="customer.jpg" 
              alt="Customer" 
              className="w-full h-full object-cover rounded-lg shadow-lg relative z-20" 
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-bold md:text-xl italic leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
            <p className="mt-4 font-semibold text-gray-700 text-lg">
              Author Name
            </p>
          </div>
        </div>

        {/* Next Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Blue wave at the bottom, same as previous component */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#715A5A] transform -skew-y-3 origin-bottom-left z-0" style={{ clipPath: 'polygon(0 80%, 100% 100%, 100% 0, 0 0)' }}></div>
      <div className="absolute bottom-0 right-8 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Words;