import React from 'react';

/* setCurrentSection changes which section is shown in the order-page, since we created a state in the OrderPage called currentSection 
i have sent in the setState called setCurrentSection */


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
