import React, { useReducer, useState, useEffect } from "react";
import OrderNav from "../components/OrderNav";
import IngredientList from "../components/IngredientList";
import Cart from "../components/Cart";
import DrinkForm from "../components/DrinkForm";
import ExtraList from "../components/ExtraList";
import drinksData from "../data/drinksData";
import burgerIngredients from "../data/burgerIngredients";
import extraItems from "../data/extraItemData";

const initialState = {
  cart: {
    burgers: [],
    drinks: [],
    extras: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BURGER":
      return {
        ...state,
        cart: {
          ...state.cart,
          burgers: [...state.cart.burgers, action.payload],
        },
      };

    case "ADD_DRINK":
      return {
        ...state,
        cart: {
          ...state.cart,
          drinks: [...state.cart.drinks, action.payload],
        },
      };

      case "ADD_EXTRA": {
        const existingExtra = state.cart.extras.find((item) => item.id === action.payload.id);
        if (existingExtra) {
          return {
            ...state,
            cart: {
              ...state.cart,
              extras: state.cart.extras.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            },
          };
        } else {
          return {
            ...state,
            cart: {
              ...state.cart,
              extras: [...state.cart.extras, { ...action.payload, quantity: 1 }],
            },
          };
        }
      }

    case "REMOVE_ITEM": {
      const { item, type } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [type]: state.cart[type].filter((cartItem) => cartItem !== item),
        },
      };
    }

    case "REMOVE_ONE_EXTRA": {
      const existingExtra = state.cart.extras.find((item) => item.id === action.payload.id);
      if (existingExtra && existingExtra.quantity > 1) {
        return {
          ...state,
          cart: {
            ...state.cart,
            extras: state.cart.extras.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            extras: state.cart.extras.filter((item) => item.id !== action.payload.id),
          },
        };
      }
    }

    case "RESET_CART":
      localStorage.removeItem('cart');
      return {
        ...state,
        cart: {
          burgers: [],
          drinks: [],
          extras: [],
        },
      };

    default:
      return state;
  }
};

const OrderPage = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const [state, dispatch] = useReducer(reducer, savedCart ? { cart: savedCart } : initialState);
  const [currentBurger, setCurrentBurger] = useState([]);
  const [currentSection, setCurrentSection] = useState("hamburger");

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addIngredientToBurger = (ingredient) => {
    const existingIngredient = currentBurger.find(
      (item) => item.id === ingredient.id
    );

    if (existingIngredient) {
      setCurrentBurger(
        currentBurger.map((item) =>
          item.id === ingredient.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCurrentBurger([...currentBurger, { ...ingredient, quantity: 1 }]);
    }
  };

  const removeIngredientFromBurger = (ingredient) => {
    const existingIngredient = currentBurger.find(
      (item) => item.id === ingredient.id
    );

    if (existingIngredient && existingIngredient.quantity > 1) {
      setCurrentBurger(
        currentBurger.map((item) =>
          item.id === ingredient.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCurrentBurger(
        currentBurger.filter((item) => item.id !== ingredient.id)
      );
    }
  };

  const addBurgerToCart = () => {
    if (currentBurger.length > 0) {
      setCurrentBurger((prevBurger) => {
        dispatch({ type: "ADD_BURGER", payload: prevBurger });
        return [];
      });
    }
  };

  const addDrinkToCart = (drink) => {
    dispatch({ type: "ADD_DRINK", payload: drink });
  };

  const addExtraToCart = (extra) => {
    dispatch({ type: "ADD_EXTRA", payload: extra });
  };

  const removeItem = (item, type) => {
    dispatch({ type: "REMOVE_ITEM", payload: { item, type } });
  };

  const removeOneExtra = (extra) => {
    dispatch({ type: "REMOVE_ONE_EXTRA", payload: extra });
  };
  return (
    <div className="relative min-h-screen bg-gray-100">
      <OrderNav setCurrentSection={setCurrentSection} />

      <div className="container py-8 flex justify-center space-x-10 pb-16 w-full">
        <div className="w-2/3 flex space-x-10 min-h-screen">
          {currentSection === "hamburger" && (
            <>
              <div className="h-full w-8">
              </div>
              <IngredientList
                ingredients={burgerIngredients.hamburger_ingredients}
                addIngredient={addIngredientToBurger}
                removeIngredient={removeIngredientFromBurger}
                cart={currentBurger}
              />
              <button
                onClick={addBurgerToCart}
                className="bg-green-500 shadow-2xl text-white py-2 px-4 rounded hover:bg-green-600 transition-transform active:scale-[1.01] "
              >
                Add Burger to Cart
              </button>

              <button
                onClick={() => setCurrentSection("extras")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {">"}
              </button>
            </>
          )}

          {currentSection === "extras" && (
            <>
              <button
                onClick={() => setCurrentSection("hamburger")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {"<"}
              </button>
              <ExtraList
                extras={extraItems.extra_items}
                addExtra={addExtraToCart}
              />
              <button
                onClick={() => setCurrentSection("drinks")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {">"}
              </button>
            </>
          )}

          {currentSection === "drinks" && (
            <>
              <button
                onClick={() => setCurrentSection("extras")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {"<"}
              </button>

              <DrinkForm
                drinks={drinksData[0].drinks}
                addDrink={addDrinkToCart}
              />
              <button
                onClick={() => setCurrentSection("checkout")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {">"}
              </button>
            </>
          )}

          {currentSection === "checkout" && (
            <>
              <button
                onClick={() => setCurrentSection("drinks")}
                className="text-3xl hover:text-slate-900 active:scale-[1.01]"
              >
                {"<"}
              </button>
              <Cart cart={state.cart} removeFromCart={removeItem} removeOneExtra={removeOneExtra} setCart={(newCart) => dispatch({ type: "RESET_CART", payload: newCart })} />

              <div className="h-full w-6">
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
