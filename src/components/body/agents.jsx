// src/components/Agents.jsx

import React from 'react';

const agentsData = [
  {
    id: 1,
    name: 'Nathan James',
    phone: '1-234-456-7893',
    email: 'robot@inspirythemes.com',
    properties: 4,
    image: 'face1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Melissa William',
    phone: '1-234-456-7892',
    email: 'robot@inspirythemes.com',
    properties: 4,
    image: 'face3.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Alice Brian',
    phone: '1-234-456-7891',
    email: 'robot@inspirythemes.com',
    properties: 3,
    image: 'face2.jpg', // Replace with actual image path
  },
  {
    id: 4,
    name: 'John David',
    phone: '1-234-456-7890',
    email: 'robot@inspirythemes.com',
    properties: 5,
    image: 'face4.jpg', // Replace with actual image path
  },
];

const Agents = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-24 relative overflow-hidden">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-blue-500 font-medium text-lg mb-2">Meet</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Agents</h2>
        <p className="text-gray-600">We have best team to help you find best deal</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {agentsData.map((agent) => (
          <div
            key={agent.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center 
                       hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <div className="mb-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 flex items-center mb-2">
              {agent.name}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </h4>
            <p className="text-blue-500 text-sm mb-1">{agent.phone}</p>
            <p className="text-gray-600 text-sm mb-4">{agent.email}</p>
            <div className="border-t border-gray-200 pt-4 w-full">
              <p className="text-2xl font-bold text-gray-800">{agent.properties}</p>
              <p className="text-gray-600 text-sm">Listed Properties</p>
            </div>
          </div>
        ))}
      </div>

      {/* Blue scroll-to-top button */}
      <div className="absolute bottom-8 right-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Agents;