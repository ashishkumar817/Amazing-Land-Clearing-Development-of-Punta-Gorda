import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md relative border-l-4 border-brand-orange h-full">
      <Quote className="absolute top-4 right-4 text-brand-gray text-opacity-50" size={40} color="#e5e7eb" fill="#e5e7eb" />
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.text}"</p>
      <div className="flex flex-col">
        <span className="font-bold text-brand-dark">{testimonial.name}</span>
        <span className="text-sm text-gray-500">{testimonial.location}</span>
        <span className="text-xs text-brand-orange font-medium uppercase mt-1 tracking-wide">{testimonial.service}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;