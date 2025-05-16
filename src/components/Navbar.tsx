
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-ffl-darker/90 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ffl-orange rounded-sm flex items-center justify-center">
            <span className="font-montserrat font-bold text-white">S</span>
          </div>
          <span className="font-montserrat font-bold text-white text-xl">Flextime Fitness</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-white hover:text-ffl-orange transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-white hover:text-ffl-orange transition-colors">
            Services
          </Link>
          <Link to="/membership" className="text-white hover:text-ffl-orange transition-colors">
            Membership
          </Link>
          <Link to="/faq" className="text-white hover:text-ffl-orange transition-colors">
            FAQ
          </Link>
          <Link to="/calorie-calculator" className="text-white hover:text-ffl-orange transition-colors">
            Calculator
          </Link>
          <div className="relative group">
            <span className="text-white hover:text-ffl-orange transition-colors cursor-pointer">
              Resources
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-ffl-darker/95 backdrop-blur-lg rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link to="/diet-info" className="block px-4 py-2 text-sm text-white hover:text-ffl-orange">
                Diet Information
              </Link>
              <Link to="/supplements" className="block px-4 py-2 text-sm text-white hover:text-ffl-orange">
                Supplements
              </Link>
              <Link to="/food-index" className="block px-4 py-2 text-sm text-white hover:text-ffl-orange">
                Food Index
              </Link>
              <Link to="/personal-trainer" className="block px-4 py-2 text-sm text-white hover:text-ffl-orange">
                24/7 Personal Trainer
              </Link>
            </div>
          </div>
        </nav>

        <div className="hidden md:block">
          <Button className="neuro-button-primary">Free Trial</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ffl-darker/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/about" 
              className="text-white hover:text-ffl-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-ffl-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/membership" 
              className="text-white hover:text-ffl-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              to="/faq" 
              className="text-white hover:text-ffl-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/calorie-calculator" 
              className="text-white hover:text-ffl-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calorie Calculator
            </Link>
            <div className="border-t border-white/10 pt-2 mt-2">
              <p className="text-white/60 text-sm mb-1">Resources:</p>
              <Link 
                to="/diet-info" 
                className="text-white hover:text-ffl-orange transition-colors py-2 pl-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Diet Information
              </Link>
              <Link 
                to="/supplements" 
                className="text-white hover:text-ffl-orange transition-colors py-2 pl-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Supplements
              </Link>
              <Link 
                to="/food-index" 
                className="text-white hover:text-ffl-orange transition-colors py-2 pl-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Food Index
              </Link>
              <Link 
                to="/personal-trainer" 
                className="text-white hover:text-ffl-orange transition-colors py-2 pl-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                24/7 Personal Trainer
              </Link>
            </div>
            <Button 
              className="neuro-button-primary w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
