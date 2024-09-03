/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/productService";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-800 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">Rating: {product.rating}</p>
          <button
            onClick={() => {
              addToCart(product);
              window
                .Toastify({
                  text: "Added to cart!",
                  duration: 3000,
                  backgroundColor: "green",
                })
                .showToast();
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
