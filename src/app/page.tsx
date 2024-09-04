// app/products/page.tsx

"use client";

import product from '@/pages/db/products'; // Adjust the path if necessary
import Image from 'next/image';
import { useState } from 'react';
import BillBoard from '../../public/billboard.png'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

// Define the type for the product data
type Product = {
  product_id: number;
  product_name: string;
  vendor_name: string;
  price: number;
  quantity_available: number;
  category: string;
  description: string;
  rating: number;
  shipping_cost: number;
  shipping_time: number;
  discount_percentage: number;
  sale_price: number;
  Thumbnail: string;
  images: { url: string; alt: string }[];
};

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(product.length / productsPerPage);

  // Slice the array to get the products for the current page
  const paginatedProducts = product.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">

<div className="w-full mx-3 my-5">
      <Image
        src={BillBoard}
        alt="promotion"
        layout="responsive"
        width={1200} // Set the actual width of the image
        height={800} // Set the actual height of the image
        className="object-cover" // Adjusts the image to cover the entire container
      />
    </div>

        <div className="flex flex-col lg:flex-row lg:space-x-4  lg:space-between">
      <button className="p-4   flex items-center justify-center hover:text-primary w-full lg:w-auto">
        <h1 className="text-xl lg:text-2xl font-bold">Products</h1>
      </button>

      <button className="p-4   flex items-center justify-center hover:text-primary w-full lg:w-auto">
        <h1 className="text-xl lg:text-2xl font-bold">Recommended for you</h1>
      </button>
    </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product: Product) => (
          <div key={product.product_id} className="border p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <Image
                src={product.Thumbnail}
                alt={product.product_name}
                width={200}
                height={200}
                className="object-cover"igma
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.product_name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.vendor_name}</p>
            <p className="text-xl font-bold mb-2">${product.sale_price.toFixed(2)}</p>
            {/* <p className="text-gray-500 mb-2">{product.description}</p> */}
            {/* <div className="flex items-center mb-2">
              <span className="text-yellow-500">Rating: {product.rating}★</span>
            </div> */}
          </div>
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
                {/* <FaArrowLeft /> */}
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
                {/* <FaArrowRight /> */}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductsPage;
