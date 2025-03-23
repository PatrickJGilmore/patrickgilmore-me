
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

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
    <section id="experience" className="py-24 bg-[#1E293B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">My Experience</h2>
          <h3 className="section-subtitle">Professional Journey & Leadership</h3>
        </div>

        <div 
          ref={sectionRef} 
          className="max-w-5xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 w-px h-full bg-white/10 transform md:translate-x-[-50%] hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:mb-24 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline circle */}
                <div className="hidden md:block absolute left-[-8px] md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:translate-x-[-50%] mt-2 z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <div className="glass-card p-6 h-full">
                    <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {exp.type}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-blue-300 mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center text-white/60 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-white/60 mb-6">
                      <Briefcase size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-2 text-white/80">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
