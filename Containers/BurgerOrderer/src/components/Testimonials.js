import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "John D.", quote: "The best burger I’ve ever had! Fresh ingredients and a fantastic experience!" },
    { name: "Sarah K.", quote: "I love being able to customize every aspect of my burger." },
    { name: "Mike R.", quote: "Quick service and the tastiest burger in town!" }
  ];

  return (
    <section className="p-20 py-72 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-16">What Our Customers Are Saying</h2>
      <div className="flex flex-col md:flex-row justify-center md:space-y-0 md:space-x-8 place-items-center space-y-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-1/3 text-center">
            <p className="italic">"{testimonial.quote}"</p>
            <p className="mt-4 font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
