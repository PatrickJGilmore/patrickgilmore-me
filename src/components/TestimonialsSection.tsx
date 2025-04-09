
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Patrick's ability to manage crises and solve complex technical issues is exceptional. His calm demeanor and technical acumen made him an invaluable team lead.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "FinTech Solutions",
    rating: 5
  },
  {
    quote: "Working with Patrick transformed our support operations. His strategic approach to incident management reduced our response times by 40% within the first quarter.",
    author: "Michael Chen",
    position: "VP of Operations",
    company: "Global Payments Inc.",
    rating: 5
  },
  {
    quote: "Patrick's leadership during our system migration was outstanding. His ability to anticipate issues before they happened saved us countless hours of downtime.",
    author: "Jennifer Williams",
    position: "IT Director",
    company: "Enterprise Financial",
    rating: 5
  },
  {
    quote: "Few professionals can match Patrick's blend of technical expertise and people skills. He built bridges between our development and operations teams that transformed our delivery capabilities.",
    author: "David Rodriguez",
    position: "Lead Developer",
    company: "SecurePay Systems",
    rating: 5
  }
];

const TestimonialCard = ({ quote, author, position, company, rating }: TestimonialProps) => {
  return (
    <div className="glass-card p-6 md:p-8 h-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
          />
        ))}
      </div>
      
      <blockquote className="text-lg md:text-xl text-white/90 mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      <footer>
        <div className="font-medium text-white">{author}</div>
        <div className="text-sm text-white/70">{position} at {company}</div>
      </footer>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#0c1a34] to-[#050a15] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-[100px]"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
            <span className="text-blue-300 font-medium">What Others Say</span>
          </div>
          
          <h2 className="section-title">Testimonials</h2>
          
          <p className="section-subtitle max-w-3xl mx-auto">
            Feedback from colleagues and clients I've had the privilege to work with over my career
          </p>
        </div>

        <Carousel 
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-2">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20" />
            <CarouselNext className="relative static ml-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
