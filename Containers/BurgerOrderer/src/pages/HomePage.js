import React from "react";

import Header from "../components/Header";
import StepsSection from "../components/StepsSection";

const HomePage = () => {

  
  //StepsSections Has the "Order now" Button inside of it.
  return (
    <div className="min-h-screen bg-yellow-100">
      <Header />
      <StepsSection />  
      
    </div>
  );
};

export default HomePage;
