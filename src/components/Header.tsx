
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
    { href: '/design-portfolio', label: 'Design Portfolio', isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // It's a route, navigate to it
      navigate(href);
    } else {
      // It's a section, scroll to it (only works on home page)
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/lovable-uploads/AK Logo.svg" 
              alt="Ashera Aguilar Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary font-playfair">
              Ashera Aguilar
            </span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl text-primary hover:text-secondary transition-colors duration-300 stagger-child"
              style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
