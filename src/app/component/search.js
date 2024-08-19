"use client"; // Ensure this component is run on the client side

import { useState } from 'react';
import { MagnifyingGlassIcon  } from './icons';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

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
        {/* Magnifying Glass Icon on the Left */}
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        
        {/* Input Field */}
        <input
          type="text"
          className="pl-10 pr-14 py-2 w-full text-white rounded-full bg-offwhite border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {/* Microphone Icon on the Right */}
        <MicrophoneIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      
      {/* Search Button */}
      <button
        type="submit"
        className="bg-yellow-400 text-white py-2 px-4 rounded-full ml-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
