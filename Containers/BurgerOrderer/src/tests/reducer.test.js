import { reducer } from '../pages/OrderPage';

describe('Order reducer (test the functionality of the reducer in the orderpage so that i can add and modify items in the users cart', () => {

  it('should add a burger to the cart', () => {
    const initialState = {
      cart: {
        burgers: [],
        drinks: [],
        extras: [],
      },
    };

    const burger = {
      id: 1,
      name: 'Cheeseburger',
      ingredients: [
        { id: 1, name: 'Beef Patty' },
        { id: 2, name: 'Cheese' },
      ],
    };

    const action = { type: 'ADD_BURGER', payload: burger };

    const updatedState = reducer(initialState, action);

    expect(updatedState.cart.burgers).toHaveLength(1);
    expect(updatedState.cart.burgers[0]).toEqual(burger);
  });

  it('should add a drink to the cart', () => {
    const initialState = {
      cart: {
        burgers: [],
        drinks: [],
        extras: [],
      },
    };

    const drink = {
      id: 2,
      name: 'Coca Cola',
      size: 'Large',
    };

    const action = { type: 'ADD_DRINK', payload: drink };

    const updatedState = reducer(initialState, action);

    expect(updatedState.cart.drinks).toHaveLength(1); 
    expect(updatedState.cart.drinks[0]).toEqual(drink); 
  });

  it('should add an extra item to the cart', () => {
    const initialState = {
      cart: {
        burgers: [],
        drinks: [],
        extras: [],
      },
    };

    const extra = {
      id: 3,
      name: 'Fries',
      quantity: 1,
    };

    const action = { type: 'ADD_EXTRA', payload: extra };

    const updatedState = reducer(initialState, action);

    expect(updatedState.cart.extras).toHaveLength(1); 
    expect(updatedState.cart.extras[0]).toEqual({ ...extra, quantity: 1 }); 
  });

  it('should increase the quantity of an existing extra item', () => {
    const initialState = {
      cart: {
        burgers: [],
        drinks: [],
        extras: [{ id: 3, name: 'Fries', quantity: 1 }],
      },
    };

    const extra = {
      id: 3,
      name: 'Fries',
    };

    const action = { type: 'ADD_EXTRA', payload: extra };

    const updatedState = reducer(initialState, action);

    expect(updatedState.cart.extras).toHaveLength(1); 
    expect(updatedState.cart.extras[0].quantity).toBe(2); 
  });
});
