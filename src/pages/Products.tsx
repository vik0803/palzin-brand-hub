import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, BarChart3, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Palzin Monitor',
      tagline: 'Performance Monitoring & Uptime Tracking',
      description: 'Comprehensive application monitoring with real-time alerts, performance insights, and uptime tracking to keep your services running smoothly.',
      icon: Activity,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Real-time performance monitoring',
        'Uptime tracking with SLA reports',
        'Smart alert notifications',
        'Performance bottleneck detection',
        'Custom dashboard creation',
        'API monitoring and testing'
      ],
      pricing: 'Starting at $29/month',
      status: 'Available Now'
    },
    {
      name: 'Palzin Track',
      tagline: 'User Behavior Analytics & Insights',
      description: 'Advanced analytics platform to understand user behavior, track conversions, and optimize user experience with data-driven insights.',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      features: [
        'User journey mapping',
        'Conversion funnel analysis',
        'A/B testing framework',
        'Custom event tracking',
        'Cohort analysis',
        'Real-time analytics dashboard'
      ],
      pricing: 'Starting at $39/month',
      status: 'Available Now'
    },
    {
      name: 'Palzin Feedback',
      tagline: 'Customer Feedback Collection & Analysis',
      description: 'Collect, analyze, and act on customer feedback with intelligent sentiment analysis and automated response management.',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      features: [
        'Multi-channel feedback collection',
        'AI-powered sentiment analysis',
        'Automated response workflows',
        'Feedback categorization',
        'Customer satisfaction scoring',
        'Integration with support tools'
      ],
      pricing: 'Starting at $25/month',
      status: 'Available Now'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful SaaS Solutions for{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover our suite of innovative tools designed to monitor, analyze, and optimize 
              your business operations. Each product is built with enterprise-grade security 
              and designed for teams of all sizes.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div 
                  key={product.name}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Product Info */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {product.status}
                        </Badge>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {product.name}
                      </h2>
                      <p className="text-lg text-primary font-medium mb-4">
                        {product.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{product.pricing}</p>
                        <p className="text-sm text-muted-foreground">14-day free trial included</p>
                      </div>
                      <div className="flex space-x-3">
                        <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                          Start Free Trial
                        </Button>
                        <Button variant="outline">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Product Visual */}
                  <div className="flex-1">
                    <Card className="bg-gradient-subtle border-border">
                      <CardContent className="p-8">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 text-center">
                          <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                            <product.icon className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground">
                            Interactive Dashboard Preview
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of companies already using Palzin products to monitor, 
              analyze, and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;