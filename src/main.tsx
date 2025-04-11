
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = document.getElementById("root");
if (root) {
  // Set the root to be visible immediately for SEO
  root.style.opacity = '1';
  root.style.visibility = 'visible';
  
  // Ensure content is visible before hydration
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li').forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.color = '#ffffff';
    }
  });
  
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
  
  // Force immediate visibility for SEO crawlers after hydration
  setTimeout(() => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div, li').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.color = '#ffffff';
        el.style.transform = 'none';
        el.style.transition = 'none';
      }
    });
    
    // Signal prerendering complete
    document.dispatchEvent(new Event('prerender-complete'));
  }, 100);
} else {
  console.error("Root element not found");
}
