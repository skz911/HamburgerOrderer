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
    <div>
      <h3>Select a Drink</h3>
      <select onChange={handleDrinkChange} value={selectedDrink?.id || ''}>
        <option value="">Select Drink</option>
        {drinks.map(drink => (
          <option key={drink.id} value={drink.id}>{drink.name}</option>
        ))}
      </select>

      {selectedDrink && (
        <select onChange={handleSizeChange} value={selectedSize?.size || ''}>
          <option value="">Select Size</option>
          {selectedDrink.sizes.map(size => (
            <option key={size.size} value={size.size}>
              {size.size} - {size.price}kr
            </option>
          ))}
        </select>
      )}

      <button onClick={handleAddDrink} disabled={!selectedSize}>
        Add Drink to Cart
      </button>
    </div>
  );
};

export default DrinkForm;
