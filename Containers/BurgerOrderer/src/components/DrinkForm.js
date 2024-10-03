// src/components/DrinkForm.js
import React, { useState } from 'react';

const DrinkForm = ({ addDrink }) => {
  const [flavour, setFlavour] = useState('');
  const [size, setSize] = useState('');

  const handleAddDrink = () => {
    if (flavour && size) {
      addDrink({ flavour, size });
      setFlavour('');
      setSize('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Choose a Drink</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Flavour</label>
        <input
          type="text"
          value={flavour}
          onChange={(e) => setFlavour(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Size</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="">Select Size</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
      <button
        onClick={handleAddDrink}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Add Drink
      </button>
    </div>
  );
};

export default DrinkForm;
