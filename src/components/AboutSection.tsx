
import { Award, Cloud, Users } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AboutCard = ({ icon, title, description, delay }: AboutCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`glass-card p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col items-start">
        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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

  return (
    <section id="about" className="py-28 bg-[#050a15]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="section-title">IT Operations Visionary & Leader</h1>
              <h2 className="section-subtitle mb-8">Transforming Operations Through Technical Excellence</h2>
              
              <div className="space-y-6 text-white/80 text-left">
                <p>
                  As an IT leader with over 25 years of industry experience, I have built a reputation for driving business growth through technology. I develop and implement strategic IT initiatives that fuel innovation and optimize operations. In roles spanning financial technology (FinTech) and enterprise services, I combine deep technical expertise with business acumen to deliver transformative results.
                </p>
                <p>
                  Currently, I serve as a Senior Production Support Analyst and Acting Production Support Manager at Qolo, a leading FinTech payments platform. In this capacity, I oversee end-to-end IT operations support – managing team workloads, resolving complex issues, mentoring staff, and handling all managerial responsibilities – all while maintaining hands-on technical involvement. My leadership style emphasizes collaboration, accountability, and continuous improvement to exceed expectations.
                </p>
                <p>
                  I pride myself on building and mentoring high-performing teams that deliver consistent results. I foster a culture of innovation and service excellence. This blend of technical know-how and people-focused leadership has enabled me to consistently elevate IT departments’ performance and reliability.
                </p>
                <p>
                  My technical background spans enterprise systems administration, software development, and cloud infrastructure management. I’m proficient in a wide range of tools and platforms, including Microsoft Azure cloud services, Google Workspace productivity suite, the Atlassian collaboration stack (Jira, Confluence, OpsGenie), as well as HubSpot CRM, Aha! roadmapping, ClickUp project management, and BMC FootPrints IT service management. I also have robust experience with scripting and automation (PowerShell, VisualCron), version control (GitHub), SQL databases, managed file transfer (MoveIT), and API testing tools (Postman). This breadth of expertise allows me to bridge gaps between infrastructure, development, and business needs effectively.
                </p>
              </div>
              
              <div className={`mt-8 ${isMobile ? 'text-center' : ''}`}>
                <a href="#contact" className="btn-primary">Let's Connect</a>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-1 gap-6">
              <AboutCard 
                icon={<Award size={24} />}
                title="Strategic IT Leadership"
                description="Building high-performing teams that consistently deliver tangible business value and drive innovation."
                delay={100}
              />
              <AboutCard 
                icon={<Cloud size={24} />}
                title="Technical Solutions Expertise"
                description="Specializing in enterprise systems, cloud computing, automation, and data management solutions."
                delay={300}
              />
              <AboutCard 
                icon={<Users size={24} />}
                title="Team Management & Mentorship"
                description="Guiding technical professionals to achieve their potential while fostering a collaborative culture."
                delay={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
