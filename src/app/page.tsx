// src/pages/buyer/product/index.js
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BillBoard from '../../public/billboard.png';
import product from '@/pages/db/products'; 
import "@/styles/globals.css";
import RootLayout from './layout';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; 

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const totalPages = Math.ceil(product.length / productsPerPage);

  const paginatedProducts = product.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (

      <div className="container mx-auto p-4">
        <div className="w-full mx-3 my-5">
          <Image
            src={BillBoard}
            alt="promotion"
            layout="responsive"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-between">
          <button className="p-4 flex items-center justify-center hover:text-primary w-full lg:w-auto">
            <h1 className="text-xl lg:text-2xl font-bold">Products</h1>
          </button>
          <button className="p-4 flex items-center justify-center hover:text-primary w-full lg:w-auto">
            <h1 className="text-xl lg:text-2xl font-bold">Recommended for you</h1>
          </button>
        </div>


            {/* PRDUCT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedProducts.map((product) => (
            <Link key={product.product_id} href={`/buyer/product/${product.product_id}`} passHref>
              <div className="border p-4 rounded-lg shadow-lg block lg:w-80 lg:h-96 sm:w-60 sm:h-80">
  <div className="w-full h-48 overflow-hidden mb-4 relative">
    <Image
      src={product.Thumbnail}
      alt={product.product_name}
      layout="fill"
      objectFit="cover"
      className="absolute inset-0"
    />
  </div>
  <h2 className="text-lg font-semibold mb-2 truncate">{product.product_name}</h2>
  <div className="flex items-center justify-between mb-2">
    <p className="text-sm text-gray-600 truncate">{product.vendor_name}</p>
    <p className="text-xl font-bold">${product.sale_price.toFixed(2)}</p>
  </div>
  <div className="flex items-center mb-2">
    <span className="text-yellow-500">Rating: {product.rating}★</span>
  </div>
  <div className="flex justify-between mt-auto">
    <button
      className="bg-gray2 text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition"
      onClick={() => console.log('Added to Cart')}
    >
      Add to Cart
    </button>
    <button
      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-red transition"
      onClick={() => console.log('Buy Now')}
    >
      Buy Now
    </button>
  </div>
</div>

            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex items-center space-x-2">
              <li>
                <button
                  className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-blue-500'}`}
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              </li>
              <li>
                <span className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
              </li>
              <li>
                <button
                  className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-white text-blue-500'}`}
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
   
  );
};

export default ProductsPage;
