"use client"; // Ensure this component is run on the client side

import { useState } from 'react';
import Search from './Search'; // Your Search component
import products from '../../db/products'; // Adjust the path to your product data

const ProductList = () => {
  const [searchResults, setSearchResults] = useState(products); // Initialize with all products

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults(products); // Reset to all products if query is empty
      return;
    }

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredProducts);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Search onSearch={handleSearch} />
      <ul className="mt-4">
        {searchResults.map(product => (
          <li key={product.id} className="py-2">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
