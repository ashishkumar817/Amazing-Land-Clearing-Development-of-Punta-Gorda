import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar - Hidden on mobile scroll to save space */}
      <div className={`bg-brand-dark text-gray-300 py-2 text-sm hidden md:block transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex space-x-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="flex items-center hover:text-brand-orange transition-colors">
              <Phone size={14} className="mr-2" /> {COMPANY_INFO.phone}
            </a>
            <span className="flex items-center">
              <MapPin size={14} className="mr-2" /> Punta Gorda, FL
            </span>
          </div>
          <div className="font-medium text-brand-orange">
            Licensed & Insured
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
               <div className="bg-brand-orange p-2 rounded mr-3 group-hover:bg-brand-dark transition-colors">
                 <span className="text-white font-bold text-xl tracking-tighter">ALC</span>
               </div>
               <div className="flex flex-col">
                  <span className="font-extrabold text-brand-dark text-lg leading-tight uppercase tracking-tight">Amazing Land</span>
                  <span className="text-brand-green font-bold text-sm uppercase tracking-wider">Clearing & Dev</span>
               </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium text-sm lg:text-base transition-colors duration-200 hover:text-brand-orange ${
                    location.pathname === link.path ? 'text-brand-orange' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button size="sm" variant="primary">Get a Quote</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-dark focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-lg border-b pb-2 ${
                    location.pathname === link.path ? 'text-brand-orange border-brand-orange' : 'text-slate-700 border-gray-100'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`} className="w-full">
              <Button fullWidth variant="secondary" className="flex items-center justify-center gap-2">
                <Phone size={18} /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;