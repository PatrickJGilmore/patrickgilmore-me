
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-[#050a15] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-heading font-bold text-white">
                Patrick Gilmore
              </a>
              <p className="mt-2 text-white/60">
                IT Leader and Technical Innovator
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/patrickjgilmore/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 mb-4 md:mb-0">
              &copy; {currentYear} Patrick Gilmore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
