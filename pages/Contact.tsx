import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get in touch for a free estimate or to discuss your land development needs.</p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                     <Phone className="text-brand-orange mt-1 mr-4" size={24} />
                     <div>
                       <h4 className="font-bold text-gray-900">Phone</h4>
                       <p className="text-gray-600 mb-2">Call for immediate service</p>
                       <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="text-brand-green font-bold text-lg hover:underline">{COMPANY_INFO.phone}</a>
                     </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                     <Mail className="text-brand-orange mt-1 mr-4" size={24} />
                     <div>
                       <h4 className="font-bold text-gray-900">Email</h4>
                       <p className="text-gray-600 mb-2">For general inquiries</p>
                       <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-green font-bold text-lg hover:underline">{COMPANY_INFO.email}</a>
                     </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex items-start md:col-span-2">
                     <Clock className="text-brand-orange mt-1 mr-4" size={24} />
                     <div>
                       <h4 className="font-bold text-gray-900">Business Hours</h4>
                       <p className="text-gray-600">Monday – Saturday: 7:00 AM – 6:00 PM</p>
                       <p className="text-gray-600">Sunday: Closed</p>
                     </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm flex items-start md:col-span-2">
                     <MapPin className="text-brand-orange mt-1 mr-4" size={24} />
                     <div>
                       <h4 className="font-bold text-gray-900">Location</h4>
                       <p className="text-gray-600">{COMPANY_INFO.address}</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-xl shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5683973686884!2d-81.9397664849557!3d26.929849583120614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dbb0a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2s48357%20Bermont%20Rd%2C%20Punta%20Gorda%2C%20FL%2033982!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '0.5rem' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;