import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart3, MessageSquare, ArrowRight, Zap } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: 'Palzin Monitor',
      description: 'Comprehensive performance monitoring and uptime tracking for your applications.',
      icon: Activity,
      features: ['Real-time monitoring', 'Alert notifications', 'Performance insights', 'Uptime tracking'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Palzin Track',
      description: 'Advanced user behavior analytics to understand how users interact with your product.',
      icon: BarChart3,
      features: ['User journey mapping', 'Conversion tracking', 'A/B testing', 'Custom events'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Palzin Feedback',
      description: 'Collect, analyze, and act on customer feedback to improve your product experience.',
      icon: MessageSquare,
      features: ['Feedback collection', 'Sentiment analysis', 'Response management', 'Insights dashboard'],
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful SaaS Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three essential tools to monitor, analyze, and optimize your business performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Explore All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;