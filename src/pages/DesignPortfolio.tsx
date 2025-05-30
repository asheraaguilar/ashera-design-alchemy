import { useEffect } from 'react';
import Header from '@/components/Header';
import DesignPortfolio from '@/components/DesignPortfolio';
import Footer from '@/components/Footer';

const DesignPortfolioPage = () => {
  useEffect(() => {
    // Initialize intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Add stagger effect for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            (child as HTMLElement).style.setProperty('--stagger-delay', `${index * 100}ms`);
            child.classList.add('stagger-animation', 'animate-fade-in');
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="pt-20">
        <DesignPortfolio />
      </div>
      <Footer />
    </div>
  );
};

export default DesignPortfolioPage;
