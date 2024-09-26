import React from "react";
import Step from "./Step";
import { useNavigate } from 'react-router-dom';
import step1Img from '../assets/step1.webp';
import step2Img from '../assets/step2.webp';
import step3Img from '../assets/step3.webp';
import step4Img from '../assets/step4.webp';
const StepsSection = () => {
  const steps = [
    { title: "Step 1", description: "Build your own burger", Image: step1Img },
    { title: "Step 2", description: "Our BurgerMakers create your burger for you fresh",Image: step2Img },
    { title: "Step 3", description: "Collect and pay for your burger" ,Image: step3Img},
    { title: "Step 4", description: "Enjoy the freshest burger you've ever tasted!", Image: step4Img },
  ];

  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  };
  return (
    <section className="container min-h-screen mx-auto pt-10 px-10 sm:px-14 md:px-20  ">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 place-items-center md:place-items-start ">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} Image={step.Image}/>
        ))}
      </div>
      <button
          onClick={handleOrderNow}
         className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-200 mt-10"
        >
          ORDER NOW
      </button>
    </section>
  );
};

export default StepsSection;
