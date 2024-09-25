import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = () => {
  const ingredients = [
    { name: 'Cheese', price: 10, image: '/path-to-cheese-image' },
    { name: 'Lettuce', price: 5, image: '/path-to-lettuce-image' },
    { name: 'Tomato', price: 8, image: '/path-to-tomato-image' },
    // Add more ingredients as needed
  ];

  return (
    <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index} name={ingredient.name} price={ingredient.price} image={ingredient.image} />
      ))}
    </div>
  );
};

export default IngredientList;
