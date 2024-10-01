import React from "react";

import StepsSection from "../components/StepsSection";
import Promotion from "../components/Promotions";
import Testimonials from "../components/Testimonials";

/**
 * renders the Homepage which has a Promotion component,
 * a stepsSection component and testimonails component.
 * 
 * 
 * @component
 * @returns {JSX.Element}
 */
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
