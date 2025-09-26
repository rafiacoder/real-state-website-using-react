// src/components/PropertyTypeCards.jsx

import React from 'react';

const propertyTypes = [
  {
    id: 1,
    name: 'Single Family',
    propertiesCount: 4,
    image: 'singlefamily.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Shop',
    propertiesCount: 1,
    image: 'shop.jpg', // Replace with actual image path
  },
  // The middle descriptive section is not a card, so it's handled separately in JSX
  {
    id: 3,
    name: 'Apartment',
    propertiesCount: 2,
    image: 'apartment.jpg', // Replace with actual image path
  },
  {
    id: 4,
    name: 'Villa',
    propertiesCount: 4,
    image: 'villa.jpg', // Replace with actual image path
  },
];

const Properties = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Render the first two property cards */}
        {propertyTypes.slice(0, 2).map((type) => (
          <div
            key={type.id}
            className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-lg overflow-hidden group 
                       col-span-1 flex items-end p-6 cursor-pointer"
            style={{ backgroundImage: `url(${type.image})` }}
          >
            {/* Dark overlay that brightens on hover */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold">{type.name}</h3>
              <p className="text-sm">{type.propertiesCount} Properties</p>
            </div>
          </div>
        ))}

        {/* Middle descriptive content */}
        <div className="col-span-1 lg:col-span-1 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center text-center">
          <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
            Configure & customize stuff around your website without going into code.
          </h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            RealHomes theme gracefully facilitates real estate business.
          </p>
        </div>

        {/* Render the last two property cards */}
        {propertyTypes.slice(2, 4).map((type) => (
          <div
            key={type.id}
            className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-lg overflow-hidden group 
                       col-span-1 flex items-end p-6 cursor-pointer"
            style={{ backgroundImage: `url(${type.image})` }}
          >
            {/* Dark overlay that brightens on hover */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold">{type.name}</h3>
              <p className="text-sm">{type.propertiesCount} Properties</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Properties;