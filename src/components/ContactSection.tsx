
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-[#0b101e] to-[#050a15]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <h3 className="section-subtitle">Let's Elevate Your Technical Needs</h3>
        </div>

        <div 
          ref={sectionRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-10 text-center">
            <h3 className="text-2xl font-semibold mb-8">Ready to Discuss Your Technical Leadership Needs?</h3>
            
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              I'm available to discuss how my technical leadership and enterprise systems expertise can benefit your organization. Let's connect and explore possibilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="glass-card p-6 md:p-8 flex flex-col items-center md:items-center">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="text-xl font-medium mb-2 md:text-center">Email</h4>
                <a 
                  href="mailto:contact@patrickgilmore.me" 
                  className="text-blue-300 hover:text-blue-200 transition-colors md:text-center"
                >
                  contact@patrickgilmore.me
                </a>
              </div>
              
              <div className="glass-card p-6 md:p-8 flex flex-col items-center md:items-center">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="text-xl font-medium mb-2 md:text-center">Phone</h4>
                <a 
                  href="tel:7272570037" 
                  className="text-blue-300 hover:text-blue-200 transition-colors md:text-center"
                >
                  (727) 257-0037
                </a>
              </div>
              
              <div className="glass-card p-6 md:p-8 flex flex-col items-center md:items-center">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  <ExternalLink size={24} />
                </div>
                <h4 className="text-xl font-medium mb-2 md:text-center">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/patrickjgilmore/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-300 hover:text-blue-200 transition-colors md:text-center"
                >
                  linkedin.com/in/patrickjgilmore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
