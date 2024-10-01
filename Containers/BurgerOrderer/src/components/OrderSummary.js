/**
 * @module OrderComponents
 */

import React from 'react';

/**
 * OrderSummary component displays a summary of the user's order, including the items in the cart and total price.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object[]} cart - The current cart items.
 * @returns {JSX.Element} The rendered summary of the order.
 */

const OrderSummary = () => {
  return (
    <div className="w-full h-64 bg-gray-200 mb-6 flex items-center justify-center">
      <p className="text-gray-700">Preview of your burger goes here</p>
    </div>
  );
};

export default OrderSummary;
