
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ShieldAlert } from "lucide-react";

const Forbidden = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "403 Error: User attempted to access forbidden resource:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-6">
      <div className="glass-card p-12 max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 text-red-400 mb-6">
          <ShieldAlert size={36} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-200">403</h1>
        <p className="text-xl text-white/80 mb-8">Access Forbidden. You don't have permission to access this resource.</p>
        
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

export default Forbidden;
