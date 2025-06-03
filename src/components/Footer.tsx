
import { Linkedin, Github, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="gradient-bg py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Ashera Kathryn R. Aguilar</h3>
            <p className="text-white/80 mb-6">
              Software Engineer & UX Designer passionate about creating innovative digital solutions
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ashera-kathryn-aguilar-a40b89289/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/asheraaguilar", label: "GitHub" },
                { icon: Facebook, href: "https://www.facebook.com/ashera.aguilar", label: "Facebook" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-primary hover:bg-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-white/80">
              <p>Lipa City, Batangas, Philippines</p>
              <p>aguilarasherakathryn@gmail.com</p>
              <p>09952318729</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-white/80">Made </p>
            <p className="text-white/80">by Ashera Kathryn R. Aguilar</p>
          </div>
          <div className="text-white/80 text-sm">
            <p>© 2025 All Rights Reserved | Last updated: May 29, 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
