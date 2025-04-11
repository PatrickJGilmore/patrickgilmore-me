
import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/index";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";

// Create a client with better cache config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // 1 minute
      gcTime: 300000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});

const App = () => {
  // Force dark mode and ensure content visibility for SEO
  useEffect(() => {
    // Mark document as loaded for prerendering
    document.documentElement.classList.add('app-loaded');
    document.documentElement.classList.add('dark');

    // Immediately force all content to be visible without any animations or transitions
    const forceVisibility = () => {
      document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, a, span, div, li, nav, button').forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1';
          el.style.visibility = 'visible';
          el.style.display = el.style.display === 'none' ? 'block' : el.style.display;
          el.style.transform = 'none';
          el.style.transition = 'none';
          el.style.animation = 'none';
          // Ensure text has visible color
          if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'SPAN', 'LI'].includes(el.tagName)) {
            el.style.color = '#ffffff';
          }
        }
      });
      
      // Signal prerender complete
      document.dispatchEvent(new Event('prerender-complete'));
    };

    // Apply immediately and after a delay to catch any late-rendered content
    forceVisibility();
    setTimeout(forceVisibility, 500);
    setTimeout(forceVisibility, 1500); // Extra run for safety
    
    // Remove any animation classes
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      if (el instanceof HTMLElement) {
        el.classList.forEach(className => {
          if (className.startsWith('animate-')) {
            el.classList.remove(className);
          }
        });
      }
    });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Patrick Gilmore - IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management. Expert in transforming operations through technical excellence." />
            <title>Patrick Gilmore | IT Leadership & Technical Excellence</title>
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Patrick Gilmore" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Patrick Gilmore | IT Leadership & Technical Excellence" />
            <meta property="og:description" content="Patrick Gilmore - IT Leader with 25+ years experience in technical leadership, enterprise systems, and team management." />
            <meta property="og:url" content="https://patrickgilmore.me/" />
            
            {/* Additional SEO meta tags */}
            <meta name="keywords" content="IT Leadership, Technical Excellence, Enterprise Systems, Team Management, Patrick Gilmore, Production Support, IT Strategy" />
            <style>{`
              /* Ensure all content is visible for crawlers */
              html, body, #root, [id], [class] {
                opacity: 1 !important;
                visibility: visible !important;
              }
              h1, h2, h3, h4, h5, h6, p, a, span, div, li {
                opacity: 1 !important;
                visibility: visible !important;
                color: #ffffff !important;
              }
            `}</style>
          </Helmet>
          <Toaster />
          <SonnerToaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/403" element={<Forbidden />} />
              {/* Redirects for SEO */}
              <Route path="/index.html" element={<Navigate to="/" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about-me" element={<Navigate to="/#about" replace />} />
              <Route path="/skills" element={<Navigate to="/#skills" replace />} />
              <Route path="/experience" element={<Navigate to="/#experience" replace />} />
              <Route path="/awards" element={<Navigate to="/#awards" replace />} />
              <Route path="/activities" element={<Navigate to="/#activities" replace />} />
              <Route path="/testimonials" element={<Navigate to="/#testimonials" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              {/* 404 for all other routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
