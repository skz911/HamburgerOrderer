/**
 * @module HomeComponents
 */

import React from "react";

/**
 * Step component displays an individual step in a process, including an image, title, and description.
 * 
 * @component
 * @memberof module:HomeComponents
 * @param {string} title - The title of the step.
 * @param {string} description - A brief description of the step.
 * @param {string} Image - The source URL for the image representing the step.
 * @returns {JSX.Element} The rendered step component with an image, title, and description.
 */

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
