
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AwardsSection from '@/components/AwardsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Implement smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Update URL hash without jumping
            history.pushState(null, '', targetId);
          }
        }
      });
    });

    return () => {
      observer.disconnect();
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AwardsSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
