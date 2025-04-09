
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-[#050a15] border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <a href="#home" className="text-2xl font-heading font-bold text-white">
                Patrick Gilmore
              </a>
              <p className="mt-2 text-white/60 max-w-xs">
                IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/patrickjgilmore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Awards', 'Activities', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white/70">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+12345678901" className="hover:text-white transition-colors">
                    (234) 567-8901
                  </a>
                </li>
                <li className="flex items-center text-white/70">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:patrick@example.com" className="hover:text-white transition-colors">
                    patrick@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/10 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p>&copy; {currentYear} Patrick Gilmore. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
