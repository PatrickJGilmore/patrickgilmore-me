
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
              <h1 className="section-title">IT Operations Leader</h1>
              <h2 className="section-subtitle mb-8">Combining Technical Expertise with Strategic Leadership</h2>
              
              <div className="space-y-6 text-white/80 text-left">
                <p>
                  I am an IT operations leader with over 25 years of experience in IT operations and production support, primarily in the FinTech industry. I have a proven track record of keeping mission-critical systems running smoothly and reliably. Currently serving as Production Support Manager at Qolo, a FinTech payments platform, I lead a team dedicated to ensuring smooth, uninterrupted payment operations. Throughout my career, I have navigated fast-paced FinTech environments by combining deep technical expertise with strategic problem-solving.
                </p>
                <p>
                  My team leadership style thrives on mentoring and collaboration. I build high-performing teams by encouraging professional growth, open communication, and trust. With a hands-on approach, I work closely with cross-functional teams, breaking down silos and uniting people toward common goals. I am passionate about driving operational excellence and continuous improvement – refining processes and implementing best practices to boost efficiency and system reliability. I take pride in seeing my team members grow and succeed.
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
                description="Driving innovation and business growth by building high-performing teams focused on operational excellence."
                delay={100}
              />
              <AboutCard 
                icon={<Cloud size={24} />}
                title="Technical Solutions Expertise"
                description="Expertise in enterprise systems, cloud infrastructure, automation, scripting, and efficient data management."
                delay={300}
              />
              <AboutCard 
                icon={<Users size={24} />}
                title="Team Management & Mentorship"
                description="Developing and mentoring IT professionals within a collaborative, results-driven culture to achieve peak performance."
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
