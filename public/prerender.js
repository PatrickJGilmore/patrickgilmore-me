
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
        el.style.color = '#ffffff';
        el.style.textShadow = 'none';
      }
    }
  });

  // Specifically ensure text elements are visible
  const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li');
  textElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
      el.style.transition = 'none';
      el.style.color = '#ffffff';
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
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.color = '#ffffff';
      }
    });
    console.log('Additional visibility enforcement complete');
  }, 100);
});
