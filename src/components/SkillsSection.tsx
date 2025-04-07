
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Cloud, 
  Users, 
  Code,
  BarChart3, 
  CheckCircle2, 
  Workflow,
  Layers,
  Server,
  WrenchIcon
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Array<{
    name: string;
    url?: string;
  }>;
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
      icon: <Server className="h-7 w-7" />,
      description: "Expertise across major cloud and enterprise platforms to drive business efficiency",
      skills: [
        { name: "Azure", url: "https://azure.microsoft.com/" },
        { name: "Google Workspace", url: "https://workspace.google.com/" },
        { name: "Atlassian Suite", url: "https://www.atlassian.com/" }, 
        { name: "OpsGenie", url: "https://www.atlassian.com/software/opsgenie" }, 
        { name: "HubSpot", url: "https://www.hubspot.com/" }, 
        { name: "Aha", url: "https://www.aha.io/" }, 
        { name: "ClickUp", url: "https://clickup.com/" }, 
        { name: "Footprints", url: "https://www.bmc.com/it-solutions/footprints-service-core.html" },
        { name: "Glean", url: "https://www.glean.com/" }
      ]
    },
    {
      name: "Technical Support & Management",
      icon: <Users className="h-7 w-7" />,
      description: "Leading teams and processes with efficiency and technical excellence",
      skills: [
        { name: "Incident Management" }, 
        { name: "Vendor Management" }, 
        { name: "Team Leadership" }, 
        { name: "Performance Management" }, 
        { name: "Process Optimization" }, 
        { name: "SDLC" }
      ]
    },
    {
      name: "Development & Automation",
      icon: <Code className="h-7 w-7" />,
      description: "Creating solutions that drive productivity and streamline operations",
      skills: [
        { name: "PowerShell", url: "https://learn.microsoft.com/en-us/powershell/" }, 
        { name: "SQL", url: "https://www.microsoft.com/en-us/sql-server/" }, 
        { name: "GitHub/Version Control", url: "https://github.com/" }, 
        { name: "VisualCron", url: "https://www.visualcron.com/" }, 
        { name: "MoveIT", url: "https://www.progress.com/moveit" }, 
        { name: "Postman/API Testing", url: "https://www.postman.com/" }
      ]
    },
    {
      name: "Leadership & Soft Skills",
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Building high-performing teams through mentorship and strategic vision",
      skills: [
        { name: "Strategic Planning" }, 
        { name: "Team Management" }, 
        { name: "Problem Solving" }, 
        { name: "Communication" }, 
        { name: "Mentoring" }, 
        { name: "Project Management" }
      ]
    }
  ];

  const endorsements = [
    { skill: "SDLC", count: 23, source: "Exela Technologies" },
    { skill: "Vendor Management", count: 20, source: "Multiple colleagues" },
    { skill: "Technical Leadership", count: 18, source: "Industry peers" }
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
              className={`glass-card p-7 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 mr-4">
                  {category.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-left">{category.name}</h3>
                  <p className="text-white/60 mb-6 text-sm">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      skill.url ? (
                        <a 
                          key={i}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-all duration-500 bg-white/5 hover:bg-white/10 text-white/90 py-1.5 px-3 rounded-lg ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`}
                          style={{ transitionDelay: `${(index * 100) + (i * 75)}ms` }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="bg-transparent hover:bg-transparent border-none p-0"
                          >
                            {skill.name}
                          </Badge>
                        </a>
                      ) : (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className={`transition-all duration-500 bg-white/5 text-white/90 py-1.5 px-3 rounded-lg ${
                            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                          }`}
                          style={{ transitionDelay: `${(index * 100) + (i * 75)}ms` }}
                        >
                          {skill.name}
                        </Badge>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* LinkedIn Endorsements */}
        <div className={`mt-16 max-w-4xl mx-auto glass-card p-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-center">LinkedIn Endorsements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {endorsements.map((endorsement, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-lg bg-white/5 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-300 mb-2">{endorsement.count}+</div>
                <div className="text-lg font-medium mb-1">{endorsement.skill}</div>
                <div className="text-sm text-white/60">Endorsed by {endorsement.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
