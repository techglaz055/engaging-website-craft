
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Phone, Book, Briefcase, Speaker } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About', path: '/about', icon: <Info className="h-4 w-4" /> },
    { name: 'Programs', path: '/programs', icon: <Book className="h-4 w-4" /> },
    { name: 'Speakers', path: '/speakers', icon: <Speaker className="h-4 w-4" /> },
    { name: 'Consultancy', path: '/consultancy', icon: <Briefcase className="h-4 w-4" /> }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-infine-teal font-bold text-2xl">INFINE<span className="text-infine-green">.</span></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center hover:text-infine-teal transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-infine-teal font-medium' : 'text-gray-700'
                }`}
              >
                <span className="mr-1">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Get In Touch Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:bg-infine-green transition-all duration-300 shadow-md hover:shadow-lg">
              <Link to="/contact" className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>Get In Touch</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-700 hover:text-infine-teal"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white/95 backdrop-blur-md absolute w-full transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 shadow-md' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center py-3 hover:text-infine-teal transition-colors duration-300 ${
                location.pathname === link.path ? 'text-infine-teal font-medium' : 'text-gray-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-2">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="block w-full py-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button className="w-full bg-gradient-primary hover:bg-infine-green transition-all duration-300">
              <div className="flex items-center justify-center gap-1 w-full">
                <Phone className="h-4 w-4" />
                <span>Get In Touch</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
