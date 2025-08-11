import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO at TechFlow",
      content: "Palzin Monitor saved us from a major outage. The AI-powered incident detection gave us insights we never had before.",
      rating: 5,
      company: "TechFlow"
    },
    {
      name: "Michael Rodriguez",
      title: "Product Manager at DataSync",
      content: "With Palzin Track, we finally understand our user behavior. It's transformed how we make product decisions.",
      rating: 5,
      company: "DataSync"
    },
    {
      name: "Emily Johnson",
      title: "Founder at StartupHub",
      content: "Palzin Feedback helped us build exactly what our customers wanted. Our satisfaction scores increased by 40%.",
      rating: 5,
      company: "StartupHub"
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about how Palzin products have transformed their businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-background animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;