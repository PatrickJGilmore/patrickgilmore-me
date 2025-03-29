
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AwardsSection from '@/components/AwardsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Add improved scroll effect
  useEffect(() => {
    // Create observer with better options for smoother animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Apply animation class immediately when the element starts to enter viewport
          // This prevents "gaps" from appearing during scroll
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-fast');
          }
        });
      },
      { 
        threshold: 0.01,  // Much lower threshold to trigger earlier
        rootMargin: '0px 0px -5% 0px' // Adjusted margin to trigger earlier
      }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Improved smooth scrolling implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementTop - navbarHeight;
            
            // Simpler smooth scroll with fewer calculations
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Update URL hash without triggering another scroll
            history.pushState(null, '', targetId);
          }
        }
      });
    });

    return () => {
      observer.disconnect();
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
    </div>
  );
};

export default Index;
