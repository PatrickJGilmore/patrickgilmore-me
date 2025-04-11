
import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/index";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
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
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
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
