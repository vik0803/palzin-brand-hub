import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-primary/3 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 group hover:bg-white/80 transition-all duration-300">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-foreground">Trusted by 2,500+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Innovative SaaS Solutions for{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Palzin creates cutting-edge SaaS products that empower teams with performance monitoring, 
            user analytics, and customer feedback solutions. Scale your business with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                10M+
              </div>
              <div className="text-sm text-muted-foreground">Data Points Tracked</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass Card Preview */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-5xl mx-auto px-6 animate-scale-in" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Dashboard Preview - Monitor, Track, and Optimize
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;