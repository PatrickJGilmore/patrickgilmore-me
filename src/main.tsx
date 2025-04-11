
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = document.getElementById("root");
if (root) {
  // Set the root to be visible immediately for SEO
  root.style.opacity = '1';
  root.style.visibility = 'visible';
  
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
  
  // Force immediate visibility for SEO crawlers
  setTimeout(() => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, div').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      }
    });
  }, 100);
} else {
  console.error("Root element not found");
}
