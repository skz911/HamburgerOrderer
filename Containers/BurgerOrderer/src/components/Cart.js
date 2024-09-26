import React from 'react';

const Cart = ({ cartItems, removeFromCart, submitOrder }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-1/3 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <span>{item.name}</span>
                <span>{item.quantity}x</span>
                <span>{item.price} kr</span>
                <button
                  onClick={() => removeFromCart(item)}
                  className="bg-red-500 text-white py-1 px-2 ml-4 rounded-lg"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-lg">
            Total: {totalPrice} kr
          </div>
          <button
            onClick={submitOrder}
            className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
          >
            Order Now
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
