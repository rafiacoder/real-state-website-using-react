import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#715A5A]  text-white py-12 px-4 sm:px-8 lg:px-24   opacity-90"
     style={{
        backgroundImage: "url('footer-background.jpg')", 
      }}>
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#D3DAD9] mb-8 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center text-center sm:text-left">
            <h1 className="text-2xl font-bold">REAL HOMES</h1>
            <span className="sm:ml-4 text-sm text-gray-300">
              / Simply #1 Real Estate Theme
            </span>
          </div>
          <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-[#37353E] rounded-full hover:bg-[#5a4545] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white transform rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <a href="#" className="hover:text-gray-200 transition">
                Home
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                List Layout
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Half Map Layout
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Grid Layout
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Blog
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start sm:items-center">
                <span className="mr-2">📍</span>
                <span>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span> 23-456-7890
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span> robot@inspirythemes.com
              </p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'awareness',
                'contemporary',
                'economy living',
                'image post',
                'interior',
                'living rooms',
                'studio',
                'trendy',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-[#37353E] hover:bg-[#5a4545] cursor-pointer transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-8 mt-8 border-t border-[#D3DAD9] text-xs sm:text-sm text-gray-300">
          <p>© 2025. All rights reserved. Designed by Inspiry Themes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
