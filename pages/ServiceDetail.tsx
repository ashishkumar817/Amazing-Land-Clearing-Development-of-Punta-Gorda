import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';
import Button from '../components/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block p-4 bg-brand-orange rounded-full mb-6">
             <Icon size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-300">Professional {service.title} Services in Punta Gorda, FL</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle className="text-brand-green mr-3" size={24} />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-gray p-8 rounded-xl border-l-4 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Why Choose Us for {service.title}?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><ArrowRight className="text-brand-orange mr-2 mt-1" size={16}/> State-of-the-art machinery designed for Florida terrain.</li>
                <li className="flex items-start"><ArrowRight className="text-brand-orange mr-2 mt-1" size={16}/> Experienced operators who prioritize safety and efficiency.</li>
                <li className="flex items-start"><ArrowRight className="text-brand-orange mr-2 mt-1" size={16}/> Complete cleanup and debris removal included.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Quick Contact */}
            <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
              <p className="text-gray-400 mb-6">Ready to get started? Contact us today for a free on-site estimate.</p>
              <Link to="/contact">
                <Button fullWidth variant="primary">Request Estimate</Button>
              </Link>
              <div className="mt-4 text-center">
                 <p className="text-sm text-gray-400">Or call us directly:</p>
                 <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="text-xl font-bold text-brand-orange hover:text-white transition-colors block mt-1">
                   {COMPANY_INFO.phone}
                 </a>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-brand-dark mb-4 border-b pb-2">Other Services</h3>
              <ul className="space-y-2">
                {SERVICES.filter(s => s.id !== service.id).map(s => (
                  <li key={s.id}>
                    <Link 
                      to={`/services/${s.slug}`}
                      className="block py-2 px-3 rounded hover:bg-gray-50 text-gray-600 hover:text-brand-orange transition-colors flex justify-between items-center"
                    >
                      {s.title}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;