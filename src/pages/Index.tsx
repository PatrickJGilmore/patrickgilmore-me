
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
  // Add smooth scroll effect without flickering
  useEffect(() => {
    // Create observer with improved options for better triggering
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Use requestAnimationFrame with debounce mechanism to avoid flickering
          if (entry.isIntersecting) {
            // Use RAF with small delay to smooth out transitions
            const raf = requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in');
            });
            return () => cancelAnimationFrame(raf);
          }
        });
      },
      { 
        threshold: 0.08,  // Lower threshold to start animation earlier
        rootMargin: '0px 0px -10% 0px' // Adjusted to reduce flickering
      }
    );

    // Observe all sections with a delay to prevent flickering
    const sectionTimer = setTimeout(() => {
      document.querySelectorAll('section').forEach(section => {
        // Pre-apply a transitional state to avoid harsh jumps
        section.style.opacity = '0.95';
        section.style.transform = 'translateY(5px)';
        observer.observe(section);
      });
    }, 100);

    // Implement smooth scrolling with optimized behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            
            // Calculate proper scroll position with offset
            const elementTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
            const offsetPosition = elementTop - navbarHeight - 10; // Added extra offset
            
            // Use RAF for smoother transitions
            window.requestAnimationFrame(() => {
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            });
            
            // Update URL hash without jumping
            history.pushState(null, '', targetId);
          }
        }
      });
    });

    return () => {
      clearTimeout(sectionTimer);
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
