
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6">
      <div className="glass-card p-12 max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
          <AlertTriangle size={36} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">404</h1>
        <p className="text-xl text-white/80 mb-8">Oops! The page you're looking for doesn't exist.</p>
        
        <a 
          href="/"
          className="btn-primary inline-flex items-center justify-center gap-2"
        >
          <Home size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
