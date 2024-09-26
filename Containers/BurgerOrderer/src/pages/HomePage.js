import React from "react";

import StepsSection from "../components/StepsSection";
import Promotion from "../components/Promotions";
import Testimonials from "../components/Testimonials";

const HomePage = () => {

  
  //StepsSections Has the "Order now" Button inside of it.
  return (
    <div className="min-h-screen">
      
      <Promotion/>
      <StepsSection />  
      <Testimonials/>
    </div>
  );
};

export default HomePage;
