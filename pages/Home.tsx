import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Truck, Users, Clock } from 'lucide-react';
import { SERVICES, TESTIMONIALS, FAQS, COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/191/1920/1080" 
            alt="Excavator clearing land" 
            className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${
              isLoaded ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative text-center md:text-left">
          <div className="max-w-3xl">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 transition-all duration-1000 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Professional Land Clearing & <span className="text-brand-orange">Excavation Services</span>
            </h1>
            <p 
              className={`text-lg md:text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Reliable site preparation, forestry mulching, grading, and demolition in Punta Gorda, FL. Done right the first time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className={`transition-all duration-1000 delay-500 ease-out transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <Link to="/contact" className="w-full sm:w-auto block">
                  <Button size="lg" className="w-full">Request a Free Quote</Button>
                </Link>
              </div>
              <div className={`transition-all duration-1000 delay-700 ease-out transform ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="w-full sm:w-auto block">
                  <Button size="lg" variant="white" className="w-full">Call for Scheduling</Button>
                </a>
              </div>
            </div>

            <div 
              className={`flex flex-wrap gap-6 text-sm md:text-base font-semibold text-gray-100 justify-center md:justify-start transition-all duration-1000 delay-[900ms] ease-out transform ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="flex items-center"><CheckCircle className="text-brand-green mr-2" size={20} /> Licensed & Insured</span>
              <span className="flex items-center"><CheckCircle className="text-brand-green mr-2" size={20} /> Local & Family-Owned</span>
              <span className="flex items-center"><CheckCircle className="text-brand-green mr-2" size={20} /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Homeowners & Contractors Choose Us</h2>
            <p className="text-gray-600">From dense vegetation to uneven terrain, we understand Punta Gorda’s soil, weather, and land challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Turn Raw Land into Ready", desc: "We remove trees, brush, and debris efficiently, saving you time and money." },
              { icon: ShieldCheck, title: "Built for Florida", desc: "Specialized knowledge of local soil conditions and environmental regulations." },
              { icon: Clock, title: "On-Time. On-Budget.", desc: "Clear timelines, honest pricing, and dependable execution on every job." },
              { icon: Users, title: "One Contractor", desc: "Land clearing, excavation, grading, and demolition handled by one trusted team." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 bg-brand-orange/10 text-brand-orange rounded-full mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Featured Services</h2>
            </div>
            <Link to="/services" className="hidden md:block">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/services">
              <Button variant="outline" fullWidth>View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="bg-brand-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-extrabold text-brand-orange mb-2">10+</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-extrabold text-brand-orange mb-2">100%</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Licensed & Insured</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-extrabold text-brand-orange mb-2">500+</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Projects Done</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-extrabold text-brand-orange mb-2">5.0</div>
              <div className="text-sm opacity-80 uppercase tracking-wide">Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">Frequently Asked Questions</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Contact us today for a free, no-obligation estimate on your land clearing or excavation needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact">
                <Button size="lg" variant="white" className="text-brand-green font-bold">Get Your Free Quote</Button>
             </Link>
             <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}>
                <Button size="lg" className="bg-brand-dark hover:bg-black">Call {COMPANY_INFO.phone}</Button>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;