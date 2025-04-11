
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
  
  // Emit an event when app is rendered to help prerendering
  document.dispatchEvent(new Event('app-rendered'));
} else {
  console.error("Root element not found");
}
