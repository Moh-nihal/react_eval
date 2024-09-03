/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvphAjKhFriLlRZ-1bnTGwazG9hfVpj_NxGjbX-bheaFdjdjGpAN0D&usqp=CAE&s"
            className="h-10 w-10"
            alt=""
          />
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="px-4 py-2 rounded-md focus:outline-none"
          />
          <Link to="/cart" className="text-white text-lg">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
