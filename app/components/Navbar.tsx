// components/Navbar.js
'use client'
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-10">
      <div className="flex justify-between items-center">
        {/* Left side: Search bar */}
        <div className="flex-grow max-w-[50%] mx-auto">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-md text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Center: Options list */}
        <div className="hidden sm:flex space-x-6 text-white">
          <a href="#" className="hover:text-gray-400">new& feature</a>
          <a href="#" className="hover:text-gray-400">kids</a>
          <a href="#" className="hover:text-gray-400">men</a>
          <a href="#" className="hover:text-gray-400">women</a>
        </div>

        {/* Right side: Icon (e.g., user or notifications) */}
        <div className="text-white">
          <button className="p-2 rounded-full hover:bg-gray-700">
            <span role="img" aria-label="user-icon">👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
