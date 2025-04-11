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
import { Helmet } from 'react-helmet';

const Index = () => {
  // Force content visibility for SEO
  useEffect(() => {
    // Immediately make all content visible for SEO
    document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, a, span, div').forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
      }
    });
    
    // Create observer with better options for smoother animation but keeping content visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Apply immediate visibility
          if (entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1';
            entry.target.style.visibility = 'visible';
            entry.target.style.transform = 'none';
          }
        });
      },
      { 
        threshold: [0, 0.01, 0.1],
        rootMargin: '0px'
      }
    );

    // Pre-load all sections (prevent blank squares)
    document.querySelectorAll('section').forEach(section => {
      // Force immediate visibility for all sections for SEO
      if (section instanceof HTMLElement) {
        section.style.willChange = 'opacity, transform';
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.transform = 'none';
      }
      
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
        <meta property="og:title" content="Patrick Gilmore | IT Leadership & Technical Excellence" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patrickgilmore.me/" />
        <meta property="og:description" content="IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management." />
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
    </div>
  );
};

export default Index;
