import React from "react";

import StepsSection from "../components/StepsSection";
import Promotion from "../components/Promotions";
import Testimonials from "../components/Testimonials";

/* Simple home page, i have created components for each section in the page */
const HomePage = () => {

  return (
    <div className="min-h-screen">
      
      <Promotion/>
      <StepsSection />  
      <Testimonials/>
    </div>
  );
};

export default HomePage;
