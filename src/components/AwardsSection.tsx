
import { useState, useEffect, useRef } from 'react';
import { Award, Trophy } from 'lucide-react';

const AwardsSection = () => {
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

  const awards = [
    {
      title: "Rock Star Award",
      organization: "Qolo",
      organizationUrl: "https://www.qolo.io/",
      date: "January 2023",
      description: "Recognized for exemplifying Qolo's core values: Collaboration, Innovation, Accountability, Integrity, and Bias for Action. This award celebrates exceptional contributions to the team and company success through leadership, technical excellence, and commitment to delivering outstanding results."
    }
  ];

  return (
    <section id="awards" className="py-24 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">My Awards</h2>
          <h3 className="section-subtitle">Recognition & Achievements</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto"
        >
          {awards.map((award, index) => (
            <div 
              key={index}
              className={`glass-card p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-lg bg-primary/10 text-primary flex-shrink-0 w-fit h-fit">
                  <Trophy size={28} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-left">{award.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <a 
                      href={award.organizationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:underline"
                    >
                      {award.organization}
                    </a>
                    <span className="hidden sm:inline-block text-white/40">•</span>
                    <span className="text-white/60">{award.date}</span>
                  </div>
                  <p className="text-white/80">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className={`mt-10 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-white/70 italic">
              Throughout my 25+ year career, I've received numerous commendations for excellence in technical leadership, innovation, and team management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
