
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

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
      title: "Senior Production Support Analyst (Acting Manager)",
      company: "Qolo",
      companyUrl: "https://qolo.io",
      period: "2022 - Present",
      description: "Leading and coordinating responses to production incidents while ensuring business continuity. Responsible for end-to-end problem-solving across multiple domains, resulting in significant improvements in system availability and performance. Currently serving in a management capacity, overseeing team workloads, conducting performance reviews, and handling all aspects of team leadership.",
      achievements: [
        "Reduced major incident response time by 40% through implementation of standardized protocols and advanced monitoring solutions",
        "Led cross-functional teams to resolve complex technical challenges affecting critical payment processing systems",
        "Spearheaded implementation of new monitoring solutions resulting in improved system reliability"
      ]
    },
    {
      title: "Senior Systems Administrator",
      company: "Exela Technologies",
      companyUrl: "https://www.exelatech.com/",
      period: "2017 - 2022",
      description: "Managed enterprise systems administration and led technical support operations for a Fortune 500 financial services client. Oversaw implementation of critical infrastructure upgrades and maintained 99.9% system availability for mission-critical applications.",
      achievements: [
        "Architected and deployed a centralized monitoring solution that reduced system outages by 35%",
        "Managed migration of 200+ servers to new data center with zero unplanned downtime",
        "Implemented automation that reduced manual processes by 60%, saving approximately 20 hours per week"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0c1525]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <h3 className="section-subtitle">Career Journey & Accomplishments</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto space-y-16"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-transparent h-full"></div>
              )}
              
              <div className="relative flex gap-8">
                <div>
                  {/* Timeline dot */}
                  <div className="h-16 w-16 rounded-full glass-card flex items-center justify-center border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/10">
                    <Briefcase className="h-7 w-7 text-blue-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="glass-card p-8">
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <h3 className="text-2xl font-semibold text-left">{exp.title}</h3>
                          <span className="hidden sm:inline-block text-white/40">•</span>
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">{exp.company}</a>
                        </div>
                        
                        <div className="flex items-center text-white/60 gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/80">{exp.description}</p>
                      
                      <div className="space-y-3 pt-2">
                        <h4 className="text-lg font-medium text-left">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2 mt-1">•</span>
                              <span className="text-white/70">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
