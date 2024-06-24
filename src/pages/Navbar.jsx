import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="text-white text-3xl font-bold">IJ Print Shop</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/shop" className="text-white">
            Shop
          </Link>
          <Link to="/service" className="text-white">
            Services
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-white">
            Home
          </Link>
          <Link to="/about" className="block text-white">
            About
          </Link>
          <Link to="/shop" className="block text-white">
            Shop
          </Link>
          <Link to="/service" className="block text-white">
            Services
          </Link>
          <Link to="/contact" className="block text-white">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
