
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, Send, ExternalLink, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString()
      });
      
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-[#0b101e] to-[#050a15]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-title">Contact Me</h2>
          <h3 className="section-subtitle">Let's Elevate Your Technical Operations</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto grid md:grid-cols-5 gap-6 md:gap-12 px-2"
        >
          {/* Contact Info */}
          <div className={`md:col-span-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-card p-8 h-full relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/10 blur-[60px] pointer-events-none"></div>
              
              <h3 className="text-2xl font-semibold mb-6 text-left">Let's Connect</h3>
              
              <p className="text-white/70 mb-8 text-left">
                I'm open to discussing new opportunities, innovative ideas, or how I can contribute to your organization's technical excellence and leadership needs.
              </p>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Email</h4>
                    <p className="text-blue-300">
                      Send me a message using the form
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">LinkedIn</h4>
                    <div className="flex items-center">
                      <a 
                        href="https://www.linkedin.com/in/patrickjgilmore/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        patrickjgilmore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`md:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-card p-8 relative overflow-hidden transition-all duration-300">
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-blue-500/5 blur-[50px] pointer-events-none"></div>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 relative z-10" 
                data-netlify="true" 
                name="contact"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contact-input"
                    placeholder="I'd like to discuss..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
