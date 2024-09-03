/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/ProductList.jsx

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/productService";
import { CartContext } from "../context/CartContext";

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 flex flex-col items-center justify-between rounded-lg shadow-lg"
          >
            <Link to={`/products/${product.id}`} className="text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
