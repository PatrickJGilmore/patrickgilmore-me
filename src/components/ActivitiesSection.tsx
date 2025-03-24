
import { useState, useEffect, useRef } from 'react';
import { Heart, Users, Clock } from 'lucide-react';

interface ActivityProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  period: string;
  description: string;
  delay: number;
}

const Activity = ({ icon, title, organization, period, description, delay }: ActivityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const activityRef = useRef<HTMLDivElement>(null);

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

    if (activityRef.current) {
      observer.observe(activityRef.current);
    }

    return () => {
      if (activityRef.current) {
        observer.unobserve(activityRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={activityRef}
      className={`glass-card p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="p-4 rounded-lg bg-primary/10 text-primary shrink-0 w-auto mx-auto md:mx-0">
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-center md:text-left">
            <span className="text-blue-300">{organization}</span>
            <span className="hidden sm:inline-block text-white/40">•</span>
            <div className="flex items-center justify-center md:justify-start text-white/60">
              <Clock size={14} className="mr-1" />
              <span>{period}</span>
            </div>
          </div>
          <p className="text-white/80 text-center md:text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ActivitiesSection = () => {
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

  const activities = [
    {
      icon: <Users size={28} />,
      title: "Community Volunteer",
      organization: "Pasco/Hernando Helping Children and Families In Need",
      period: "Nov 2018 - Present",
      description: "Working alongside compassionate individuals to provide vital resources including food, clothing, and school supplies to vulnerable families in our community. This experience has strengthened my ability to collaborate effectively, demonstrate empathy, and adapt to diverse situations."
    },
    {
      icon: <Heart size={28} />,
      title: "Animal Welfare Volunteer",
      organization: "The Runaways Animal Rescue",
      period: "Jan 2024 - Present",
      description: "Contributing to the nurturing and rehabilitation of sick or unwanted animals, providing compassionate care and individualized attention to address their medical needs and support their emotional well-being. This role has reinforced my ability to demonstrate initiative, adaptability, and effective problem-solving skills."
    }
  ];

  return (
    <section id="activities" className="py-24 bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Activities
          </span>
          <h2 className="section-title">Community Involvement</h2>
          <h3 className="section-subtitle">Giving Back & Volunteering</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto grid gap-8"
        >
          {activities.map((activity, index) => (
            <Activity 
              key={index}
              icon={activity.icon}
              title={activity.title}
              organization={activity.organization}
              period={activity.period}
              description={activity.description}
              delay={index * 200}
            />
          ))}
          
          <div className={`mt-8 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-white/70 italic">
              Beyond my professional life, I'm passionate about making a positive impact in my community and supporting causes that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
