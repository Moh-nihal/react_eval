/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useState } from "react";
import Toastify from "toastify-js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        Toastify({
          text: "Increased quantity!",
          backgroundColor: "green",
        }).showToast();
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        Toastify({
          text: "Added to cart!",
          backgroundColor: "green",
        }).showToast();
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      Toastify({
        text: "Removed from cart!",
        backgroundColor: "red",
      }).showToast();
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
