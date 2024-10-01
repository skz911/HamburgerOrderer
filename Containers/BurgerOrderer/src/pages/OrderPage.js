/**
 * @module OrderPage
 * 
 */

import React, { useReducer, useState, useEffect } from 'react';
import OrderNav from '../components/OrderNav';
import IngredientList from '../components/IngredientList';
import Cart from '../components/Cart';


/**
 * Initial state for the useReducer hook, representing the ingredients, drinks, extras, and cart items.
 * @type {Object}
 */
const initialState = {
  ingredients: [],
  drinks: [],
  extras: [],
  cart: [],
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
    case 'SET_INGREDIENTS':
      return { ...state, ingredients: action.payload };
    case 'SET_DRINKS':
      return { ...state, drinks: action.payload };
    case 'SET_EXTRAS':
      return { ...state, extras: action.payload };
    case 'ADD_ITEM': {
      const itemExists = state.cart.find(item => item.name === action.payload.name);
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case 'REMOVE_ITEM': {
      const itemExists = state.cart.find(item => item.name === action.payload.name);
      if (itemExists && itemExists.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.name !== action.payload.name),
        };
      }
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


   /**
   * Fetches ingredients, drinks, and extras from local JSON files and dispatches them to the state.
   * Uses useEffect to fetch data once on component mount.
   */
  useEffect(() => {
    const fetchHamburgerIngredients = async () => {
      const response = await fetch('/assets/fakeJson/burgeringredients.json');
      const data = await response.json();
      dispatch({ type: 'SET_INGREDIENTS', payload: data.hamburger_ingredients });
    };

    const fetchDrinks = async () => {
      const response = await fetch('/assets/fakeJson/drinks.json');
      const data = await response.json();
      dispatch({ type: 'SET_DRINKS', payload: data.drinks });
    };

    const fetchExtras = async () => {
      const response = await fetch('/assets/fakeJson/extra.json');
      const data = await response.json();
      dispatch({ type: 'SET_EXTRAS', payload: data.extra_items });
    };

    fetchHamburgerIngredients();
    fetchDrinks();
    fetchExtras();
  }, []);

  /**
   * Adds an item (ingredient, drink, or extra) to the cart.
   * @function addItem
   * @memberof module:OrderPage
   * @param {Object} item - The item to be added to the cart.
   */
  const addItem = (item) => {
    console.log(item)
    dispatch({ type: 'ADD_ITEM', payload: item });  
  };

  /**
   * Removes an item (ingredient, drink, or extra) to the cart.
   * @function removeItem
   * @memberof module:OrderPage
   * @param {Object} item - The item to be removed from the cart.
   */
  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item }); 
  };

  const [currentSection, setCurrentSection] = useState('hamburger');
   /**
   * `currentSection` determines which section (hamburger, drinks, or extras) is currently visible to the user.
   * This is controlled by the `OrderNav` component, which updates the state through `setCurrentSection`.
   * 
   * Possible values:
   * - 'hamburger': Displays the hamburger ingredients section.
   * - 'drinks': Displays the drinks section.
   * - 'extras': Displays the extras section.
   */
  return (
    <div className="relative min-h-screen bg-gray-50 ">
      <OrderNav setCurrentSection={setCurrentSection} />

      <div className="container mx-auto py-8 flex justify-between space-x-10">
        <div className="w-2/3">
          {currentSection === 'hamburger' && (
            <IngredientList
              ingredients={state.ingredients}
              addIngredient={addItem}
              removeIngredient={removeItem}
              cart={state.cart}
            />
          )}
          {currentSection === 'extras' && (
            <IngredientList
              ingredients={state.extras}
              addIngredient={addItem}
              removeIngredient={removeItem}
              cart={state.cart}
            />
          )}
          {currentSection === 'drinks' && (
            <IngredientList
              ingredients={state.drinks}
              addIngredient={addItem}
              removeIngredient={removeItem}
              cart={state.cart}
            />
          )}
        </div>

        <Cart cartItems={state.cart} removeFromCart={removeItem} />
      </div>
    </div>
  );
};

export default OrderPage;
