/**
 * @module OrderPage
 * 
 */

import React, { useReducer, useState, useEffect } from 'react';
import OrderNav from '../components/OrderNav';
import IngredientList from '../components/IngredientList';
import Cart from '../components/Cart';
import DrinkForm from '../components/DrinkForm';
import ExtraList from '../components/ExtraList';

/**
 * Initial state for the useReducer hook, representing the ingredients, drinks, extras, and cart items.
 * @type {Object}
 */
const initialState = {
  cart: {
    burgers: [], // Array for burger orders
    drinks: [],  // Array for drinks
    extras: [],  // Array for extra items
  },
};

const burgerIngredients = {
  hamburger_ingredients: [
    {
      id: 1,
      name: "Lettuce",
      type: "vegetable",
      price: 5,
      image: "/path-to-lettuce-image",
    },
    {
      id: 2,
      name: "Tomato",
      type: "vegetable",
      price: 7,
      image: "/path-to-tomato-image",
    },
    {
      id: 3,
      name: "Cheese",
      type: "dairy",
      price: 10,
      image: "/path-to-cheese-image",
    },
    {
      id: 4,
      name: "Beef Patty",
      type: "meat",
      price: 15,
      image: "/path-to-beefpatty-image",
    },
    {
      id: 5,
      name: "Bacon",
      type: "meat",
      price: 12,
      image: "/path-to-bacon-image",
    },
    {
      id: 6,
      name: "Onion",
      type: "vegetable",
      price: 4,
      image: "/path-to-onion-image",
    },
    {
      id: 7,
      name: "Pickles",
      type: "vegetable",
      price: 3,
      image: "/path-to-pickles-image",
    },
    {
      id: 8,
      name: "Ketchup",
      type: "condiment",
      price: 2,
      image: "/path-to-ketchup-image",
    },
    {
      id: 9,
      name: "Mustard",
      type: "condiment",
      price: 2,
      image: "/path-to-mustard-image",
    },
    {
      id: 10,
      name: "Mayonnaise",
      type: "condiment",
      price: 3,
      image: "/path-to-mayonnaise-image",
    },
  ],
};

const extraItems = {
  extra_items: [
    {
      id: 1,
      name: "Fries",
      type: "side",
      price: 10,
      image: "/path-to-fries-image",
    },
    {
      id: 2,
      name: "Onion Rings",
      type: "side",
      price: 12,
      image: "/path-to-onion-rings-image",
    },
    {
      id: 3,
      name: "Mozzarella Sticks",
      type: "side",
      price: 15,
      image: "/path-to-mozzarella-sticks-image",
    },
    {
      id: 4,
      name: "BBQ Sauce",
      type: "sauce",
      price: 3,
      image: "/path-to-bbq-sauce-image",
    },
    {
      id: 5,
      name: "Ketchup",
      type: "sauce",
      price: 2,
      image: "/path-to-ketchup-image",
    },
    {
      id: 6,
      name: "Mayonnaise",
      type: "sauce",
      price: 3,
      image: "/path-to-mayonnaise-image",
    },
    {
      id: 7,
      name: "Garlic Dip",
      type: "sauce",
      price: 4,
      image: "/path-to-garlic-dip-image",
    },
    {
      id: 8,
      name: "Cheese Dip",
      type: "sauce",
      price: 5,
      image: "/path-to-cheese-dip-image",
    },
  ],
};


/**
 * Reducer function to manage the state for ingredients, drinks, extras, and cart items.
 * 
 * @function reducer
 * @memberof module:OrderPage
 * @param {Object} state - The current state of the order.
 * @param {Object} action - The action to perform.
 * @returns {Object} - The updated state.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BURGER':
      return { 
        ...state, 
        cart: { 
          ...state.cart, 
          burgers: [...state.cart.burgers, action.payload] 
        } 
      };

    case 'ADD_DRINK':
      return { 
        ...state, 
        cart: { 
          ...state.cart, 
          drinks: [...state.cart.drinks, action.payload] 
        } 
      };

    case 'ADD_EXTRA':
      return { 
        ...state, 
        cart: { 
          ...state.cart, 
          extras: [...state.cart.extras, action.payload] 
        } 
      };

      case 'REMOVE_ITEM': {
        const { item, type } = action.payload;
        return {
          ...state,
          cart: {
            ...state.cart,
            [type]: state.cart[type].filter(cartItem => cartItem !== item),
          },
        };
      }

    default:
      return state;
  }
};

/**
 * OrderPage component allows users to add ingredients, drinks, and extras to their order.
 * It manages the state of available items and the user's cart using the useReducer hook.
 * 
 * @component
 * @exports OrderPage
 * @memberof module:OrderPage
 * @returns {JSX.Element} The rendered order page with navigation, ingredient list, and cart.
 */

const OrderPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentBurger, setCurrentBurger] = useState([]);
  const [currentSection, setCurrentSection] = useState('hamburger');

  const addIngredientToBurger = (ingredient) => {
    const existingIngredient = currentBurger.find(item => item.id === ingredient.id);
  
    if (existingIngredient) {
      setCurrentBurger(currentBurger.map(item =>
        item.id === ingredient.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCurrentBurger([...currentBurger, { ...ingredient, quantity: 1 }]);
    }
  };

  const removeIngredientFromBurger = (ingredient) => {
    const existingIngredient = currentBurger.find(item => item.id === ingredient.id);
  
    if (existingIngredient && existingIngredient.quantity > 1) {
      setCurrentBurger(currentBurger.map(item =>
        item.id === ingredient.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCurrentBurger(currentBurger.filter(item => item.id !== ingredient.id));
    }
  };

  const addBurgerToCart = () => {
    if (currentBurger.length > 0) {
      setCurrentBurger((prevBurger) => {
        dispatch({ type: 'ADD_BURGER', payload: prevBurger });
        console.log(state.cart);
        return []; 
      });
    }
  };
  

  const addDrinkToCart = (drink) => {
    dispatch({ type: 'ADD_DRINK', payload: drink });
  };

  const addExtraToCart = (extra) => {
    dispatch({ type: 'ADD_EXTRA', payload: extra });
  };

  const removeItem = (item, type) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { item, type } });
  };
  
  

  return (
    <div className="relative min-h-screen bg-gray-50">
      <OrderNav setCurrentSection={setCurrentSection} /> 

      <div className="container py-8 flex justify-center space-x-10 w-full">
        <div className="w-2/3 flex">
        {currentSection === 'hamburger' && (
        <>
          <IngredientList
            ingredients={burgerIngredients.hamburger_ingredients}
            addIngredient={addIngredientToBurger}       
            removeIngredient={removeIngredientFromBurger}  
            cart={currentBurger}  
          />
          <button onClick={addBurgerToCart} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Add Burger to Cart
          </button>
        </>
      )}


          {currentSection === 'drinks' && (
            <DrinkForm addDrink={addDrinkToCart} />
          )}

          {currentSection === 'extras' && (
            <ExtraList extras={extraItems.extra_items} addExtra={addExtraToCart} />
          )}

           {currentSection === 'checkout' && (
            <Cart 
              cart={state.cart} 
              removeFromCart={removeItem} 
            />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default OrderPage;