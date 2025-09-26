// src/components/BlogListings.jsx

import React, { useState } from 'react';

// Sample data for blog posts. In a real application, this data would be fetched from an API.
const allBlogPosts = [
  {
    id: 1,
    title: '5 Tips to Choose the Right Real Estate Agent',
    image: 'villa5.jpg',
    category: 'Real Estate',
    date: 'February 10, 2023',
    author: 'John Doe',
    comments: 3,
    excerpt: 'Choosing the right real estate agent is a critical step in buying or selling a home. Here are 5 essential tips to help you make an informed decision...',
  },
  {
    id: 2,
    title: 'How to Increase Your Property Value',
    image: 'villa6.jpg',
    category: 'Home Improvement',
    date: 'January 25, 2023',
    author: 'Jane Smith',
    comments: 5,
    excerpt: 'Want to get the most out of your investment? Learn effective strategies for increasing your property\'s value, from small upgrades to major renovations...',
  },
  {
    id: 3,
    title: 'The Future of Smart Homes',
    image: 'villa11.jpg',
    category: 'Technology',
    date: 'January 15, 2023',
    author: 'Alex Williams',
    comments: 1,
    excerpt: 'Smart home technology is evolving rapidly. Discover the latest trends and what to expect from connected homes in the coming years...',
  },
  {
    id: 4,
    title: 'Negotiating Your Way to a Great Deal',
    image: 'restaurant.jpg',
    category: 'Buying',
    date: 'December 20, 2022',
    author: 'Emily Davis',
    comments: 2,
    excerpt: 'Negotiation is a key skill in real estate. This guide will walk you through the essential tactics to secure the best possible deal on your next property...',
  },
  {
    id: 5,
    title: ' Your Way to a Great Deal',
    image: 'background.jpg',
    category: 'Buying',
    date: 'December 20, 2022',
    author: 'Emily Davis',
    comments: 2,
    excerpt: 'Negotiation is a key skill in real estate. This guide will walk you through the essential tactics to secure the best possible deal on your next property...',
  },
];

const ITEMS_PER_PAGE = 3;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allBlogPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Blog Posts Section */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <span className="text-blue-500 text-sm font-medium uppercase">{post.category}</span>
                  <h3 className="text-2xl font-bold text-gray-800 my-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span>By {post.author}</span>
                    <span>|</span>
                    <span>{post.date}</span>
                    <span>|</span>
                    <span>{post.comments} Comments</span>
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

        {/* Sidebar Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Search</h4>
            <input type="text" placeholder="Search..." className="w-full p-2 border rounded" />
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Real Estate (4)</li>
              <li>Home Improvement (2)</li>
              <li>Buying (1)</li>
              <li>Selling (3)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              {allBlogPosts.slice(0, 3).map(post => (
                <li key={post.id} className="flex items-start space-x-3">
                  <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h5 className="text-lg font-semibold">{post.title}</h5>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;