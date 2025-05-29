
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
                I am a Bachelor of Science in Information Technology Major in Business Analytics graduate 
                from Batangas State University - The National Engineering University, Lipa Campus. Throughout 
                my academic journey, I primarily took on the role of front-end developer in group projects, 
                driven by my passion for layout and graphic design.
              </p>
              
              <p className="stagger-child text-lg">
                My expertise spans across modern web technologies including React.js, JavaScript, and responsive 
                design frameworks. I have a proven track record of transforming complex data insights into 
                intuitive user interfaces, bridging the gap between technical functionality and user experience. 
                My business analytics background enables me to create data-driven solutions that not only look 
                great but also deliver measurable business value.
              </p>
              
              <p className="stagger-child text-lg">
                I am proficient in agile development methodologies, have experience with version control systems 
                like Git, and am skilled in collaborating with cross-functional teams. My portfolio includes 
                healthcare management systems, educational platforms, and government service applications, 
                demonstrating my versatility across different industries and user needs.
              </p>
              
              <p className="stagger-child text-lg">
                Beyond coding, I actively participate in technology conferences and continuous learning programs 
                to stay updated with industry trends. I am passionate about creating accessible, performance-optimized 
                applications that enhance user productivity and engagement.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ashera-kathryn-aguilar-a40b89289/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/asheraaguilar", label: "GitHub" },
                  { icon: Facebook, href: "https://www.facebook.com/ashera.aguilar", label: "Facebook" }
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
