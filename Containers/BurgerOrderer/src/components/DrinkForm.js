import React, { useState } from 'react';

const DrinkForm = ({ drinks, addDrink }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const handleDrinkChange = (e) => {
    const drink = drinks.find(d => d.id === parseInt(e.target.value));
    setSelectedDrink(drink);
    setSelectedSize(null); // Reset size selection when drink changes
  };

  const handleSizeChange = (e) => {
    const size = selectedDrink.sizes.find(s => s.size === e.target.value);
    setSelectedSize(size);
  };

  const handleAddDrink = () => {
    if (selectedDrink && selectedSize) {
      addDrink({ name: selectedDrink.name, size: selectedSize.size, price: selectedSize.price });
      setSelectedDrink(null);
      setSelectedSize(null);
    }
  };

  return (
    <div className='w-full p-10 bg-white rounded-lg shadow-md font-roboto space-y-4'>
      <h3 className="text-lg font-bold mb-4">Choose Your Drinks</h3>
      <select onChange={handleDrinkChange} value={selectedDrink?.id || ''} className='class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
        <option value="">Select Drink</option>
        {drinks.map(drink => (
          <option key={drink.id} value={drink.id}>{drink.name}</option>
        ))}
      </select>

      {selectedDrink && (
        <select onChange={handleSizeChange} value={selectedSize?.size || ''} className='class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
          <option value="">Select Size</option>
          {selectedDrink.sizes.map(size => (
            <option key={size.size} value={size.size}>
              {size.size} - {size.price}kr
            </option>
          ))}
        </select>
      )}

      <button onClick={handleAddDrink} disabled={!selectedSize} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600' >
        Add Drink to Cart
      </button>
    </div>
  );
};

export default DrinkForm;
