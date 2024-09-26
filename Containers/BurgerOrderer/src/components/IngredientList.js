import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({ ingredients, addIngredient, removeIngredient, cart }) => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md font-roboto">
      {ingredients.length > 0 ? (
        ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            name={ingredient.name}
            price={ingredient.price}
            image={ingredient.image}
            addIngredient={() => addIngredient(ingredient)} //adds specified ingredient to cart
            removeIngredient={() => removeIngredient(ingredient)} //removes specified ingredient from crat
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
