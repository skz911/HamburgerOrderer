import React from "react";
import Step from "./Step";

const StepsSection = () => {
  const steps = [
    { title: "Step 1", description: "Build your own burger" },
    { title: "Step 2", description: "Our Burger makes create your burger for you fresh" },
    { title: "Step 3", description: "Collect and pay for your burger" },
    { title: "Step 4", description: "Enjoy the freshest burger you've ever tasted!" },
  ];

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
