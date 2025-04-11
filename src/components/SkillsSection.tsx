
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
      name: "Cloud Infrastructure & Operations",
      icon: <Server className="h-7 w-7" />,
      description: "Expertise in cloud platforms, system administration, and IT operations.",
      skills: [
        { name: "Azure", url: "https://azure.microsoft.com/" },
        { name: "Google Workspace", url: "https://workspace.google.com/" },
        { name: "Linux", url: "https://www.linux.org/" },
        { name: "Windows Server", url: "https://www.microsoft.com/en-us/windows-server" },
        { name: "System Administration" },
        { name: "Cloudflare", url: "https://www.cloudflare.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
        { name: "SSMS", url: "https://learn.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms" },
        { name: "Incident Management" },
        { name: "OpsGenie", url: "https://www.atlassian.com/software/opsgenie" }
      ]
    },
    {
      name: "Engineering Leadership",
      icon: <Users className="h-7 w-7" />,
      description: "Driving high-performing teams, projects, and processes through strong leadership.",
      skills: [
        { name: "Vendor Management" },
        { name: "Team Leadership" },
        { name: "Performance Management" },
        { name: "Process Optimization" },
        { name: "SDLC" },
        { name: "Jira Service Management", url: "https://www.atlassian.com/software/jira/service-management" },
        { name: "Footprints", url: "https://www.bmc.com/it-solutions/footprints-service-core.html" },
        { name: "ClickUp", url: "https://clickup.com/" },
        { name: "Aha", url: "https://www.aha.io/" },
        { name: "Atlassian Suite", url: "https://www.atlassian.com/" }
      ]
    },
    {
      name: "Software Development & Automation",
      icon: <Code className="h-7 w-7" />,
      description: "Building, scripting, and automating software and workflows for efficiency.",
      skills: [
        { name: "PowerShell", url: "https://learn.microsoft.com/en-us/powershell/" },
        { name: "SQL", url: "https://www.microsoft.com/en-us/sql-server/" },
        { name: "GitHub", url: "https://github.com/" },
        { name: "VisualCron", url: "https://www.visualcron.com/" },
        { name: "MoveIT", url: "https://www.progress.com/moveit" },
        { name: "Postman/API Testing", url: "https://www.postman.com/" },
        { name: "Octopus", url: "https://octopus.com/" },
        { name: "Python", url: "https://www.python.org/" },
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", url: "https://reactjs.org/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "OpenAI APIs", url: "https://openai.com/api/" },
        { name: "AI-Powered Automation" },
        { name: "ChatGPT", url: "https://chatgpt.com/" }
      ]
    },
    {
      name: "Strategy & Communication",
      icon: <BarChart3 className="h-7 w-7" />,
      description: "Aligning technical vision with business goals through strategic thinking and clear communication.",
      skills: [
        { name: "Strategic Planning" },
        { name: "Problem Solving" },
        { name: "Communication" },
        { name: "Mentoring" },
        { name: "Project Management" },
        { name: "Technical Writing" },
        { name: "Glean", url: "https://www.glean.com/" },
        { name: "Microsoft Office", url: "https://www.microsoft.com/en-us/microsoft-365/microsoft-office" },
        { name: "Slack", url: "https://slack.com/" },
        { name: "Microsoft Teams", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" },
        { name: "HubSpot", url: "https://www.hubspot.com/" }
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
