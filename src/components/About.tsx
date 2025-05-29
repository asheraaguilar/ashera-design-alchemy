
import { Linkedin, Github, Facebook } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img 
                src="https://static.readdy.ai/image/31301f7b6c0844834d1500aa97ebdb88/182996a35b8aaed5458e64294b70c51d.jpeg" 
                alt="Ashera Kathryn R. Aguilar" 
                className="relative rounded-2xl shadow-2xl object-cover object-top w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="stagger-child text-lg">
                With over 5 years of experience in software development and UX design, I specialize in creating 
                intuitive and efficient digital solutions that address real-world problems. My approach combines 
                technical expertise with user-centered design principles.
              </p>
              
              <p className="stagger-child text-lg">
                I hold a Master's degree in Computer Science from Stanford University and a Bachelor's in 
                Information Technology from the University of the Philippines. My academic background, coupled 
                with my industry experience, has equipped me with a unique perspective on technological innovation.
              </p>
              
              <p className="stagger-child text-lg">
                When I'm not coding or designing, you can find me exploring hiking trails, experimenting with 
                new recipes, or volunteering at local tech education initiatives for underrepresented groups in STEM.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-xl border-2 border-primary transition-all duration-300 transform hover:scale-110 hover:rotate-6 stagger-child"
                    style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
