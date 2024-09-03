/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    window
                      .Toastify({
                        text: "Removed from cart!",
                        duration: 3000,
                        backgroundColor: "red",
                      })
                      .showToast();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-lg">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
