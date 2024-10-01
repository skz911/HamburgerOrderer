/**
 * @module OrderComponents
 */


import React from "react";

/**
 * OrderButton component renders a button that allows the user to place an order.
 * 
 * @component
 * @memberof module:OrderComponents
 * @returns {JSX.Element} The rendered button component for placing an order.
 */

const OrderButton = () => {
  return (
    <div className="text-center py-8">
      <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-200">
        ORDER NOW
      </button>
    </div>
  );
};

export default OrderButton;
