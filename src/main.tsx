
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced bot detection for better SEO handling
const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse|pagespeed|prerender|headless|curl|wget|baiduspider|yandexbot|bingbot|duckduckbot|slurp/i.test(navigator.userAgent);

// Create root and render app
const root = document.getElementById("root");
if (root) {
  // For SEO purposes, make sure the root is visible
  if (isBot) {
    root.style.display = "block";
    root.style.visibility = "visible";
    root.style.opacity = "1";
    
    // Add a data attribute to help with rendering detection
    root.setAttribute('data-bot-detected', 'true');

    // Pre-expose key elements for search engines
    const ensureVisibility = () => {
      // Make all screen reader elements visible to bots
      document.querySelectorAll('.sr-only').forEach(el => {
        if (el instanceof HTMLElement) {
          const clone = el.cloneNode(true);
          if (clone instanceof HTMLElement) {
            clone.style.position = "static";
            clone.style.width = "auto";
            clone.style.height = "auto";
            clone.style.overflow = "visible";
            clone.style.clip = "auto";
            clone.classList.remove("sr-only");
            el.parentNode?.appendChild(clone);
          }
        }
      });
    };

    // Execute before and after render
    ensureVisibility();
    setTimeout(ensureVisibility, 0);
  }
  
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}

// For SEO, ensure all content is immediately visible to crawlers
if (isBot) {
  // Helper function to ensure all content is visible
  const makeAllContentVisible = () => {
    // Ensure all elements are visible
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, li, span, div').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.style.display = el.style.display === "none" 
          ? (el.tagName === "SPAN" ? "inline" : "block") 
          : el.style.display;
      }
    });
    
    // Ensure all heading tags are properly exposed to search engines
    document.querySelectorAll('h1, h2, h3').forEach(el => {
      if (el instanceof HTMLElement) {
        // Make sure the parent elements are visible too
        let parent = el.parentElement;
        while (parent) {
          if (parent instanceof HTMLElement) {
            parent.style.opacity = "1";
            parent.style.visibility = "visible";
            parent.style.display = parent.style.display === "none" ? "block" : parent.style.display;
          }
          parent = parent.parentElement;
        }
      }
    });
  };

  // Execute multiple times to catch all dynamic content
  makeAllContentVisible();
  setTimeout(makeAllContentVisible, 0);
  setTimeout(makeAllContentVisible, 100);
}
