
import { useState, useEffect, useRef } from 'react';

interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const SkillsSection = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Enterprise Systems",
      icon: "bi:cloud-fill",
      skills: [
        { name: "Azure", proficiency: 90 },
        { name: "Google Workspace", proficiency: 95 },
        { name: "Atlassian Suite", proficiency: 88 },
        { name: "OpSgenie", proficiency: 85 },
        { name: "HubSpot", proficiency: 80 },
        { name: "Aha", proficiency: 85 },
      ]
    },
    {
      name: "Technical Support & Management",
      icon: "bi:gear-fill",
      skills: [
        { name: "Incident Management", proficiency: 95 },
        { name: "Vendor Management", proficiency: 90 },
        { name: "Team Leadership", proficiency: 92 },
        { name: "Performance Management", proficiency: 88 },
        { name: "Process Optimization", proficiency: 90 },
        { name: "SDLC", proficiency: 85 },
      ]
    },
    {
      name: "Development & Automation",
      icon: "fa6-solid:code",
      skills: [
        { name: "PowerShell", proficiency: 85 },
        { name: "SQL", proficiency: 82 },
        { name: "GitHub/Version Control", proficiency: 88 },
        { name: "VisualCron", proficiency: 90 },
        { name: "MoveIT", proficiency: 80 },
        { name: "Postman/API Testing", proficiency: 85 },
      ]
    },
    {
      name: "Soft Skills",
      icon: "fa6-solid:users",
      skills: [
        { name: "Team Management", proficiency: 95 },
        { name: "Strategic Planning", proficiency: 90 },
        { name: "Problem Solving", proficiency: 93 },
        { name: "Communication", proficiency: 92 },
        { name: "Mentoring", proficiency: 90 },
        { name: "Project Management", proficiency: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <h3 className="section-subtitle">Enterprise Technologies & Leadership</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`glass-card p-6 transition-all duration-700 delay-${categoryIndex * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                  <span className="iconify" data-icon={category.icon} data-width="24" data-height="24"></span>
                </span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/60">{skill.proficiency}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill"
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
