import React from "react";

const Step = ({ title, description, Image }) => {
  return (
    <div className="bg-white w-fit max-w-80 p-4 shadow-2xl h-full rounded-lg text-center hover:scale-105 transition duration-200 ">
      {/* Image Placeholder */}
      <div className="min-h-32 min-w-32 h-fit max-h-80 max-w-80 bg-gray-200 mb-4">
        <img src={Image} alt="Step 1" />
      </div>
      {/* Step Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Step;
