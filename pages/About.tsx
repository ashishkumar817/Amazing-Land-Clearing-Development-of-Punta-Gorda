import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Award } from 'lucide-react';
import { TEAM, COMPANY_INFO } from '../constants';
import Button from '../components/Button';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
             <img src="https://picsum.photos/id/202/1920/600" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Serving Punta Gorda and Southwest Florida with integrity, quality, and heavy-duty results.</p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/id/175/800/600" alt="Our Team Working" className="w-full" />
                <div className="absolute bottom-0 left-0 bg-brand-orange text-white py-2 px-6 rounded-tr-xl font-bold text-lg">
                  Est. 2013
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Building a Legacy in Punta Gorda</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>{COMPANY_INFO.name}</strong> was founded with one mission: to help property owners transform raw land into usable, valuable space. What started as a small local operation has grown into a trusted name across Punta Gorda and Southwest Florida.
                </p>
                <p>
                  With over 10 years of hands-on experience, we’ve completed hundreds of successful projects for homeowners, contractors, and developers. We understand the specific challenges of Florida terrain, from sandy soil to dense palmetto brush, and we have the right equipment to handle it all.
                </p>
                <p>
                  We are not just a contractor; we are your neighbors. We take pride in our community and ensure every job site is left clean, safe, and ready for the next phase of development.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Work With Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-green">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-brand-green" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To deliver safe, efficient, and affordable land development solutions while maintaining honesty, integrity, and respect for the land.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-orange">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-brand-orange" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality Workmanship</li>
                <li>• Transparent Pricing</li>
                <li>• Respect for Deadlines</li>
                <li>• Environmental Responsibility</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Local Punta Gorda Expertise</li>
                <li>• Modern Equipment</li>
                <li>• Fast Turnaround Times</li>
                <li>• Fully Licensed & Insured</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-dark mb-16">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative inline-block mb-6 overflow-hidden rounded-full border-4 border-gray-100 shadow-lg w-48 h-48">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{member.name}</h3>
                <p className="text-brand-orange font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;