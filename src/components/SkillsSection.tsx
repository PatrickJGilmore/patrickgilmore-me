
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
  LifeBuoy,
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
      name: "Cloud & Production Systems",
      icon: <Server className="h-7 w-7" />,
      description: "Ensuring 24/7 reliability of enterprise infrastructure and business-critical applications",
      skills: [
        { name: "Azure", url: "https://azure.microsoft.com/" },
        { name: "Linux", url: "https://www.linux.org/" },
        { name: "Windows Server", url: "https://www.microsoft.com/en-us/windows-server" },
        { name: "System Administration" },
        { name: "Cloudflare", url: "https://www.cloudflare.com/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "Active Directory" },
        { name: "Disaster Recovery" },
        { name: "Troubleshooting" },
        { name: "Networking" },
        { name: "Microsoft SQL Server", url: "https://www.microsoft.com/en-us/sql-server" },
        { name: "OpsGenie", url: "https://www.atlassian.com/software/opsgenie" },
        { name: "SSMS", url: "https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms" }
      ]
    },
    {
      name: "Technical Operations Leadership",
      icon: <LifeBuoy className="h-7 w-7" />,
      description: "Directing incident response and optimizing production workflows",
      skills: [
        { name: "Incident Management" },
        { name: "Root Cause Analysis" },
        { name: "Process Improvement" },
        { name: "Application Support" },
        { name: "Jira Service Management", url: "https://www.atlassian.com/software/jira/service-management" },
        { name: "Octopus", url: "https://octopus.com/" },
        { name: "ClickUp", url: "https://clickup.com/" },
        { name: "Footprints", url: "https://www.bmc.com/it-solutions/footprints-service-core.html" },
        { name: "Production Support" },
        { name: "Software Documentation" },
        { name: "Performance Monitoring" }
      ]
    },
    {
      name: "Business-Aligned Engineering",
      icon: <Code className="h-7 w-7" />,
      description: "Developing solutions that bridge technical and organizational needs",
      skills: [
        { name: "Python", url: "https://www.python.org/" },
        { name: "PowerShell", url: "https://learn.microsoft.com/en-us/powershell/" },
        { name: "SQL", url: "https://www.microsoft.com/en-us/sql-server/" },
        { name: "React", url: "https://reactjs.org/" },
        { name: "SDLC" },
        { name: "Agile Methodologies" },
        { name: "Requirements Analysis" },
        { name: "GitHub", url: "https://github.com/" },
        { name: "Postman/API Testing", url: "https://www.postman.com/" },
        { name: "Aha", url: "https://www.aha.io/" },
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
      ]
    },
    {
      name: "Stakeholder Strategy",
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Translating system capabilities into business value",
      skills: [
        { name: "Vendor Management" },
        { name: "Enterprise Architecture" },
        { name: "Business Analysis" },
        { name: "Project Management" },
        { name: "Technical Writing" },
        { name: "Microsoft Office", url: "https://www.microsoft.com/en-us/microsoft-365/microsoft-office" },
        { name: "Slack", url: "https://slack.com/" },
        { name: "Microsoft Teams", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" },
        { name: "HubSpot", url: "https://www.hubspot.com/" },
        { name: "Strategic Planning" },
        { name: "Problem Solving" }
      ]
    }
  ];

  const endorsements = [
      { skill: "SDLC", count: 23, source: "Exela Technologies" },
      { skill: "Process Improvement", count: 12, source: "Cross-Functional Teams" },
      { skill: "Business Analysis", count: 18, source: "Cross-Functional Teams" }
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
