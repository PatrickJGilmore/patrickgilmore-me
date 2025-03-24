
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AwardsSection from '@/components/AwardsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import ContactSection from '@/components/ContactSection';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Add scroll reveal effect
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Only add animations on desktop
        if (!isMobile) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          } else {
            // Remove the animation class when element is out of view
            // This allows for the animation to trigger again when scrolling back
            entry.target.classList.remove('animate-fade-in');
          }
        }
      });
    };

    // Create observer with improved options for better triggering
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Implement smooth scrolling with auto-centering
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Get the height of any fixed header if present
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            
            // Calculate the scroll position to center the section in viewport
            const elementRect = targetElement.getBoundingClientRect();
            const elementTop = elementRect.top + window.pageYOffset;
            
            // Just position beneath header, don't try to center
            const scrollPosition = elementTop - navbarHeight;
            
            // Smooth scroll to target
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
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
  }, [isMobile]);

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
