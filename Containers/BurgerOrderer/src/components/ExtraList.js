// src/components/ExtraList.js
import React from 'react';

/**
 * IngredientList component renders a list of ingredients, each with the ability to be added to or removed from the cart.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object[]} extras - Array of extra item objects, each containing `id`, `name`, `price`.
 * @param {Function} addExtra - Function to add a specific extra item to the cart.
 * @returns {JSX.Element} The rendered list of extra items.
 */

const ExtraList = ({ extras, addExtra }) => {
    return (
    <div className="p-10 h-full w-full bg-white rounded-lg shadow-md transition-transform">
      <h3 className="text-lg font-bold mb-4">Choose Extras</h3>
      <ul>
        {extras.map((extra, index) => (
          <li key={index} className="mb-4 flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-semibold">{extra.name}</p>
              {extra.options && extra.options.length > 0 && (
                <select
                  onChange={(e) =>
                    addExtra({ name: extra.name, id: extra.id, price: extra.price, option: e.target.value })
                  }
                  className="mt-2 border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Option</option>
                  {extra.options.map((option, optIndex) => (
                    <option key={optIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
            {!extra.options && (
              <button
                onClick={() => addExtra({ name: extra.name, id: extra.id, price: extra.price })}
                className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
              >
                Add
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExtraList;