/**
 * @module OrderComponents
 */

import React from 'react';


/**
 * IngredientItem component displays an individual ingredient with its name, price, image, and quantity in the cart.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {string} name - The name of the ingredient.
 * @param {number} price - The price of the ingredient.
 * @param {string} image - The URL of the ingredient's image.
 * @param {Function} addIngredient - Function to add the ingredient to the cart.
 * @param {Function} removeIngredient - Function to remove the ingredient from the cart.
 * @param {Object[]} cart - The current cart items.
 * @returns {JSX.Element} The rendered ingredient item component.
 */

const IngredientItem = ({ name, price, image, addIngredient, removeIngredient, cart }) => {
  const itemInCart = cart.find(item => item.name === name);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-10 text-xs h-10 bg-yellow-400" />
        <div className="ml-4">
          <p className="text-gray-800 text-xl">{name}</p>
          <p className="text-gray-600 text-sm">{price}kr</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={removeIngredient} className="text-red-500 text-3xl">-</button>
        <span>{quantity}</span>
        <button onClick={addIngredient} className="text-green-500 text-3xl">+</button>
      </div>
    </div>
  );
};

export default IngredientItem;
