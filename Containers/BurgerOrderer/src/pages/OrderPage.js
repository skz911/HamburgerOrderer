import React, { useReducer, useState, useEffect } from 'react';
import OrderNav from '../components/OrderNav';
import IngredientList from '../components/IngredientList';
import Cart from '../components/Cart';
/* this page is pretty complicated  

  it starts by initializing the state, a cart array, and then arrays for ingredients, drinks and extra items

  It then has a reducer that is a react hook that handles complex state logic. you could use useState for the same thing
  but using a reducer allows for better state management. I also used a reducer to learn more about how it works.

  it has setting actions that sets the ingredients taken from the fake api calls that i fetch from the assets/fakeJson directory

  it then has add item and remove item that checks the item names form the ingredient arrays in the state and compares it to
  the items in the cart and adds or removes "quantity" form the cart.

  you can use the Reducer by using the command "dispatch ( type: command, payload: data ) "

*/
const initialState = {
  ingredients: [],
  drinks: [],
  extras: [],
  cart: [],
};

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

const OrderPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentSection, setCurrentSection] = useState('hamburger');

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

  const addItem = (item) => {
    console.log(item)
    dispatch({ type: 'ADD_ITEM', payload: item });  // Add specific ingredient to cart
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });  // Remove specific ingredient from cart
  };

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
