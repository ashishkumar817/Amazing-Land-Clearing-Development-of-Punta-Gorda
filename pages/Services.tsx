import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive land clearing, excavation, and site development solutions for residential and commercial projects.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Process</h2>
             <p className="text-gray-600">How we take your project from concept to completion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We meet on-site to understand your needs and provide a free estimate." },
              { step: "02", title: "Planning", desc: "We coordinate equipment, permits (if needed), and schedule the work." },
              { step: "03", title: "Execution", desc: "Our skilled team completes the work efficiently and safely." },
              { step: "04", title: "Review", desc: "We walk the site with you to ensure 100% satisfaction." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">{item.step}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
           <Link to="/contact">
             <Button variant="white" size="lg">Talk to an Expert</Button>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;