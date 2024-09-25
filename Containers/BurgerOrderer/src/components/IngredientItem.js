import React, { useState } from 'react';

const IngredientItem = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 0 && setQuantity(quantity - 1);

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-10 h-10 bg-yellow-400" />
        <div className="ml-4">
          <p className="text-gray-800">{name}</p>
          <p className="text-gray-600 text-sm">{price}kr</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={decreaseQuantity} className="text-red-500 text-xl">-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity} className="text-green-500 text-xl">+</button>
      </div>
    </div>
  );
};

export default IngredientItem;
