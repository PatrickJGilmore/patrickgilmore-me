
// This script helps ensure content is properly prerendered
document.addEventListener('DOMContentLoaded', function() {
  console.log('Prerender script running...');

  // Force all text to be visible for SEO crawlers
  const allElements = document.querySelectorAll('body *');
  allElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.display = el.style.display === 'none' ? 'block' : el.style.display;
      
      // Ensure text is visible by setting color with good contrast
      if (el.tagName === 'P' || el.tagName.startsWith('H') || el.tagName === 'A' || 
          el.tagName === 'SPAN' || el.tagName === 'DIV' || el.tagName === 'LI') {
        el.style.color = el.tagName === 'A' ? '#3b82f6' : '#ffffff';
        el.style.textShadow = 'none';
      }
    }
  });

  // Add static SEO content for crawlers
  const addStaticSEOContent = () => {
    if (!document.querySelector('.static-seo-content')) {
      const seoContent = document.createElement('div');
      seoContent.className = 'static-seo-content';
      seoContent.style.cssText = 'position:absolute; left:-9999px; top:0; height:1px; width:1px; overflow:hidden';
      
      seoContent.innerHTML = `
        <h1>Patrick Gilmore - Strategic Leader in FinTech IT Operations</h1>
        <p>IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management.</p>
        <nav>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#awards">Awards</a></li>
            <li><a href="/#activities">Activities</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/patrickjgilmore/">LinkedIn</a></li>
          </ul>
        </nav>
      `;
      
      document.body.appendChild(seoContent);
    }
  };
  
  // Add static content for SEO
  addStaticSEOContent();

  // Specifically ensure text elements are visible
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li');
  textElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
      el.style.transition = 'none';
      el.style.color = el.tagName === 'A' ? '#3b82f6' : '#ffffff';
    }
  });
  
  // Find and expose all links for SEO
  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    if (link instanceof HTMLElement) {
      link.style.opacity = '1';
      link.style.visibility = 'visible';
      link.style.color = '#3b82f6';
      link.style.textDecoration = 'underline';
    }
  });
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
  
  // Signal that prerendering is complete
  console.log('Dispatching prerender-complete event');
  document.dispatchEvent(new Event('prerender-complete'));
}, { once: true });

// Additional event to ensure content is visible even after React hydration
window.addEventListener('load', function() {
  setTimeout(() => {
    // Force visibility again after any potential React hydration
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li, nav, ul, ol').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.color = el.tagName === 'A' ? '#3b82f6' : '#ffffff';
      }
    });
    
    // Ensure all links are visible and underlined for better SEO detection
    document.querySelectorAll('a[href]').forEach(link => {
      if (link instanceof HTMLElement) {
        link.style.color = '#3b82f6';
        link.style.textDecoration = 'underline';
        link.style.opacity = '1';
        link.style.visibility = 'visible';
      }
    });
    
    console.log('Additional visibility enforcement complete');
  }, 100);
});
