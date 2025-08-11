import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Users, TrendingUp, Target, Zap, ArrowRight, CheckCircle, Activity, LineChart, PieChart } from 'lucide-react';

const PalzinTrack = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Event Tracking",
      description: "Track over 20 million events daily with instant data processing and visualization."
    },
    {
      icon: Users,
      title: "User Retention Analytics",
      description: "Understand user behavior patterns and optimize retention strategies."
    },
    {
      icon: TrendingUp,
      title: "Feature Adoption Metrics",
      description: "Monitor how users interact with your features and identify improvement opportunities."
    },
    {
      icon: Target,
      title: "Conversion Funnel Analysis",
      description: "Track funnel step conversion rates and optimize your user journey."
    },
    {
      icon: Activity,
      title: "7-Day Power Users",
      description: "Identify and analyze your most engaged users for better product decisions."
    },
    {
      icon: LineChart,
      title: "Custom Event Analytics",
      description: "Create custom events and track specific user actions that matter to your business."
    }
  ];

  const benefits = [
    "All Core KPIs in One Dashboard",
    "Comprehensive Customer Profiles",
    "Smart Data Enrichment",
    "Simple Integrations",
    "Real-time Insights",
    "Advanced Segmentation"
  ];

  const stats = [
    { label: "Events Tracked Daily", value: "20,09,156+" },
    { label: "Active Users", value: "50,000+" },
    { label: "Data Points", value: "1B+" },
    { label: "Integrations", value: "100+" }
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
                <BarChart3 className="w-4 h-4 mr-2" />
                Product Analytics Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                TRACK. ANALYZE. <span className="text-primary">OPTIMIZE.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                An innovative product analytics and real-time event tracking tool that transforms data into actionable insights. 
                Streamline your data management with all essential metrics in one intuitive dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-primary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="bg-card rounded-2xl p-6 shadow-elegant">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Real-time Analytics</h3>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600">Live</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Active Users</span>
                      <span className="font-medium text-foreground">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Conversion Rate</span>
                      <span className="font-medium text-green-600">+12.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-3/4 animate-pulse"></div>
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

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unlock Your Business Potential
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform data into action with our comprehensive product analytics platform
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
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                See Every Customer Touchpoint
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the power of comprehensive customer profiles. Palzin Track provides robust user profiles 
                that equip you with all the necessary data at your fingertips.
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
                  <h3 className="text-lg font-semibold text-foreground">User Journey</h3>
                  <PieChart className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Page Views</span>
                    <span className="text-primary font-semibold">847</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Sessions</span>
                    <span className="text-primary font-semibold">234</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Conversions</span>
                    <span className="text-green-600 font-semibold">42</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Palzin Track to make data-driven decisions and optimize their products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PalzinTrack;