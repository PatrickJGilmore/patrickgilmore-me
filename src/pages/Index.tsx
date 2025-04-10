import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Keep using react-helmet
// ... other imports unchanged

const Index = () => {
  useEffect(() => {
    // ... keep all your existing scroll/observer logic

    // Load GTM/GPT scripts (unchanged from previous version)
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
      <Helmet>
        <title>Patrick Gilmore | IT Leadership & Technical Excellence</title>
        <meta name="description" content="Patrick Gilmore - IT Leader with 25+ years experience..." />
        <meta name="keywords" content="IT Leadership, Technical Excellence..." />
      </Helmet>
      {/* ... rest of your JSX */}
    </div>
  );
};
