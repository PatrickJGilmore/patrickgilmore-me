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
    // Function to force immediate visibility of all content
    const forceElementsVisible = () => {
      // Target all important content elements
      const elements = document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, a, span, div, li, button, nav');
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          // Override any styles that might hide content
          element.style.opacity = '1';
          element.style.visibility = 'visible';
          element.style.transform = 'none';
          element.style.transition = 'none';
          element.style.animation = 'none';
          
          // Ensure text elements have visible colors
          if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'SPAN', 'LI'].includes(element.tagName)) {
            element.style.color = '#ffffff';
            element.style.textShadow = 'none';
          }
          
          // Make sure display isn't none
          if (element.style.display === 'none') {
            element.style.display = 'block';
          }
        }
      });
      
      // Signal that content is ready for prerendering
      document.dispatchEvent(new Event('prerender-complete'));
    };
    
    // Remove any scroll or intersection observers that might affect rendering
    if (window.IntersectionObserver) {
      // Create a dummy observer to disable any existing ones
      const observer = new IntersectionObserver(() => {});
      observer.disconnect();
    }
    
    // Run visibility enforcement multiple times
    forceElementsVisible();
    setTimeout(forceElementsVisible, 100);
    setTimeout(forceElementsVisible, 500);
    setTimeout(forceElementsVisible, 1000);
    
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

    // Add static content fallback for crawlers
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      const robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    return () => {
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
        <style>{`
          /* Force content visibility for SEO */
          html, body, #root, main, div, section, article, header, footer, nav {
            opacity: 1 !important;
            visibility: visible !important;
          }
          h1, h2, h3, h4, h5, h6, p, a, span, li, ul, ol {
            opacity: 1 !important;
            visibility: visible !important;
            color: #ffffff !important;
            text-shadow: none !important;
          }
        `}</style>
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
