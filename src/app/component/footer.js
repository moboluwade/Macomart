import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white min-h-[3vh] py-1">
      <div className="container mx-auto flex flex-col items-center h-full">
        
        {/* Centralized App Promotion */}
        <div className="text-center mb-8">
          <h4 className="font-bold text-lg mb-4">Download Macomart App</h4>
          <p className="mb-4">Shop directly from our store</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="inline-block bg-gray-700 hover:bg-gray-600 p-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </a>
            <a href="#" className="inline-block bg-gray-700 hover:bg-gray-600 p-2 rounded-md">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-8" />
            </a>
          </div>
        </div>

        {/* Two Columns for Links */}
        <div className="grid grid-cols-2 gap-8 w-full text-center">
          
          {/* Column 1 */}
          <div>
            <ul>
              <li><a href="#" className="hover:underline block mb-2">Load your cart</a></li>
              <li><a href="#" className="hover:underline block mb-2">Sign up as a merchant</a></li>
              <li><a href="#" className="hover:underline block mb-2">Special offers</a></li>
             
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul>
              <li><a href="#" className="hover:underline block mb-2">FAQ</a></li>
              <li><a href="#" className="hover:underline block mb-2">Delivery</a></li>
              <li><a href="#" className="hover:underline block mb-2">Category</a></li>
              <li><a href="#" className="hover:underline block mb-2">Bulk Buy</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 Macomart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
