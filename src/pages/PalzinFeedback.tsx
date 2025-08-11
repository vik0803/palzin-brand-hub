import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, TrendingUp, Users, Target, ArrowRight, CheckCircle, Zap, BarChart3, Bell, Star } from 'lucide-react';

const PalzinFeedback = () => {
  const workflowSteps = [
    {
      step: "01",
      title: "Collect Feedback",
      description: "Captures product feedback from your customers through multiple channels and touchpoints.",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Analyze Feedback",
      description: "Analyze customer feedback to gain accurate insights and understand user needs.",
      icon: BarChart3,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Plan Roadmap",
      description: "Plans a roadmap to prioritize what to build next based on customer input.",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Share Updates",
      description: "Notify customers about new product features and close the feedback loop.",
      icon: Bell,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Multi-Channel Collection",
      description: "Collect feedback through in-app widgets, email surveys, and dedicated feedback portals."
    },
    {
      icon: Star,
      title: "Priority Scoring",
      description: "Score and prioritize feedback by customer segments and voting to build what matters most."
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Filter feedback by customer segments to understand different user group needs."
    },
    {
      icon: TrendingUp,
      title: "Roadmap Planning",
      description: "Transform feedback into actionable roadmap items with clear priorities."
    },
    {
      icon: Bell,
      title: "Update Notifications",
      description: "Keep customers informed about feature releases and product improvements."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Get detailed analytics on feedback trends and customer satisfaction metrics."
    }
  ];

  const benefits = [
    "Prioritized Product Roadmap",
    "Customer-Driven Development",
    "Reduced Product Risk",
    "Improved User Satisfaction",
    "Clear Feature Validation",
    "Enhanced Product-Market Fit"
  ];

  const stats = [
    { label: "Feedback Collected", value: "1M+" },
    { label: "Product Teams", value: "500+" },
    { label: "Features Shipped", value: "10K+" },
    { label: "Customer Satisfaction", value: "94%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <MessageSquare className="w-4 h-4 mr-2" />
                Customer Feedback Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build Better Products with <span className="text-primary">Palzin Feedback</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Know what your customers need. Collect & analyze customer feedback with Palzin Feedback and 
                gain accurate insights for planning your product roadmap to know what to build next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Get 15 Day Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  See How It Works
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required
              </p>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-primary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="bg-card rounded-2xl p-6 shadow-elegant">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Feedback Summary</h3>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Active</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Feature Requests</span>
                      <span className="text-primary font-semibold">127</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Bug Reports</span>
                      <span className="text-orange-600 font-semibold">23</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Satisfaction Score</span>
                      <span className="text-green-600 font-semibold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How does our feedback tool work?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform customer insights into actionable product improvements with our streamlined 4-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <Card 
                key={step.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </CardTitle>
                  <CardDescription>
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get inputs from customers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Palzin Feedback features help you score and prioritize your roadmap by collecting feedback 
              from customers and teammates. Build the most important things first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Prioritize customer feedback to make better product decisions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Filter feedback by segment & voting, and clarify use cases up-front. Save your time. Know what to build.
                Transform customer insights into product success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Top Feature Requests</h3>
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div>
                      <span className="text-sm font-medium text-foreground">Dark Mode Support</span>
                      <div className="text-xs text-muted-foreground">23 votes • Enterprise customers</div>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">High Priority</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-foreground">Mobile App</span>
                      <div className="text-xs text-muted-foreground">18 votes • All segments</div>
                    </div>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-foreground">API Integration</span>
                      <div className="text-xs text-muted-foreground">12 votes • Pro users</div>
                    </div>
                    <Badge variant="secondary">Low</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start Building Customer-Driven Products
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of product teams using Palzin Feedback to collect, analyze, and act on customer 
              feedback to build products users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get 15 Day Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PalzinFeedback;