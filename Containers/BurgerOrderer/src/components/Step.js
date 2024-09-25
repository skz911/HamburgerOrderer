import React from "react";

const Step = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      {/* Image Placeholder */}
      <div className="h-32 bg-gray-200 mb-4"></div>
      {/* Step Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Step;
