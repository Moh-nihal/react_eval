/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

const AppRoutes = ({ searchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<ProductList searchQuery={searchQuery} />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
