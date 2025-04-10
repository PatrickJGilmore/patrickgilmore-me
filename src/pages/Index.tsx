import { useEffect } from 'react';
import Head from 'next/head'; // Replaced react-helmet
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AwardsSection from '@/components/AwardsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // --- Scroll/Observer Logic (Keep your existing code) ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            entry.target.classList.add('animate-fade-in-ultra-fast');
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'none';
            }
          }
        });
      },
      { 
        threshold: [0, 0.01, 0.1],
        rootMargin: '0px 0px -2% 0px'
      }
    );

    document.querySelectorAll('section').forEach(section => {
      if (section instanceof HTMLElement) {
        section.style.willChange = 'opacity, transform';
        section.style.opacity = '1';
        section.style.transform = 'none';
      }
      observer.observe(section);
    });

    // Smooth scrolling (unchanged)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId?.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            history.pushState(null, '', targetId);
          }
        }
      });
    });

    // --- New: Deferred Script Loading ---
    const loadGTM = () => {
      const gtmScript = document.createElement('script');
      gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-B0190LKKP1';
      gtmScript.async = true;
      document.body.appendChild(gtmScript);
      
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-B0190LKKP1');
    };

    const loadGPT = () => {
      const gptScript = document.createElement('script');
      gptScript.src = 'https://cdn.gpteng.co/gptengineer.js';
      gptScript.defer = true;
      document.body.appendChild(gptScript);
    };

    // Load after page is idle
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        loadGTM();
        loadGPT(); // Remove if unused
      });
    } else {
      window.addEventListener('load', () => {
        loadGTM();
        loadGPT(); // Remove if unused
      });
    }

    return () => {
      observer.disconnect();
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden">
      {/* Replaced Helmet with Next.js Head */}
      <Head>
        <title>Patrick Gilmore | IT Leadership & Technical Excellence</title>
        <meta name="description" content="Patrick Gilmore - IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management." />
        <meta name="keywords" content="IT Leadership, Technical Excellence, Enterprise Systems, Team Management, Patrick Gilmore" />
      </Head>
      
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
