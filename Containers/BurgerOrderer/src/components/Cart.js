/**
 * @module OrderComponents
 */

import React from 'react';

/**
 * Cart component displays the items added to the cart, categorized into hamburgers, extras, and drinks.
 * 
 * @component
 * @memberof module:OrderComponents
 * @param {Object} cart - The cart object containing hamburgers, extras, and drinks.
 * @param {Function} removeFromCart - Function to remove an item from the cart.
 * @returns {JSX.Element} The rendered cart component.
 */

const Cart = ({ cart, removeFromCart }) => {
  if (!cart || (!cart.burgers.length && !cart.extras.length && !cart.drinks.length)) {
    return <p>No items in the cart</p>;
  }

  // Function to calculate total price for a single burger
  const calculateBurgerCost = (burger) => {
    return burger.reduce((total, ingredient) => {
      return total + ingredient.price * ingredient.quantity;
    }, 0);
  };

   // Function to calculate total price for extras
   const calculateExtrasCost = () => {
    return cart.extras.reduce((total, extra) => {
      return total + extra.price * (extra.quantity || 1);  // assuming quantity defaults to 1 if not present
    }, 0);
  };

  // Function to calculate total price for drinks
  const calculateDrinksCost = () => {
    return cart.drinks.reduce((total, drink) => {
      return total + drink.price * (drink.quantity || 1);  // assuming quantity defaults to 1 if not present
    }, 0);
  };

  // Function to calculate total cost of the entire order
  const calculateTotalOrderCost = () => {
    const burgersCost = cart.burgers.reduce((total, burger) => total + calculateBurgerCost(burger), 0);
    const extrasCost = calculateExtrasCost();
    const drinksCost = calculateDrinksCost();
    return burgersCost + extrasCost + drinksCost;
  };




  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      
      {cart.burgers.length > 0 && (
        <>
          <h2 className="text-lg font-semibold">Hamburgers:</h2>
          {cart.burgers.map((burger, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-semibold">Hamburger {index + 1}</h4>
              <ul className="ml-4">
                {burger.map((ingredient, idx) => (
                  <li key={idx}>
                    {ingredient.name} - {ingredient.quantity} x {ingredient.price}kr  
                  </li>
                ))}
              </ul>
              <p>Total cost for this burger: {calculateBurgerCost(burger)}kr</p>

              <button onClick={() => removeFromCart(burger, 'burgers')}>Remove</button>
            </div>
          ))}
        </>
      )}

      {/* Render Extras */}
      {cart.extras.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Extras</h3>
          {cart.extras.map((extra, index) => (
            <div key={index} className="mb-2">
              <p>{extra.name} - {extra.quantity}</p>
              <button onClick={() => removeFromCart(extra, 'extras')}>Remove</button>
            </div>
          ))}
        </>
      )}

      {/* Render Drinks */}
      {cart.drinks.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Drinks</h3>
          {cart.drinks.map((drink, index) => (
            <div key={index} className="mb-2">
              <p>{drink.name} ({drink.size}) {drink.price}kr </p>
              <button onClick={() => removeFromCart(drink, 'drinks')}>Remove</button>
            </div>
          ))}
        </>
      )}
       <h3 className="mt-4 font-bold">Total Order Cost: {calculateTotalOrderCost()}kr</h3>
    </div>
  );
};

export default Cart;
