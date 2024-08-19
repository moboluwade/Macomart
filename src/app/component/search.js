"use client"; // Ensure this component is run on the client side

import { useState } from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon } from './icons';


const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-sm">
      <div className="relative flex-grow">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full text-gray-800 rounded-l-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MicrophoneIcon />
      </div>
      <button
        type="submit"
        className="bg-yellow-400 text-white py-2 px-4 rounded-r-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
