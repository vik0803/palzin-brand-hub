import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, Lightbulb, ArrowRight, CheckCircle, Building, TrendingUp, Globe } from 'lucide-react';

const WhyWeBuild = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: "Fragmented Analytics",
      description: "Companies struggle with scattered data across multiple tools, making it impossible to get a unified view of their business performance."
    },
    {
      icon: Building,
      title: "Complex Infrastructure Monitoring",
      description: "Businesses lose money due to downtime because they lack proper monitoring and instant alerts when systems fail."
    },
    {
      icon: Users,
      title: "Disconnected Customer Feedback",
      description: "Product teams build features in isolation, without understanding what customers actually need and want."
    }
  ];

  const solutions = [
    {
      product: "Palzin Track",
      icon: TrendingUp,
      problem: "Scattered Analytics",
      solution: "Unified dashboard combining product, marketing, and financial metrics in one place",
      impact: "20M+ events tracked daily, helping teams make data-driven decisions faster"
    },
    {
      product: "Palzin Monitor", 
      icon: Building,
      problem: "Infrastructure Blindness",
      solution: "Proactive monitoring with AI-powered incident detection and resolution guidance",
      impact: "99.9% uptime guarantee, trusted by 75+ teams to prevent costly downtime"
    },
    {
      product: "Palzin Feedback",
      icon: Users,
      problem: "Customer Disconnect",
      solution: "Customer-driven product development with feedback collection and roadmap prioritization",
      impact: "1M+ feedback items collected, helping 500+ teams build what customers want"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer-Centric Innovation",
      description: "We build tools that solve real problems faced by businesses every day. Every feature starts with understanding customer pain points."
    },
    {
      icon: Target,
      title: "Simplicity in Complexity",
      description: "We believe powerful tools shouldn't be complicated. Our mission is to make advanced analytics and monitoring accessible to everyone."
    },
    {
      icon: Globe,
      title: "Democratizing Business Intelligence",
      description: "Enterprise-grade capabilities shouldn't be limited to large corporations. We make sophisticated tools available to teams of all sizes."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Technology evolves rapidly, and so do business needs. We continuously innovate to stay ahead of tomorrow's challenges."
    }
  ];

  const journey = [
    {
      year: "2022",
      title: "The Problem Discovery",
      description: "Our founders experienced firsthand the frustration of managing multiple tools for analytics, monitoring, and feedback collection. There had to be a better way."
    },
    {
      year: "2023",
      title: "Building the Foundation",
      description: "We started with Palzin Monitor, solving the critical problem of infrastructure monitoring. The positive response from early users validated our approach."
    },
    {
      year: "2024",
      title: "Expanding the Vision",
      description: "Launched Palzin Track and Palzin Feedback, creating a comprehensive suite of tools that work together to help businesses understand and improve their operations."
    },
    {
      year: "2025",
      title: "Global Impact",
      description: "Now serving 50,000+ users globally, we continue to innovate and expand our platform to meet the evolving needs of modern businesses."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Why We Build <span className="text-primary">These Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every great product starts with a problem that needs solving. Here's the story of why we created 
              Palzin Track, Palzin Monitor, and Palzin Feedback - and how they're transforming businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* The Problems Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Problems We Saw
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Through our experience working with hundreds of businesses, we identified three critical challenges 
              that were costing companies time, money, and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card 
                key={problem.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-red-600 group-hover:text-red-700 transition-colors duration-200">
                    {problem.title}
                  </CardTitle>
                  <CardDescription>
                    {problem.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We didn't just identify problems - we built comprehensive solutions that address each challenge head-on.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={solution.product} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-2' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    {solution.product}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Solving: {solution.problem}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.solution}
                  </p>
                  <div className="flex items-center space-x-3 mb-6">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground font-medium">{solution.impact}</span>
                  </div>
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Learn More About {solution.product}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className={`animate-fade-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                  <Card className="border-border bg-gradient-subtle p-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{solution.product}</h4>
                      <p className="text-muted-foreground">{solution.solution}</p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {value.title}
                  </CardTitle>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From identifying the problems to building solutions that serve thousands of users worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card className="border-border bg-card p-6">
                      <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative z-10 w-6 h-6 bg-primary rounded-full border-4 border-background flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're just getting started. Join thousands of businesses who are already using our tools to 
              make better decisions, prevent downtime, and build products their customers love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyWeBuild;