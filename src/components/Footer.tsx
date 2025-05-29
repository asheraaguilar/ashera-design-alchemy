
const Footer = () => {
  return (
    <footer className="gradient-bg py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold font-playfair mb-2">
              Ashera Kathryn R. Aguilar
            </h2>
            <p className="text-white/80">Software Engineer & UX Designer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="mb-2 text-white/80">© 2025 All Rights Reserved</p>
            <p className="text-white/80">Last updated: May 29, 2025</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            Designed and developed with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
