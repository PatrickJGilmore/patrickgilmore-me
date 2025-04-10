
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, Send, ExternalLink, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Email obfuscation logic
  const emailParts = ['contact', 'patrick', 'gilmore', 'me'];
  const getObfuscatedEmail = () => {
    return `${emailParts[0]}@${emailParts[1]}${emailParts[2]}.${emailParts[3]}`;
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getObfuscatedEmail()}`;
  };

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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const form = formRef.current;
      if (!form) throw new Error("Form element not found");

      const formData = new FormData(form);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setFormStatus('success');
      toast.success('Message sent successfully! I will get back to you soon.');
      resetForm();
      
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      toast.error('Failed to send message. Please try again or contact directly via LinkedIn.');
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
                      <a 
                        href="#" 
                        onClick={handleEmailClick}
                        className="hover:underline"
                        aria-label="Send me an email"
                      >
                        Send me an email
                      </a>
                    </p>
                    <p className="text-white/60 text-sm mt-1">
                      Or use the form on the right
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
          
          <div className={`md:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-card p-8 relative overflow-hidden transition-all duration-300">
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-blue-500/5 blur-[50px] pointer-events-none"></div>
              
              {formStatus === 'success' && (
                <Alert className="mb-6 border-green-500/50 bg-green-500/10 text-green-400">
                  <AlertTitle className="text-green-300">Message Sent Successfully!</AlertTitle>
                  <AlertDescription>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </AlertDescription>
                </Alert>
              )}
              
              {formStatus === 'error' && (
                <Alert className="mb-6 border-red-500/50 bg-red-500/10 text-red-400">
                  <AlertTitle className="text-red-300">Unable to Send Message</AlertTitle>
                  <AlertDescription>
                    There was a problem sending your message. Please try again or reach out via LinkedIn.
                  </AlertDescription>
                </Alert>
              )}
              
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden input for Netlify form name */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
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
                  />
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
