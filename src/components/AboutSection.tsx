
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
      className={`glass-card p-6 transition-all duration-700 transform hover:scale-105 hover:shadow-xl hover:bg-white/8 ${
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
              <h2 className="section-title">IT Visionary & Leader</h2>
              <h3 className="section-subtitle mb-8">Transforming Operations Through Technical Excellence</h3>
              
              <div className="space-y-6 text-white/80 text-left">
                <p>
                  As an IT leader with over 25 years of industry experience, I've established a reputation for excellence in developing and implementing strategic initiatives that drive business growth and innovation. My leadership approach combines technical expertise with a deep understanding of business needs to deliver transformative solutions.
                </p>
                <p>
                  I excel in building and mentoring high-performing teams, fostering a culture of collaboration and innovation that consistently exceeds expectations. Currently serving as a Senior Production Support Analyst and Acting Manager for a Production Support Team, I oversee workloads, resolve team disputes, write performance reviews, and handle all managerial responsibilities while maintaining technical excellence.
                </p>
                <p>
                  My technical expertise spans across enterprise systems administration, development, and infrastructure management, with proficiency in Azure, Google Workspace, Atlassian products, OpSgenie, Aha, ClickUp, Footprints, GitHub, SQL databases, and automation tools like PowerShell and VisualCron.
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
