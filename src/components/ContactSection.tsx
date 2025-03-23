
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
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
      // This would be replaced with your actual email service
      // For example, using EmailJS, Formspree, or a custom API endpoint
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <h3 className="section-subtitle">Let's Discuss Your Project</h3>
        </div>

        <div 
          ref={sectionRef}
          className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12"
        >
          {/* Contact Info */}
          <div className={`md:col-span-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <p className="text-white/70 mb-8">
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:contact@patrickgilmore.me" 
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      contact@patrickgilmore.me
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Connect</h4>
                    <a 
                      href="https://www.linkedin.com/in/patrickjgilmore/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`md:col-span-3 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">
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
                    <label htmlFor="email" className="block text-white/80 mb-2">
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
                  <label htmlFor="subject" className="block text-white/80 mb-2">
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
                  <label htmlFor="message" className="block text-white/80 mb-2">
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
                  className="btn-primary w-full flex items-center justify-center gap-2"
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
