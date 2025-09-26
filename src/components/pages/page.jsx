// src/components/PropertyListings.jsx

import React, { useState } from "react";

// Dummy data for properties
const propertiesData = [
  {
    id: 1,
    status: "For Sale",
    type: "Home",
    location: "Merrick Way",
    price: "$540,000",
    beds: 3,
    baths: 3,
    area: "4300 sq ft",
    image: "villa1.jpg", // Replace with actual image path
    galleryCount: 5,
    isFeatured: false,
    rating: 4,
  },
  {
    id: 2,
    status: "For Sale",
    type: "Villa",
    location: "Coral Gables",
    price: "$825,000",
    beds: 3,
    baths: 3.5,
    area: "3500 sq ft",
    image: "villa2.jpg", // Replace with actual image path
    galleryCount: 7,
    isFeatured: true,
    rating: 5,
  },
  {
    id: 3,
    status: "For Sale",
    type: "Villa",
    location: "Hollywood Boulevard",
    price: "$740,000",
    beds: 4,
    baths: 3,
    area: "4530 sq ft",
    image: "villa3.jpg", // Replace with actual image path
    galleryCount: 8,
    isFeatured: true,
    rating: 4,
  },
  {
    id: 4,
    status: "For Rent",
    type: "Traditional Food Restaurant",
    location: "",
    price: "$2,600 Monthly",
    beds: null,
    baths: null,
    area: "950 sq ft",
    image: "restaurant.jpg", // Replace with actual image path
    galleryCount: 2,
    isFeatured: false,
    rating: 3,
  },
  {
    id: 5,
    status: "For Rent",
    type: "Villa",
    location: "Grand Avenue",
    price: "$4,750 Monthly",
    beds: 4,
    baths: 4,
    area: "3750 sq ft",
    image: "villa4.jpg", // Replace with actual image path
    galleryCount: 4,
    isFeatured: false,
    rating: 5,
  },
  {
    id: 6,
    status: "For Rent",
    type: "Villa",
    location: "Grand Avenue",
    price: "$4,789 Monthly",
    beds: 4,
    baths: 4,
    area: "3790 sq ft",
    image: "villa5.jpg", // Replace with actual image path
    galleryCount: 4,
    isFeatured: false,
    rating: 5,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination logic
  const totalPages = Math.ceil(propertiesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProperties = propertiesData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-24">
      <div className="container mx-auto">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#715A5A] text-white text-xs px-3 py-1 rounded-br-lg">
                  {property.status}
                </div>
                <div className="absolute top-0 right-0 p-2 text-white flex space-x-2">
                  {property.galleryCount && (
                    <span className="flex items-center bg-gray-800 bg-opacity-70 px-2 py-1 rounded-md text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {property.galleryCount}
                    </span>
                  )}
                  {property.isFeatured && (
                    <span className="flex items-center bg-red-500 bg-opacity-70 px-2 py-1 rounded-md text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="absolute bottom-0 right-0 p-2 text-white flex space-x-2">
                  <button className="bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-red-500 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                  <button className="bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {property.type} in {property.location}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{property.status}</span>
                  <div className="flex items-center space-x-4">
                    {property.beds && (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-4 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m5 0h.01M12 12h.01"
                          />
                        </svg>
                        {property.beds}
                      </span>
                    )}
                    {property.baths && (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-4 4V3m0 4h.01M12 12h.01M12 16h.01M12 20h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        {property.baths}
                      </span>
                    )}
                    {property.area && (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h7m-9-6a3 3 0 110-6h10a3 3 0 010 6h-2m-8 0v10a2 2 0 002 2h8a2 2 0 002-2V7m-8 0v10a2 2 0 002 2h2m-6 4h4"
                          />
                        </svg>
                        {property.area}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-2xl font-bold text-[#715A5A]">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`font-bold py-2 px-4 rounded-md transition-colors duration-200 ${
                currentPage === index + 1
                  ? "bg-[#715A5A] text-white"
                  : " text-black hover:bg-[#715A5A] hover:text-white "
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className=" bg-[#715A5A] hover:bg-[#422f2f] text-white p-4 rounded-full shadow-lg transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Page;
