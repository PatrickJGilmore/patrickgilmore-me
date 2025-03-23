
import { ArrowDown, FileText, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#050a15] via-[#0a1428] to-[#0c1a34]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-blue-500/30 blur-[100px] animate-float"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-indigo-500/20 blur-[100px] animate-float animation-delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px] animate-float animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-blue-300 font-medium tracking-wide">Acting Manager & Senior Production Support Analyst</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight whitespace-normal sm:whitespace-nowrap">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200">
                Results-Driven IT Leader
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              With 25+ years of experience architecting technical solutions and leading high-performing teams. 
              Specializing in enterprise systems, automation, and driving operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="downloads/patrick-gilmore-resume.pdf" target="_blank" className="btn-outline flex items-center justify-center gap-2">
                <FileText size={18} /> Download Resume
              </a>
            </div>

            <div className="flex justify-center mb-16">
              <a
                href="https://www.linkedin.com/in/patrickjgilmore/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a
              href="#about"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} className="text-white/80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
