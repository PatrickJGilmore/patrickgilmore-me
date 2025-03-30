
import { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Briefcase, CalendarClock, Award } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const experiences = [
    {
      company: "Qolo",
      url: "https://www.qolo.io",
      title: "Senior Production Support Analyst (Acting Manager)",
      period: "September 2019 - Present",
      highlights: [
        "Led and managed a high-performing team during annual open enrollment, driving operational excellence and ensuring minimal disruption to critical systems.",
        "Streamlined incident resolution process, reducing average resolution time by 30% through improved triage and documentation practices.",
        "Implemented automated monitoring solutions that reduced system outages by identifying and resolving issues before they impacted users.",
        "Developed comprehensive runbooks and documentation, ensuring knowledge transfer and consistent operational procedures.",
      ]
    },
    {
      company: "Exela Technologies",
      url: "https://www.exelatech.com",
      title: "Technical Manager",
      period: "April 2019 - September 2019",
      highlights: [
        "Managed a team of production support specialists handling front-end user reporting issues and back-end processing errors.",
        "Led the implementation of a new change management process, improving deployment success rate by 25%.",
        "Coordinated with development teams to resolve critical bugs and implement enhancements based on user feedback.",
      ]
    },
    {
      company: "RDM Technology",
      url: "",
      title: "Technical Analyst",
      period: "March 2019 - April 2019",
      highlights: [
        "Consulted on the implementation and customization of a new healthcare information management system.",
        "Collaborated with stakeholders to define requirements and ensure the delivered solution met business needs.",
      ]
    },
    {
      company: "Trinet",
      url: "https://www.trinet.com",
      title: "Senior Technical Analyst",
      period: "January 2018 - March 2019",
      highlights: [
        "Led incident response for the HR/benefits platform, ensuring rapid resolution of critical issues and minimizing business impact.",
        "Implemented new troubleshooting methodologies, reducing average incident resolution time by 20%.",
        "Mentored junior team members, providing technical guidance and fostering professional development.",
      ]
    }
  ];

  const renderHighlights = (highlights: string[]) => (
    <ul className="list-disc list-outside pl-5 space-y-2 text-white/70">
      {highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </ul>
  );

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="section-title">Work Experience</h2>
          <h3 className="section-subtitle">My Professional Career Path</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-blue-500/10 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Work Experience Cards */}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-12 transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-[#1E293B] z-10"></div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-8 relative">
                      <div className="mb-6 flex flex-col">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener" 
                            className="text-2xl font-bold text-white transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-2xl font-bold text-white">{exp.company}</span>
                        )}
                        <span className="text-xl text-blue-400 mt-1">{exp.title}</span>
                        
                        <div className="flex items-center gap-2 mt-3">
                          <CalendarClock size={16} className="text-white/50" />
                          <span className="text-white/70">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="text-left">
                        {renderHighlights(exp.highlights)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="downloads/patrickgilmore.pdf" 
              target="_blank" 
              rel="noopener" 
              className="btn-outline inline-flex items-center gap-2"
            >
              <Award size={18} /> View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
