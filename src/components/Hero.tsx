
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 w-full relative z-10">
        {/* Main Header */}
        <header className="min-h-screen flex items-center justify-center w-full">
          <h1 className="hero-title text-center animate-fade-in">
            I am<br />Ashera.
          </h1>
        </header>

        {/* Animated Content Section */}
        <main className="w-full">
          <section className="content-section min-h-screen flex items-center w-full justify-center">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="sticky-text">
                <span aria-hidden="true">I can&nbsp;</span>
                <span className="sr-only">I can ship things.</span>
              </h2>
              <ul 
                className="animated-list" 
                aria-hidden="true" 
                style={{ '--count': 22 } as React.CSSProperties}
                data-animate="true"
              >
                <li style={{ '--i': 0 } as React.CSSProperties}>design.</li>
                <li style={{ '--i': 1 } as React.CSSProperties}>prototype.</li>
                <li style={{ '--i': 2 } as React.CSSProperties}>solve.</li>
                <li style={{ '--i': 3 } as React.CSSProperties}>build.</li>
                <li style={{ '--i': 4 } as React.CSSProperties}>develop.</li>
                <li style={{ '--i': 5 } as React.CSSProperties}>debug.</li>
                <li style={{ '--i': 6 } as React.CSSProperties}>learn.</li>
                <li style={{ '--i': 7 } as React.CSSProperties}>lead.</li>
                <li style={{ '--i': 8 } as React.CSSProperties}>teach.</li>
                <li style={{ '--i': 9 } as React.CSSProperties}>prompt.</li>
                <li style={{ '--i': 10 } as React.CSSProperties}>collaborate.</li>
                <li style={{ '--i': 11 } as React.CSSProperties}>create.</li>
                <li style={{ '--i': 12 } as React.CSSProperties}>inspire.</li>
                <li style={{ '--i': 13 } as React.CSSProperties}>follow.</li>
                <li style={{ '--i': 14 } as React.CSSProperties}>innovate.</li>
                <li style={{ '--i': 15 } as React.CSSProperties}>test.</li>
                <li style={{ '--i': 16 } as React.CSSProperties}>optimize.</li>
                <li style={{ '--i': 17 } as React.CSSProperties}>teach.</li>
                <li style={{ '--i': 18 } as React.CSSProperties}>visualize.</li>
                <li style={{ '--i': 19 } as React.CSSProperties}>transform.</li>
                <li style={{ '--i': 20 } as React.CSSProperties}>scale.</li>
                <li style={{ '--i': 21 } as React.CSSProperties}>do it.</li>
              </ul>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="content-section min-h-screen flex items-center justify-center w-full">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-secondary animate-fade-in">
                Software Engineer & UX Designer
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in">
                Creating innovative digital solutions with a focus on user experience and technical excellence. 
                Passionate about building products that make a difference in people's lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
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
          </section>
        </main>
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
