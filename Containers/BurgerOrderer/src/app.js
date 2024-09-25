import React from "react";
import Header from "./components/Header";
import StepsSection from "./components/StepsSection";
import OrderButton from "./components/OrderButton";

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <StepsSection />
      <OrderButton />
    </div>
  );
};

export default App;
