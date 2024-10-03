/**
 * @module OrderComponents
 */

import React from 'react';

/**
 * Cart component displays the items added to the cart, categorized into hamburgers, extras, and drinks.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object} cart - The cart object containing hamburgers, extras, and drinks.
 * @param {Function} removeFromCart - Function to remove an item from the cart.
 * @returns {JSX.Element} The rendered cart component.
 */

const Cart = ({ cart, removeFromCart }) => {
  if (!cart || (!cart.burgers.length && !cart.extras.length && !cart.drinks.length)) {
    return <p>No items in the cart</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
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
                    {ingredient.name} - {ingredient.quantity}
                  </li>
                ))}
              </ul>
              <button onClick={() => removeFromCart(burger, 'burgers')}>Remove</button>
            </div>
          ))}
        </>
      )}

      {/* Render Extras */}
      {cart.extras.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Extras</h3>
          {cart.extras.map((extra, index) => (
            <div key={index} className="mb-2">
              <p>{extra.name} - {extra.quantity}</p>
              <button onClick={() => removeFromCart(extra, 'extras')}>Remove</button>
            </div>
          ))}
        </>
      )}

      {/* Render Drinks */}
      {cart.drinks.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Drinks</h3>
          {cart.drinks.map((drink, index) => (
            <div key={index} className="mb-2">
              <p>{drink.flavour} ({drink.size})</p>
              <button onClick={() => removeFromCart(drink, 'drinks')}>Remove</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
