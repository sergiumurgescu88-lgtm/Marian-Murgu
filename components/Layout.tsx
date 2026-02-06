import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import GeminiChat from './GeminiChat';

// Brand Logo Component - Refined
const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className, dark = false }) => (
  <svg viewBox="0 0 350 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SMART Renewable Energy Logo">
    <g transform="translate(55, 55)">
      <path d="M0 -45 L11 -26 L32 -32 L26 -11 L45 0 L26 11 L32 32 L11 26 L0 45 L-11 26 L-32 32 L-26 11 L-45 0 L-26 -11 L-32 -32 L-11 -26 Z" fill="#E11D48" />
      <circle cx="0" cy="0" r="24" fill={dark ? "#0F172A" : "white"} />
    </g>
    <text x="110" y="40" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="32" fill={dark ? "white" : "#0F172A"}>Smart</text>
    <text x="110" y="72" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="32" fill={dark ? "white" : "#0F172A"}>Renewable</text>
    <text x="110" y="104" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="32" fill="#E11D48">Energy</text>
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Despre Noi', path: '/despre-noi' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Due Diligence', path: '/due-diligence' },
    { name: 'Inginerie', path: '/inginerie' },
    { name: 'Proiecte', path: '/proiecte' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Floating Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-4 ${
          scrolled ? 'pt-2' : 'pt-6'
        }`}
      >
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
          scrolled ? 'glass-panel shadow-glass py-3 px-6' : 'bg-transparent py-4 px-2'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group relative z-50">
              <Logo className={`h-10 w-auto transition-transform duration-300 group-hover:scale-105`} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 p-1 bg-white/50 backdrop-blur-md rounded-full border border-white/40 shadow-sm mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-smart-blue text-white shadow-md' 
                      : 'text-gray-600 hover:text-smart-blue hover:bg-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
               <Link to="/contact" className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-smart-accent rounded-full hover:bg-rose-600 shadow-lg shadow-rose-500/20">
                <span className="mr-2 text-sm">Contact</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-smart-blue p-2 bg-white rounded-full shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 flex flex-col space-y-2 animate-scale-in origin-top">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                  isActive(link.path) ? 'bg-smart-blue text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-lg font-medium text-center bg-smart-accent text-white mt-4"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-gray-400 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-smart-accent rounded-full blur-[150px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-8">
                 <Logo className="h-12 w-auto" dark={true} />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Inginerie de precizie pentru sectorul regenerabil. Minimizăm riscul tehnic pentru proiecte bancabile.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Expertiză</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/diagnostic" className="hover:text-white hover:translate-x-1 transition-all inline-block">Diagnostic & Lab</Link></li>
                <li><Link to="/due-diligence" className="hover:text-white hover:translate-x-1 transition-all inline-block">Due Diligence</Link></li>
                <li><Link to="/inginerie" className="hover:text-white hover:translate-x-1 transition-all inline-block">Stocare (BESS)</Link></li>
                <li><Link to="/inginerie" className="hover:text-white hover:translate-x-1 transition-all inline-block">Proiectare SF/PT</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Companie</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/despre-noi" className="hover:text-white hover:translate-x-1 transition-all inline-block">Despre Noi</Link></li>
                <li><Link to="/proiecte" className="hover:text-white hover:translate-x-1 transition-all inline-block">Portofoliu</Link></li>
                <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Cariere</Link></li>
                <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Legal</h4>
              <ul className="space-y-4 text-sm font-light text-gray-500">
                <li>SMART RENEWABLE ENERGY SRL</li>
                <li>CUI: RO41289942</li>
                <li>J3/1720/2019</li>
                <li><a href="mailto:office@smartrenewable.energy" className="text-white hover:text-smart-accent transition-colors">office@smartrenewable.energy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-gray-600">
            <p>&copy; {new Date().getFullYear()} SMART Renewable Energy SRL. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>

      <GeminiChat />
    </div>
  );
};

export default Layout;