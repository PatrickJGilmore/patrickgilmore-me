
// This script helps ensure content is properly prerendered
document.addEventListener('DOMContentLoaded', function() {
  // Force all text to be visible for SEO crawlers
  const allElements = document.querySelectorAll('body *');
  allElements.forEach(el => {
    if (el.style) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.display = el.style.display === 'none' ? 'block' : el.style.display;
    }
  });
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
  
  // Signal that prerendering is complete
  document.dispatchEvent(new Event('prerender-complete'));
}, { once: true });
