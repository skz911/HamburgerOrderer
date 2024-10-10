/**
 * @module OrderComponents
 */

import React, { useState } from 'react';

/**
 * Cart component displays the items added to the cart, categorized into hamburgers, extras, and drinks.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object} cart - The cart object containing hamburgers, extras, and drinks.
 * @param {Function} removeFromCart - Function to remove an item from the cart.
 * @param {Function} setCart - Function to reset the cart state.
 * @returns {JSX.Element} The rendered cart component.
 */

const Cart = ({ cart, removeFromCart,removeOneExtra, setCart }) => {
  if (!cart || (!cart.burgers.length && !cart.extras.length && !cart.drinks.length)) {
    return (
      <div className='p-4 bg-white rounded-lg shadow-md w-full'>
        <p>No items in the cart</p>
      </div>
    );
  }

  // Function to calculate total price for a single burger
  const calculateBurgerCost = (burger) => {
    return burger.reduce((total, ingredient) => {
      return total + ingredient.price * ingredient.quantity;
    }, 0);
  };

  // Function to calculate total price for extras
  const calculateExtrasCost = () => {
    return cart.extras.reduce((total, extra) => {
      return total + extra.price * (extra.quantity || 1);
    }, 0);
  };

  // Function to calculate total price for drinks
  const calculateDrinksCost = () => {
    return cart.drinks.reduce((total, drink) => {
      return total + drink.price * (drink.quantity || 1);
    }, 0);
  };

  // Function to calculate total cost of the entire order
  const calculateTotalOrderCost = () => {
    const burgersCost = cart.burgers.reduce((total, burger) => total + calculateBurgerCost(burger), 0);
    const extrasCost = calculateExtrasCost();
    const drinksCost = calculateDrinksCost();
    return burgersCost + extrasCost + drinksCost;
  };

  // Function to handle checkout button click
  const handleCheckout = async () => {
    const orderData = {
      burgers: cart.burgers,
      extras: cart.extras,
      drinks: cart.drinks,
      totalCost: calculateTotalOrderCost(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        setCart({ type: 'RESET_CART' });
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-md w-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.burgers.length > 0 && (
        <>
          <h2 className="text-lg font-semibold">Hamburgers:</h2>
          {cart.burgers.map((burger, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-semibold">Hamburger {index + 1}</h4>
              <ul className="ml-4">
                {burger.map((ingredient, idx) => (
                  <li key={idx}>
                    {ingredient.name} - {ingredient.quantity} x {ingredient.price}kr
                  </li>
                ))}
              </ul>
              <p>Total cost for this burger: {calculateBurgerCost(burger)}kr</p>
              <button onClick={() => removeFromCart(burger, 'burgers')} className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600">Remove</button>
            </div>
          ))}
        </>
      )}

{cart.extras.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Extras</h3>
          {cart.extras.map((extra, index) => (
            <div key={index} className="mb-2">
              <p>{extra.name} - {extra.quantity}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => removeOneExtra(extra)}
                  className="mt-2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Remove one
                </button>
                <button
                  onClick={() => removeFromCart(extra, 'extras')}
                  className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove all
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {cart.drinks.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Drinks</h3>
          {cart.drinks.map((drink, index) => (
            <div key={index} className="mb-2">
              <p>{drink.name} ({drink.size}) {drink.price}kr</p>
              <button onClick={() => removeFromCart(drink, 'drinks')} className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600">Remove</button>
            </div>
          ))}
        </>
      )}

      <h3 className="mt-4 font-bold">Total Order Cost: {calculateTotalOrderCost()}kr</h3>

      <button
        onClick={handleCheckout}
        className="mt-6 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;