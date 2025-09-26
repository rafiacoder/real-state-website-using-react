import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "bg-[#37353E] rounded-lg px-4 py-1 font-bold block"
      : "hover:bg-[#37353E] rounded-lg px-4 py-1 font-bold block";

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#715A5A] text-[#D3DAD9] relative">
      {/* Logo */}
      <div className="text-2xl font-bold">Real Homes</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        <li>
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
        </li>

        {/* Real Estate Dropdown */}
        <li className="relative group">
          <NavLink to="/real-estate" className={navLinkStyles}>
            Real Estate
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-[#37353E] rounded-lg hidden group-hover:block">
            <li>
              <NavLink to="/real-estate/buy" className="block px-4 py-2 hover:bg-[#44444E]">
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink to="/real-estate/rent" className="block px-4 py-2 hover:bg-[#44444E]">
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink to="/real-estate/sell" className="block px-4 py-2 hover:bg-[#44444E]">
                Sell
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Property Dropdown */}
        <li className="relative group">
          <NavLink to="/property" className={navLinkStyles}>
            Property
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-[#37353E] rounded-lg hidden group-hover:block">
            <li>
              <NavLink to="/property/apartments" className="block px-4 py-2 hover:bg-[#44444E]">
                Apartments
              </NavLink>
            </li>
            <li>
              <NavLink to="/property/villas" className="block px-4 py-2 hover:bg-[#44444E]">
                Villas
              </NavLink>
            </li>
            <li>
              <NavLink to="/property/commercial" className="block px-4 py-2 hover:bg-[#44444E]">
                Commercial
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Blog Dropdown */}
        <li className="relative group">
          <NavLink to="/blog" className={navLinkStyles}>
            Blog
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-[#37353E] rounded-lg hidden group-hover:block">
            <li>
              <NavLink to="/blog/news" className="block px-4 py-2 hover:bg-[#44444E]">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog/tips" className="block px-4 py-2 hover:bg-[#44444E]">
                Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog/market" className="block px-4 py-2 hover:bg-[#44444E]">
                Market
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Gallery */}
        <li>
          <NavLink to="/gallery" className={navLinkStyles}>
            Gallery
          </NavLink>
        </li>

        {/* Pages Dropdown */}
        <li className="relative group">
          <NavLink to="/pages" className={navLinkStyles}>
            Pages
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-[#37353E] rounded-lg hidden group-hover:block">
            <li>
              <NavLink to="/pages/about" className="block px-4 py-2 hover:bg-[#44444E]">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/services" className="block px-4 py-2 hover:bg-[#44444E]">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages/faqs" className="block px-4 py-2 hover:bg-[#44444E]">
                FAQs
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Contact */}
        <li>
          <NavLink to="/contact" className={navLinkStyles}>
            Contact
          </NavLink>
        </li>

        {/* Button */}
        <button className="bg-[#37353E] hover:bg-[#44444E] text-white px-4 py-2 rounded">
          Submit
        </button>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#715A5A] md:hidden shadow-lg z-50">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/real-estate" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Real Estate
              </NavLink>
            </li>
            <li>
              <NavLink to="/property" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Property
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyles} onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <button className="bg-[#37353E] hover:bg-[#44444E] text-white px-4 py-2 rounded w-full">
                Submit
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
