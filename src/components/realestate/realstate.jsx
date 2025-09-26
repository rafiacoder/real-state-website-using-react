// src/components/RealEstate.jsx

import React, { useState, useEffect } from 'react';

// Sample data for properties. In a real app, this would come from an API.
const allProperties = [
  {
    id: 1, status: 'For Sale', type: 'Home', location: 'Merrick Way', price: 540000, beds: 8, baths: 8, area: 4300, isFeatured: false, image: 'villa6.jpg'
  },
  {
    id: 2, status: 'For Sale', type: 'Villa', location: 'Coral Gables', price: 825000, beds: 9, baths: 8, area: 3500, isFeatured: true, image: 'villa7.jpg'
  },
  {
    id: 3, status: 'For Sale', type: 'Villa', location: 'Hollywood Boulevard', price: 740000, beds: 7, baths: 8, area: 4530, isFeatured: true, image: 'villa9.jpg'
  },
  {
    id: 4, status: 'For Rent', type: 'Traditional Food Restaurant', location: 'Hollywood Boulevard', price: 2600, beds: null, baths: null, area: 950, isFeatured: false, image: 'restaurant1.jpg'
  },
  {
    id: 5, status: 'For Rent', type: 'Villa', location: 'Grand Avenue', price: 4750, beds: 6, baths: 4, area: 3750, isFeatured: false, image: 'villa10.jpg'
  },
  {
    id: 6, status: 'For Sale', type: 'Apartment', location: 'Brickell', price: 315000, beds: 9, baths: 8, area: 1200, isFeatured: false, image: 'villa11.jpg'
  },
  {
    id: 7, status: 'For Sale', type: 'Home', location: 'Kendall', price: 450000, beds: 12, baths: 8, area: 3100, isFeatured: false, image: 'villa.jpg'
  },
  {
    id: 8, status: 'For Rent', type: 'Home', location: 'Homestead', price: 2100, beds: 8, baths: 10, area: 2400, isFeatured: false, image: 'villa 12.jpg'
  },
];

const ITEMS_PER_PAGE = 6;

const RealEstate = () => {
  const [filters, setFilters] = useState({
    status: '',
    type: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter properties whenever filters change
  useEffect(() => {
    const applyFilters = () => {
      let filtered = allProperties.filter(property => {
        // Status filter
        if (filters.status && property.status !== filters.status) return false;
        // Type filter
        if (filters.type && property.type !== filters.type) return false;
        // Location filter
        if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
        // Price filter
        if (filters.minPrice && property.price < parseFloat(filters.minPrice)) return false;
        if (filters.maxPrice && property.price > parseFloat(filters.maxPrice)) return false;
        return true;
      });
      setFilteredProperties(filtered);
      setCurrentPage(1); // Reset to first page on filter change
    };

    applyFilters();
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      status: '',
      type: '',
      location: '',
      minPrice: '',
      maxPrice: '',
    });
  };

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
            i === currentPage ? 'bg-[#715A5A] text-white' : ' text-black hover:bg-[#715A5A] hover:text-white'
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
        {/* Filtration Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Filter Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <input type="text" name="location" placeholder="Location" value={filters.location} onChange={handleFilterChange} className="p-2 border rounded" />
            <select name="status" value={filters.status} onChange={handleFilterChange} className="p-2 border rounded">
              <option value="">Status (All)</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
            <select name="type" value={filters.type} onChange={handleFilterChange} className="p-2 border rounded">
              <option value="">Type (All)</option>
              <option value="Home">Home</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Traditional Food Restaurant">Restaurant</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} className="p-2 border rounded" />
              <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} className="p-2 border rounded" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleClearFilters}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md font-semibold hover:bg-gray-300 transition-colors duration-200"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Property Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProperties.length > 0 ? (
            currentProperties.map(property => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64">
                  <img src={property.image} alt={`Property in ${property.location}`} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-[#715A5A] text-white text-xs px-3 py-1 rounded-br-lg">{property.status}</div>
                  {/* ... other overlay elements like gallery count, featured badge, etc. as in previous response ... */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.type} in {property.location}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{property.area}</span>
                    <div className="flex items-center space-x-4">
                      {property.beds && <span className="flex items-center">🛏️ {property.beds}</span>}
                      {property.baths && <span className="flex items-center">🛁 {property.baths}</span>}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-[#715A5A]">${property.price.toLocaleString()}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No properties match your criteria.
            </div>
          )}
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

export default RealEstate;