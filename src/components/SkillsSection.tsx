
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Cloud, 
  Users, 
  Code,
  BarChart3, 
  CheckCircle2, 
  Workflow,
  Layers
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
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
      icon: <Cloud className="h-7 w-7" />,
      description: "Expertise across major cloud and enterprise platforms to drive business efficiency",
      skills: [
        "Azure", "Google Workspace", "Atlassian Suite", "OpSgenie", 
        "HubSpot", "Aha", "ClickUp", "Footprints", "Glean"
      ]
    },
    {
      name: "Technical Support & Management",
      icon: <Users className="h-7 w-7" />,
      description: "Leading teams and processes with efficiency and technical excellence",
      skills: [
        "Incident Management", "Vendor Management", "Team Leadership", 
        "Performance Management", "Process Optimization", "SDLC"
      ]
    },
    {
      name: "Development & Automation",
      icon: <Code className="h-7 w-7" />,
      description: "Creating solutions that drive productivity and streamline operations",
      skills: [
        "PowerShell", "SQL", "GitHub/Version Control", 
        "VisualCron", "MoveIT", "Postman/API Testing"
      ]
    },
    {
      name: "Leadership & Soft Skills",
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Building high-performing teams through mentorship and strategic vision",
      skills: [
        "Strategic Planning", "Team Management", "Problem Solving", 
        "Communication", "Mentoring", "Project Management"
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-gradient-to-b from-[#0b101e] to-[#151f38]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="section-title">Technical Proficiency</h2>
          <h3 className="section-subtitle">Enterprise Systems & Leadership Excellence</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`glass-card p-7 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mr-4">
                  {category.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-white/60 mb-6 text-sm">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className={`transition-all duration-500 bg-white/5 hover:bg-white/10 text-white/90 py-1.5 px-3 rounded-lg ${
                          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: `${(index * 100) + (i * 75)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {index === 0 && (
                <div className={`mt-8 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Enterprise Systems Integration</span>
                    <span className="text-sm font-medium text-white/60">Advanced</span>
                  </div>
                  <Progress value={95} className="h-1.5 bg-white/5" />
                </div>
              )}
              
              {index === 1 && (
                <div className={`mt-8 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Team Leadership</span>
                    <span className="text-sm font-medium text-white/60">Expert</span>
                  </div>
                  <Progress value={98} className="h-1.5 bg-white/5" />
                </div>
              )}
              
              {index === 2 && (
                <div className={`mt-8 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Automation & Scripting</span>
                    <span className="text-sm font-medium text-white/60">Advanced</span>
                  </div>
                  <Progress value={90} className="h-1.5 bg-white/5" />
                </div>
              )}
              
              {index === 3 && (
                <div className={`mt-8 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white/80">Strategic Planning</span>
                    <span className="text-sm font-medium text-white/60">Expert</span>
                  </div>
                  <Progress value={95} className="h-1.5 bg-white/5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
