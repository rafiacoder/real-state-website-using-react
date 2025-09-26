// src/components/ContactForm.jsx

import React from 'react';

const Contactus = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 rounded-lg shadow-lg overflow-hidden">
        {/* Left Column: The Form */}
        <div className="p-4 md:p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" id="country" name="country" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" id="state" name="state" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="how-found" className="block text-sm font-medium text-gray-700">How did you find us?</label>
                <select id="how-found" name="how-found" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option>Word of Mouth</option>
                  <option>Online Search</option>
                  <option>Social Media</option>
                </select>
              </div>
              <div>
                <label htmlFor="agent" className="block text-sm font-medium text-gray-700">Agent</label>
                <select id="agent" name="agent" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option>None</option>
                  <option>Nathan James</option>
                  <option>Melissa William</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#715A5A] hover:bg-[#422f2f] text-white font-bold py-3 px-4 rounded-md shadow-sm transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: The Banner */}
        <div 
          className="relative bg-cover bg-center h-full hidden lg:block"
          style={{ backgroundImage: `url('formimage.jpg')` }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-50 z-10"></div>
          <div className="relative z-20 p-8 md:p-12 text-white flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manage All your Company's relationships and interactions through integrated CRM
            </h2>
            <p className="text-gray-200 text-lg">
              New contact will be <span className="underline font-semibold">Auto Generated</span> on Inquiry Form's Submission.
            </p>
            <p className="text-gray-200 text-lg mt-2">
              History of <span className="underline font-semibold">Communication</span> can also be <span className="underline font-semibold">Maintained</span> on Enquiry level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;