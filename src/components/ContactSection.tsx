
import { useState, useRef, useEffect } from 'react';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setSending(true);

      // Form submission is handled by Netlify automatically
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0c1525]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <h3 className="section-subtitle">Let's Discuss Your IT Challenges</h3>
        </div>

        <div 
          ref={sectionRef}
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:patrick@patrickgilmore.me" className="text-white/70 hover:text-white transition-colors">
                    patrick@patrickgilmore.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-white/70">Tampa, Florida, USA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/patrickjgilmore/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    patrickjgilmore
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send me a Message</h3>
            <p className="text-white/60 mb-6">
              I'm interested in discussing your IT challenges and how I can help your organization succeed.
            </p>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="contact-input" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="contact-input" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5} 
                  className="contact-input" 
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={sending}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
