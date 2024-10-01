/**
 * @module OrderComponents
 */

import React from 'react';

/**
 * OrderNav component provides navigation buttons to switch between sections of the order page.
 * Each button calls `setCurrentSection` to change the displayed section.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Function} setCurrentSection - A function that sets the current section to be displayed on the order page.
 * @returns {JSX.Element} The rendered navigation component with buttons for each section.
 */

const OrderNav = ({ setCurrentSection }) => {
  return (
    <nav className="flex justify-center space-x-8 bg-gray-100 p-4 shadow-md font-roboto">
      <button 
        onClick={() => setCurrentSection('hamburger')} 
        className="text-gray-800 font-bold hover:text-yellow-500"
      >
        Hamburger
      </button>
      <button 
        onClick={() => setCurrentSection('extras')} 
        className="text-gray-800 font-bold hover:text-yellow-500"
      >
        Extra
      </button>
      <button 
        onClick={() => setCurrentSection('drinks')} 
        className="text-gray-800 font-bold hover:text-yellow-500"
      >
        Drinks
      </button>
      <button 
        onClick={() => setCurrentSection('checkout')} 
        className="text-gray-800 font-bold hover:text-yellow-500"
      >
        Checkout
      </button>
    </nav>
  );
};

export default OrderNav;
