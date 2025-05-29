
import { ArrowRight, Download } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-bounce-subtle">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary leading-tight">
              <span className="block animate-fade-in">Ashera Kathryn</span>
              <span className="block gradient-text animate-fade-in" style={{ animationDelay: '0.2s' }}>R. Aguilar</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-medium mb-8 text-secondary animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Software Engineer & UX Designer
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Creating innovative digital solutions with a focus on user experience and technical excellence. 
              Passionate about building products that make a difference in people's lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={scrollToContact}
                className="gradient-bg text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={scrollToProjects}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Projects
              </button>
              
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-medium hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>

          {/* Spline 3D Model */}
          <div className="lg:block hidden animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <spline-viewer 
                url="https://prod.spline.design/6Ks3J8KnVzg9HsEc/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              ></spline-viewer>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
