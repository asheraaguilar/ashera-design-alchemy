
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Facebook, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="stagger-child">
              <h3 className="text-3xl font-bold text-primary mb-8">Let's Connect</h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 flex items-center justify-center text-white gradient-bg rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Email</h4>
                    <a href="mailto:aguilarasherakathryn@gmail.com" className="text-primary hover:text-secondary transition-colors text-lg">
                      aguilarasherakathryn@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 flex items-center justify-center text-white gradient-bg rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Phone</h4>
                    <a href="tel:09952318729" className="text-primary hover:text-secondary transition-colors text-lg">
                      09952318729
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 flex items-center justify-center text-white gradient-bg rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-2">Location</h4>
                    <p className="text-gray-700 text-lg">Lipa City, Batangas, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-xl text-gray-800 mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/ashera-kathryn-aguilar-a40b89289/", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/asheraaguilar", label: "GitHub" },
                    { icon: Facebook, href: "https://www.facebook.com/ashera.aguilar", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center text-primary hover:text-white hover:bg-primary rounded-xl border-2 border-primary transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      style={{ '--stagger-delay': `${index * 100}ms` } as React.CSSProperties}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-hover bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 stagger-child">
              <h3 className="text-3xl font-bold text-primary mb-8">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full gradient-bg text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
