/**
 * @module HomeComponents
 */

import React from 'react';

/**
 * Promotion component displays a promotional message offering a limited-time deal.
 * 
 * @component
 * @memberof module:HomeComponents
 * @returns {JSX.Element} The rendered promotion section.
 */

const Promotion = () => {
  return (
    <section className="py-6 text-center mt-10">
      <h2 className="text-2xl font-bold">Limited-Time Offer: Free Drink with Every Burger!</h2>
      <p className="mt-2 text-lg">Hurry, this offer ends soon!</p>
    </section>
  );
};

export default Promotion;
