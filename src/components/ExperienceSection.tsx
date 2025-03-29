
import { useState, useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from '@/components/ui/badge';
import { BriefcaseIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';

interface JobExperience {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
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

  const experiences: JobExperience[] = [
    {
      company: "Qolo",
      companyUrl: "https://qolo.io",
      title: "Senior Production Support Analyst (Acting Manager)",
      period: "2019 - Present",
      description: "Provided technical leadership in a fast-paced fintech environment, managing complex technical issues across multiple platforms while mentoring junior team members.",
      achievements: [
        "Led the Production Support team as Acting Manager, coordinating incident response and system maintenance",
        "Managed and mentored a team of 6 analysts, improving response times by 35%",
        "Implemented new automated monitoring solutions that reduced critical incidents by 40%",
        "Collaborated with development teams to troubleshoot and resolve complex API integration issues"
      ],
      skills: ["Incident Management", "API Troubleshooting", "Technical Leadership", "Team Mentoring", "Process Improvement"]
    },
    {
      company: "Exela Technologies",
      companyUrl: "https://www.exelatech.com/",
      title: "Solutions Architect",
      period: "2017 - 2019",
      description: "Designed and implemented enterprise-level technical solutions, focusing on system integration, automation, and process improvement.",
      achievements: [
        "Reduced manual processes by 65% through implementation of automated workflows",
        "Led a cross-functional team that successfully migrated legacy systems to modern cloud infrastructure",
        "Designed API integration solutions that connected disparate systems for seamless data flow",
        "Created comprehensive technical documentation and training materials for IT staff"
      ],
      skills: ["Solution Design", "System Integration", "Workflow Automation", "Technical Documentation", "Cloud Migration"]
    },
    {
      company: "Integrated Systems and Services",
      title: "Senior Software Support Lead",
      period: "2010 - 2017",
      description: "Provided expert technical support for enterprise applications, managing incident response and coordinating with development teams on issue resolution.",
      achievements: [
        "Led a team of 8 support specialists, achieving 98% SLA compliance",
        "Implemented a knowledge management system that improved issue resolution time by 25%",
        "Collaborated with development to identify and fix recurring software issues",
        "Created comprehensive troubleshooting guides and training materials"
      ],
      skills: ["Technical Support", "Process Optimization", "Knowledge Management", "SLA Management", "Team Leadership"]
    }
  ];

  return (
    <section id="experience" className="py-28 bg-gradient-to-b from-[#151f38] to-[#0b101e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Work History
          </span>
          <h2 className="section-title">Professional Experience</h2>
          <h3 className="section-subtitle">Where I've Made an Impact</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto space-y-12"
        >
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[25px] top-[60px] bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent h-[calc(100%+3rem)]"></div>
              )}
              
              <div className="glass-card p-7 relative">
                <div className="absolute -top-4 left-4 w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border-4 border-[#0b101e] z-10">
                  <BriefcaseIcon size={16} className="text-blue-300" />
                </div>
                
                <div className="ml-9">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {experience.companyUrl ? 
                          <a 
                            href={experience.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-blue-300 transition-colors"
                          >
                            {experience.company}
                          </a> : 
                          experience.company
                        }
                      </h3>
                      <h4 className="text-lg text-blue-300 font-medium">{experience.title}</h4>
                    </div>
                    <div className="flex items-center mt-2 md:mt-0">
                      <CalendarIcon size={16} className="text-white/60 mr-2" />
                      <span className="text-white/80">{experience.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4">{experience.description}</p>
                  
                  <div className="mb-5">
                    <h5 className="text-white/90 font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRightIcon size={16} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-white/70">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-white/5 text-white/90 py-1 rounded-md"
                      >
                        {skill}
                      </Badge>
                    ))}
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
