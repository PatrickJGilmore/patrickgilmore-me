
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
  
  // Add class to indicate app is loaded for prerendering
  document.documentElement.classList.add('app-loaded');
} else {
  console.error("Root element not found");
}
