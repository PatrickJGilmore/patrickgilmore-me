import { ViteSSG } from 'vite-ssg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About';

// Define routes
const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

// Create router
const router = createBrowserRouter(routes);

// Render with ViteSSG
export const ViteSSGApp = ViteSSG(
  <RouterProvider router={router} />,
  ({ app }) => {
    // Optional: Add global providers here if needed
  }
);
