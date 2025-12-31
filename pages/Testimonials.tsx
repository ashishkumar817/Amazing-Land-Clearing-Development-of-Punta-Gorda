import React, { useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">See what our neighbors in Punta Gorda are saying about our work.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            {/* Adding more dummy testimonials to fill the page visually as requested in prompt structure */}
             <TestimonialCard testimonial={{ id: 5, name: "Linda G.", location: "North Port", service: "Grading", text: "No drainage issues after grading. Excellent work.", rating: 5 }} />
             <TestimonialCard testimonial={{ id: 6, name: "Chris M.", location: "Arcadia", service: "Demolition", text: "Safe, fast, and affordable demolition. Left the site spotless.", rating: 5 }} />
             <TestimonialCard testimonial={{ id: 7, name: "Tom B.", location: "Punta Gorda", service: "Site Prep", text: "Ready to build in days. The team knows exactly what they are doing.", rating: 5 }} />
             <TestimonialCard testimonial={{ id: 8, name: "Angela P.", location: "Port Charlotte", service: "Residential Clearing", text: "Professional and reliable. I was worried about my oak trees but they were careful.", rating: 5 }} />
          </div>

          <div className="mt-20 bg-brand-green rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Have we worked for you?</h2>
            <p className="text-lg opacity-90 mb-8">We'd love to hear your feedback. Your satisfaction is our top priority.</p>
            <Link to="/contact">
               <Button variant="white" size="lg">Leave a Review</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;