// src/components/PropertyDetails.jsx

import React, { useState } from 'react';

// Sample data for a single property
const property = {
  id: 1,
  title: 'Home in Merrick Way',
  address: '3015 Grand Ave, Coconut Grove, FL 12345',
  price: '$540,000',
  images: [
     'PROPERTY.jpg',
        'villa6.jpg',
        'villa7.jpg',
        'villa9.jpg',
        'restaurant1.jpg',
        
  ],
  status: 'For Sale',
  beds: 10,
  baths: 3,
  area: '43000 sq ft',
  lotSize: '9 Acres',
  type: 'Home',
  description: 'This elegant and spacious home located in the heart of Merrick Way offers a perfect blend of modern comfort and classic charm. Featuring a stunning open floor plan, high ceilings, and an abundance of natural light, it is ideal for both family living and entertaining. The gourmet kitchen boasts high-end appliances, granite countertops, and a large center island. The master suite is a true retreat with a luxurious en-suite bathroom and a walk-in closet. The beautifully landscaped backyard provides a private oasis for relaxation and outdoor activities. This property is a must-see for anyone seeking luxury and tranquility in a prime location.',
  features: [
    'Air Conditioning',
    'Central Heating',
    'Swimming Pool',
    'Garage',
    'Fireplace',
    'Hardwood Floors',
    'Patio',
    'Smart Home Technology'
  ],
  agent: {
    name: 'Nathan James',
    phone: '1-234-456-7893',
    email: 'robot@inspirythemes.com',
    image: 'https://via.placeholder.com/150/d0d0d0/aaaaaa?text=Agent+Pic',
  },
  
};

const Property = () => {
  const [mainImage, setMainImage] = useState(property.images[0]);

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-24">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">

        {/* Gallery Section */}
        <div className="mb-8">
          <img src={mainImage} alt={property.title} className="w-full h-[600px] object-cover rounded-lg mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 ${mainImage === img ? 'ring-4 ring-blue-500' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Main Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{property.title}</h1>
            <p className="text-gray-600 mt-1">{property.address}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-[#715A5A]">{property.price}</span>
            <span className="bg-[#715A5A] text-white text-sm px-3 py-1 rounded-full">{property.status}</span>
          </div>
        </div>

        {/* Details and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Details</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
              <span className="flex items-center">🛏️ {property.beds} Beds</span>
              <span className="flex items-center">🛁 {property.baths} Baths</span>
              <span className="flex items-center">📏 {property.area}</span>
              <span className="flex items-center">🏞️ {property.lotSize}</span>
              <span className="flex items-center">🏠 {property.type}</span>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-gray-600">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-[#715A5A]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Agent Information and Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <img src={property.agent.image} alt={property.agent.name} className="w-24 h-24 rounded-full object-cover mb-2" />
              <h4 className="text-lg font-semibold">{property.agent.name}</h4>
              <p className="text-gray-600 text-sm">{property.agent.phone}</p>
              <p className="text-gray-600 text-sm">{property.agent.email}</p>
            </div>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded" />
              <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded"></textarea>
              <button type="submit" className="w-full bg-[#715A5A] text-white py-2 rounded font-bold hover:bg-[#472a2a] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Placeholder for Map and other sections */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Location on Map</h2>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
          <img src="map.jpg" alt="Map Placeholder" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Property;