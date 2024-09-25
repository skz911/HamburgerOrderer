import React from "react";
import Step from "./Step";
import { useNavigate } from 'react-router-dom';

const StepsSection = () => {
  const steps = [
    { title: "Step 1", description: "Build your own burger" },
    { title: "Step 2", description: "Our Burger makes create your burger for you fresh" },
    { title: "Step 3", description: "Collect and pay for your burger" },
    { title: "Step 4", description: "Enjoy the freshest burger you've ever tasted!" },
  ];

  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  };
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
      <button
          onClick={handleOrderNow}
         className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-200 mt-10"
        >
          ORDER NOW
      </button>
    </section>
  );
};

export default StepsSection;
