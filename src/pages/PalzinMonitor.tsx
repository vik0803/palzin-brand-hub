import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Shield, Globe, Server, Bell, ArrowRight, CheckCircle, Zap, Clock, AlertTriangle } from 'lucide-react';

const PalzinMonitor = () => {
  const features = [
    {
      icon: Globe,
      title: "Website Monitoring",
      description: "Stay informed about your website's status with reliable monitoring. Receive alerts before issues occur."
    },
    {
      icon: Shield,
      title: "SSL Monitoring",
      description: "Get notified 30, 14, and 7 days before SSL certificate expiration. Never lose visitors again."
    },
    {
      icon: Server,
      title: "Ping Monitoring",
      description: "Check network device availability with ease. Essential tool for network administrators."
    },
    {
      icon: Activity,
      title: "Port Monitoring",
      description: "Monitor specific ports on your servers to ensure services are running properly."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get intelligent notifications via email, SMS, Slack, and 15+ other channels."
    },
    {
      icon: Clock,
      title: "Uptime Tracking",
      description: "Track your application's uptime with detailed reports and historical data."
    }
  ];

  const benefits = [
    "99.9% Uptime Monitoring",
    "Multi-channel Notifications",
    "Global Monitoring Network",
    "Incident AI Assistant",
    "Real-time Status Pages",
    "Performance Insights"
  ];

  const trustedCompanies = [
    "Amazon", "Google", "Lenovo", "PayPal", "Shopify", "Spotify"
  ];

  const stats = [
    { label: "Teams Trust Us", value: "75+" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Response Time", value: "<1min" },
    { label: "Global Locations", value: "20+" }
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
                <Activity className="w-4 h-4 mr-2" />
                Infrastructure Monitoring
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                We alert you when your <span className="text-primary">app has problems</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get notified with the best infrastructure monitoring platform and tap into the power of our 
                Incident AI Assistant! Receive detailed incident overviews and explore practical solutions instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  View Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Trusted by 75+ teams worldwide
              </p>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-primary/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="bg-card rounded-2xl p-6 shadow-elegant">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">System Status</h3>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      All Systems Operational
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Website</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">API Server</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">Healthy</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">SSL Certificate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-600">Valid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">Trusted by Companies Worldwide</h3>
            <p className="text-muted-foreground mb-8">
              Palzin Monitor is the trusted partner of software and DevOps engineers across the spectrum, 
              from agile startups to global enterprises.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {trustedCompanies.map((company, index) => (
              <div key={company} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-lg font-medium text-muted-foreground">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
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
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Monitoring Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Whatever you're building, we've got you covered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive monitoring solutions for all your infrastructure needs
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
                Advanced Monitoring & AI-Powered Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get detailed incident overviews and explore practical solutions instantly with our Incident AI Assistant. 
                Monitor everything from websites to complex infrastructure with intelligent alerting.
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
                  <h3 className="text-lg font-semibold text-foreground">Recent Incidents</h3>
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div>
                      <span className="text-sm font-medium text-foreground">API Response Time</span>
                      <div className="text-xs text-green-600">Resolved in 2 minutes</div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Resolved</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-foreground">SSL Certificate</span>
                      <div className="text-xs text-muted-foreground">Valid for 45 days</div>
                    </div>
                    <Badge variant="secondary">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-foreground">Server Uptime</span>
                      <div className="text-xs text-muted-foreground">99.97% this month</div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Excellent</Badge>
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
              Never Miss an Incident Again
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 75+ teams who trust Palzin Monitor to keep their applications running smoothly with 
              proactive monitoring and intelligent alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PalzinMonitor;