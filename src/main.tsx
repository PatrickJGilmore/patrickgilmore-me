
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add a script to help search engines see content
const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

// Create root and render app
const root = document.getElementById("root");
if (root) {
  // For SEO purposes, make sure the root is visible
  if (isBot) {
    root.style.display = "block";
    root.style.visibility = "visible";
    root.style.opacity = "1";
  }
  
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}

// For SEO, ensure all content is immediately visible to crawlers
if (isBot) {
  // Force all elements to be visible to crawlers
  setTimeout(() => {
    document.querySelectorAll('*').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.style.display = el.style.display === "none" ? "block" : el.style.display;
      }
    });
  }, 1000);
}
