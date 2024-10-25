import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { name: "John Doe", feedback: "CareConnect has transformed my healthcare experience!", rating: 5 },
  { name: "Jane Smith", feedback: "Booking appointments has never been easier.", rating: 4 },
  { name: "Alice Johnson", feedback: "The symptom checker is incredibly helpful!", rating: 5 },
];

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? '#FFD700' : '#e4e5e9'} />
    ));
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="italic">"{testimonial.feedback}"</p>
              <div className="flex items-center mt-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="font-bold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
