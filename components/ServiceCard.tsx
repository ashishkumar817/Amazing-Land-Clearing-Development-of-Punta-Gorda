import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Icon 
              size={48} 
              className="text-white transform translate-y-4 scale-75 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out" 
            />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
        <Link 
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-green transition-colors mt-auto"
        >
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;