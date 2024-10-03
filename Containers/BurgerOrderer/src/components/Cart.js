/**
 * @module OrderComponents
 */

import React from 'react';

/**
 * Cart component displays the items added to the cart, allows users to remove items, and provides an option to submit the order.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object[]} cartItems - List of items currently in the cart.
 * @param {Function} removeFromCart - Function to remove an item from the cart.
 * @param {Function} submitOrder - Function to submit the order.
 * @returns {JSX.Element} The rendered cart component.
 */

const Cart = ({ cartItems, removeFromCart }) => {
  if (!Array.isArray(cartItems)) {
    return <p>No items in the cart</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>{item.name} - {item.quantity}</p>
            <button onClick={() => removeFromCart(item, 'burgers')}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Cart;
