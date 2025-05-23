import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#303841] text-white shadow-md fixed w-full z-100 py-1">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-mono">
          Moviescope
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Movies
          </Link>
          <Link
            to="/favourites"
            className="px-4 py-2 rounded hover:bg-yellow-500 text-gray-900 font-semibold bg-yellow-400 transition duration-200"
          >
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
