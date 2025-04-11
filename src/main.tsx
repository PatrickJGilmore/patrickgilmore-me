
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = document.getElementById("root");
if (root) {
  // Set the root to be visible immediately for SEO
  root.style.opacity = '1';
  root.style.visibility = 'visible';
  
  // Ensure content is visible before hydration - extremely important for SEO
  document.querySelectorAll('body, section, h1, h2, h3, h4, h5, h6, p, a, span, div, li, nav, ul, ol').forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      
      // Ensure text has visible color
      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'SPAN', 'LI'].includes(el.tagName)) {
        el.style.color = '#ffffff';
        el.style.textShadow = 'none';
      }
      
      // Force display if hidden
      if (el.style.display === 'none') {
        el.style.display = el.tagName === 'DIV' || el.tagName === 'SECTION' ? 'block' : 'inline';
      }
    }
  });
  
  // Add no-JS fallback content to ensure SEO crawlers can see content
  const addStaticContent = () => {
    const staticContent = `
      <div style="position:absolute; left:-9999px; top:0; height:1px; width:1px; overflow:hidden">
        <h1>Patrick Gilmore - Strategic Leader in FinTech IT Operations</h1>
        <p>IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management.</p>
        <h2>About Me</h2>
        <p>Experienced IT operations leader with over 25 years in FinTech industry.</p>
        <h2>Skills</h2>
        <p>Technical leadership, team management, enterprise systems, automation.</p>
        <h2>Experience</h2>
        <p>Senior Production Support Analyst at Qolo, IT Manager at Exela Technologies.</p>
        <h2>Contact</h2>
        <p>Connect with Patrick Gilmore on <a href="https://www.linkedin.com/in/patrickjgilmore/">LinkedIn</a></p>
      </div>
    `;
    
    if (!document.querySelector('.seo-static-content')) {
      const div = document.createElement('div');
      div.className = 'seo-static-content';
      div.innerHTML = staticContent;
      document.body.appendChild(div);
    }
  };
  
  // Add static content before React hydration
  addStaticContent();
  
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
  
  // Force immediate visibility for SEO crawlers after hydration
  setTimeout(() => {
    document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, a, span, div, li, nav, ul, ol').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.color = el.tagName === 'A' ? '#3b82f6' : '#ffffff';
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
