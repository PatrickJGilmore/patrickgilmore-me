
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AwardsSection from '@/components/AwardsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  // Add improved scroll effect
  useEffect(() => {
    // Create observer with better options for smoother animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Apply animation class immediately when the element is near viewport
          // This prevents gaps from appearing during scroll
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            // Set a much faster animation
            entry.target.classList.add('animate-fade-in-ultra-fast');
            
            // Ensure full visibility by casting to HTMLElement
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'none';
            }
          }
        });
      },
      { 
        threshold: [0, 0.01, 0.1],  // Multiple thresholds for smoother transitions
        rootMargin: '0px 0px -2% 0px' // Adjusted margin to trigger earlier
      }
    );

    // Pre-load all sections (prevent blank squares)
    document.querySelectorAll('section').forEach(section => {
      // Force immediate visibility for all sections to prevent blank squares
      // Using proper type checking for TypeScript
      if (section instanceof HTMLElement) {
        section.style.willChange = 'opacity, transform';
        section.style.opacity = '1';
        section.style.transform = 'none';
      }
      
      // Still observe for animation effects
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
            
            // Improved smooth scroll
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
      <Helmet>
        <meta name="description" content="Patrick Gilmore - IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management. Expert in transforming operations through technical excellence." />
        <title>Patrick Gilmore | IT Leadership & Technical Excellence</title>
        <meta name="keywords" content="IT Leadership, Technical Excellence, Enterprise Systems, Team Management, Patrick Gilmore, Production Support, IT Strategy" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <AwardsSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
