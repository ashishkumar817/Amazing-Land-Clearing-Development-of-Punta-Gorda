import React, { useState } from 'react';
import Button from './Button';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
        <CheckCircle size={64} className="text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange">
      <h3 className="text-2xl font-bold text-brand-dark mb-2">Get a Free Estimate</h3>
      <p className="text-gray-500 text-sm mb-6">Fill out the form below and we'll contact you shortly to discuss your project.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
            placeholder="(941) 555-0123"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Needed</label>
        <select 
          id="service" 
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
        >
          <option value="">Select a Service</option>
          <option value="land-clearing">Land Clearing</option>
          <option value="excavation">Excavation</option>
          <option value="forestry-mulching">Forestry Mulching</option>
          <option value="grading">Grading</option>
          <option value="demolition">Demolition</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
          placeholder="Tell us about your project location and requirements..."
        ></textarea>
      </div>

      <Button 
        type="submit" 
        fullWidth 
        disabled={status === 'submitting'}
        className="flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? 'Sending...' : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;