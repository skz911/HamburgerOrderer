import React, { useState } from 'react';

/**
 * IngredientList component renders a list of ingredients, each with the ability to be added to or removed from the cart.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object[]} drinks - Array of drink objects, each containing `id`, `name`, `price`.
 * @param {Function} addDrink - Function to add a specific drink to the cart.
 * @returns {JSX.Element} The rendered form for adding drinkItems.
 */


const DrinkForm = ({ drinks, addDrink }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const handleDrinkChange = (e) => {
    const drink = drinks.find(d => d.id === parseInt(e.target.value));
    setSelectedDrink(drink);
  };


  const handleAddDrink = () => {
    if (selectedDrink) {
      addDrink({ id: selectedDrink.id, name: selectedDrink.name, price: selectedDrink.price });
      setSelectedDrink(null);
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

      <button onClick={handleAddDrink} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600' >
        Add Drink to Cart
      </button>
    </div>
  );
};

export default DrinkForm;
