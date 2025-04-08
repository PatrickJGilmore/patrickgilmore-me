
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
              <h1 className="section-title">IT Operations Leader & Innovator</h1>
              <h2 className="section-subtitle mb-8">Driving Excellence Through Technical Leadership</h2>
              
              <div className="space-y-6 text-white/80 text-left">
                <p>
                  With over 25 years of experience, I specialize in leading IT operations and production support teams within the financial technology (FinTech) industry. Currently, as Production Support Manager at Qolo—a leading FinTech payments platform—I manage team workloads, oversee critical IT operations, resolve complex issues, and mentor staff, all while staying hands-on with technical solutions. My leadership emphasizes collaboration, accountability, continuous improvement, and delivering exceptional system reliability and service excellence.
                </p>
                <p>
                  Throughout my career, I've combined deep technical expertise in enterprise systems administration, software development, and cloud infrastructure management with strategic business acumen. I have successfully driven automation initiatives, streamlined processes, and optimized system performance to achieve measurable operational improvements. My technical proficiency includes platforms and tools such as Microsoft Azure, Google Workspace, Atlassian suite (Jira, Confluence, OpsGenie), HubSpot CRM, Aha!, ClickUp, BMC FootPrints, SQL databases, GitHub, PowerShell scripting, VisualCron automation, MoveIT secure file transfers, and Postman API testing.
                </p>
                <p>
                  I take pride in building and mentoring high-performing teams that consistently deliver results. My people-focused leadership style fosters innovation, motivates teams, and bridges the gap between technology and business needs—enabling IT departments to support growth, innovation, and operational stability.
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
