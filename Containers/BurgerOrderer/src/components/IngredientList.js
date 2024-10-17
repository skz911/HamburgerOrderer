/**
 * @module OrderComponents
 */

import React from 'react';
import IngredientItem from './IngredientItem';


/**
 * IngredientList component renders a list of ingredients, each with the ability to be added to or removed from the cart.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object[]} ingredients - Array of ingredient objects, each containing `id`, `name`, `price`, and `image`.
 * @param {Function} addIngredient - Function to add a specific ingredient to the cart.
 * @param {Function} removeIngredient - Function to remove a specific ingredient from the cart.
 * @param {Object[]} cart - The current cart items.
 * @returns {JSX.Element} The rendered list of ingredient items or a message if no ingredients are available.
 */

const IngredientList = ({ ingredients, addIngredient, removeIngredient, cart }) => {
  return (
    <div className="w-full px-10 pt-10 bg-white rounded-lg shadow-md font-roboto">
      <h3 className="text-lg font-bold mb-4">Build your Burger</h3>
      {ingredients.length > 0 ? (
        ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            name={ingredient.name}
            price={ingredient.price}
            addIngredient={() => addIngredient(ingredient)} 
            removeIngredient={() => removeIngredient(ingredient)} 
            cart={cart}  
          />
        ))
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  );
};


export default IngredientList;
