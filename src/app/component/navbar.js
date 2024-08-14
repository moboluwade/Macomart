import React, { useState } from 'react';
import '@/styles/globals.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Macomart</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button className="text-gray-800 mx-5" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:flex lg:w-auto lg:bg-transparent lg:text-gray-800`}
        >
          <div className="p-4 bg-black h-screen max-h-screen">
            <h4 className="font-bold mb-4 text-gray2">Account</h4>
            <a href="#" className="block py-1 text-gray2">Log in</a>
            <a href="#" className="block py-1 text-gray2">Sign Up</a>
            <a href="#" className="block py-1 text-gray2">View Cart</a>
            <a href="#" className="block py-1 text-gray2">Promotions</a>
            <a href="#" className="block py-1 text-gray2">Wishlist</a>
            <a href="#" className="block py-1 text-gray2">Become a Seller</a>
          </div>

          <div className="p-4">
            <h4 className="font-bold mb-4">All Categories</h4>
            <a href="#" className="block py-1 text-gray2">Computer Accessories</a>
            <a href="#" className="block py-1 text-gray2">Phones and Tablets</a>
            <a href="#" className="block py-1 text-gray2">Health Supplements</a>
            <a href="#" className="block py-1 text-gray2">Groceries</a>
            <a href="#" className="block py-1 text-gray2">Fashion</a>
            <a href="#" className="block py-1 text-gray2">Become a Seller</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
