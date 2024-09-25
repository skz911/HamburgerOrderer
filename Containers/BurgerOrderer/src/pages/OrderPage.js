import React from 'react';
import Header from '../components/Header'; 
import IngredientList from '../components/IngredientList.js';
import OrderSummary from '../components/OrderSummary';
import OrderButton from '../components/OrderButton'; 

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <div className="container mx-auto flex py-10">
        <IngredientList />
        <div className="flex-1 flex flex-col items-center">
          <OrderSummary />
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
