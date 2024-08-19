"use client"; // Ensure this component is run on the client side

import { useState } from 'react';
import '@/styles/globals.css';
import {
  UserIcon,
  PhoneIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PresentationChartBarIcon,
  ArrowRightCircleIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Log in', icon: UserIcon },
    { name: 'Sign Up', icon: LockClosedIcon },
    { name: 'View Cart', icon: ShoppingCartIcon },
    { name: 'Promotions', icon: PresentationChartBarIcon },
    { name: 'Wishlist', icon: HeartIcon },
    { name: 'Become a Seller', icon: ShoppingBagIcon },
    'Computer Accessories',
    'Phones and Tablets',
    'Health Supplements',
    'Groceries',
    'Fashion',
    'Baby Products',
    'Chat with Us',
    'Bulk Buy',
    'Own a Storefront',
  ];

  return (
    <nav className="bg-white text-gray p-4 w-screen">
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
          className={`fixed top-11 left-0 h-full w-64 bg-white text-gray z-40 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <h4 className="font-bold mb-4">Account</h4>
            {menuItems.slice(0, 6).map((item, index) => (
              <a href="#" key={index} className="block py-1 flex justify-between items-center">
                <item.icon className="w-5 h-5 mr-1" />
                {item.name}
                <RightArrowIcon />
              </a>
            ))}
          </div>

          <div className="p-4">
            <h4 className="font-bold mb-4">All Categories</h4>
            {menuItems.slice(6, 12).map((item, index) => (
              <a href="#" key={index} className="block py-1 flex justify-between items-center">
                {item}
                <RightArrowIcon />
              </a>
            ))}
          </div>

          <div className="p-4 border-t-2 border-dashed border-yellow-400">
            {menuItems.slice(12, 15).map((item, index) => (
              <a href="#" key={index} className="block py-1 flex justify-between items-center">
                {item}
                <RightArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
