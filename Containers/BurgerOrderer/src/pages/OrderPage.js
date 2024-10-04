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
import drinksData from '../data/drinksData';
import burgerIngredients from '../data/burgerIngredients';
import extraItems from '../data/extraItemData';
/**
 * Initial state for the useReducer hook, representing the ingredients, drinks, extras, and cart items.
 * @type {Object}
 */
const initialState = {
  cart: {
    burgers: [], 
    drinks: [],  
    extras: [],  
  },
};

/**
 * Reducer function to manage the state for ingredients, drinks, extras, and cart items.
 * 
 * @function reducer
 * @memberof module:OrderPage
 * @param {Object} state 
 * @param {Object} action 
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
 * @returns {JSX.Element} 
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

      <div className="container py-8 flex justify-center space-x-10 my-16 w-full">
        <div className="w-2/3 flex space-x-10">
        {currentSection === 'hamburger' && (
        <>
          <IngredientList
            ingredients={burgerIngredients.hamburger_ingredients}
            addIngredient={addIngredientToBurger}       
            removeIngredient={removeIngredientFromBurger}  
            cart={currentBurger}  
          />
          <button onClick={addBurgerToCart} className="bg-green-500 shadow-2xl text-white py-2 px-4 rounded hover:bg-green-600 transition-transform active:scale-[1.01] ">
            Add Burger to Cart
          </button>
        </>
      )}


          {currentSection === 'drinks' && (
            <DrinkForm drinks={drinksData[0].drinks} addDrink={addDrinkToCart} />
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