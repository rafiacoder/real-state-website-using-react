// src/components/ImageGallery.jsx

import React, { useState } from 'react';

// Sample data for the gallery. In a real application, this data would be fetched from an API.
const allGalleryImages = [
  { id: 1, url: 'villa.jpg', title: 'Modern Villa', location: 'Beverly Hills' },
  { id: 2, url: 'apartment.jpg', title: 'Spacious Apartment', location: 'New York' },
  { id: 3, url: 'villa2.jpg', title: 'Cozy Cottage', location: 'The Hamptons' },
  { id: 4, url: 'singlefamily.jpg', title: 'City Penthouse', location: 'Miami' },
  { id: 5, url: 'shop.jpg', title: 'Suburban Home', location: 'San Diego' },
  { id: 6, url: 'lackfront.jpg', title: 'Lakefront Retreat', location: 'Lake Tahoe' },
  { id: 7, url: 'herobanner.jpg', title: 'Luxury Condo', location: 'Chicago' },
  { id: 8, url: 'formimage.jpg', title: 'Desert Oasis', location: 'Palm Springs' },
];

const ITEMS_PER_PAGE = 6;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allGalleryImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = allGalleryImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`py-2 px-4 rounded-md font-bold transition-colors duration-200 ${
            i === currentPage ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500 hover:bg-blue-200'
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Image Gallery</h2>
          <p className="text-gray-600">Explore our collection of stunning properties.</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map(image => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold">{image.title}</h3>
                  <p className="text-lg">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            {renderPaginationButtons()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;