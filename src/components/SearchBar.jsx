/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 w-full"
    />
  );
};

export default SearchBar;
