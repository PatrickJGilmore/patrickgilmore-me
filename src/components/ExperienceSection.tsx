
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Building, Award, ArrowUpRight } from 'lucide-react';

interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
}

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

  const experiences: ExperienceData[] = [
    {
      company: "Qolo",
      role: "Senior Production Support Analyst (Acting Manager)",
      period: "Sep 2021 - Present",
      location: "Fort Lauderdale, Florida (Remote)",
      type: "Full-time",
      achievements: [
        "Lead and manage the Production Support Team, overseeing workloads, resolving team conflicts, and driving performance excellence.",
        "Resolved 95% of complex technical issues on first contact, ensuring exceptional customer satisfaction.",
        "Collaborated with development teams to reduce system downtime by 30% and improve overall system performance.",
        "Implemented automation initiatives using modern tools, increasing efficiency and productivity by 25%.",
        "Created and maintained a comprehensive knowledge base, reducing issue resolution time by 40% across the support team.",
        "Recognize and nurture team talent, fostering a high-performance culture dedicated to operational excellence.",
        "Awarded the Qolo Rock Star Award for exemplary collaboration, innovation, accountability, integrity, and bias for action."
      ]
    },
    {
      company: "Telephone Services Inc",
      role: "System Administrator",
      period: "Mar 2018 - Sep 2021",
      location: "Tarpon Springs, Florida (On-site)",
      type: "Full-time",
      achievements: [
        "Optimized system configurations across multiple platforms, achieving a 20% improvement in overall performance.",
        "Managed user accounts, permissions, and group policies for 200+ employees, streamlining resource access.",
        "Maintained 99.9% uptime through diligent backups and implementing comprehensive security measures.",
        "Collaborated with IT professionals to enhance system security by 15% through adoption of industry-standard practices.",
        "Provided technical guidance and support to staff, ensuring smooth daily operations and minimal disruptions."
      ]
    },
    {
      company: "Exela Technologies",
      role: "Senior Application Developer",
      period: "Nov 2000 - Feb 2018",
      location: "Atlanta, Georgia (Remote)",
      type: "Full-time",
      achievements: [
        "Designed and delivered 50+ high-quality software applications, consistently meeting client expectations.",
        "Reduced maintenance costs by 35% by developing clean, maintainable, and scalable code.",
        "Successfully completed 90% of software projects on time and within budget, demonstrating strong project management skills.",
        "Mentored and guided 15+ junior developers, fostering a culture of continuous learning and professional growth.",
        "Improved project workflows by 20% through analysis of business requirements and development of practical technical solutions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 bg-gradient-to-b from-[#151f38] to-[#0b101e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="section-title">Work Experience</h2>
          <h3 className="section-subtitle">Leadership & Technical Excellence</h3>
        </div>

        <div 
          ref={sectionRef} 
          className="max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`glass-card mb-10 overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-5 p-0">
                {/* Company info */}
                <div className="md:col-span-2 p-8 md:border-r border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-blue-300 mb-5 flex items-center">
                      <Building size={18} className="mr-2 opacity-70" />
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center text-white/60 mb-3">
                      <Calendar size={16} className="mr-2 opacity-80" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-white/60">
                      <MapPin size={16} className="mr-2 opacity-80" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="flex items-center text-blue-300">
                        <Award size={18} className="mr-2" />
                        <span className="font-medium">Rock Star Award Recipient</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Achievements */}
                <div className="md:col-span-3 p-8 bg-white/[0.02]">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    Key Achievements 
                    <span className="h-px w-16 bg-gradient-to-r from-blue-500/60 to-transparent ml-3"></span>
                  </h4>
                  
                  <ul className="space-y-3 text-white/80">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className={`flex items-start transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                        }`}
                        style={{ transitionDelay: `${(index * 100) + (i * 100)}ms` }}
                      >
                        <div className="min-w-8 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                        </div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="downloads/patrick-gilmore-resume.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white/90 hover:bg-white/10 transition-all duration-300"
            >
              View Full Resume <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
