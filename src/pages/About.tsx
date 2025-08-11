import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at TechCorp with 15+ years building scalable SaaS platforms.',
      image: 'A'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer specializing in distributed systems and data analytics.',
      image: 'S'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with experience at Slack and Zoom, passionate about user experience.',
      image: 'M'
    },
    {
      name: 'Emily Zhang',
      role: 'VP of Engineering',
      bio: 'Full-stack engineer and former tech lead at Stripe, expert in building reliable systems.',
      image: 'E'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make starts with how it impacts our customers and their success.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we build, from code quality to customer support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to solve complex problems with elegant, simple solutions.'
    },
    {
      icon: Award,
      title: 'Transparency',
      description: 'We believe in open communication, honest feedback, and transparent business practices.'
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
              Building the Future of{' '}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                SaaS Innovation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020, Palzin Private Limited has been at the forefront of creating 
              innovative SaaS solutions that empower businesses to monitor, analyze, and optimize 
              their operations with unprecedented clarity and precision.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To democratize access to enterprise-grade monitoring, analytics, and feedback tools 
                  that were once only available to Fortune 500 companies. We believe every business, 
                  regardless of size, deserves world-class tools to understand and improve their operations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform eliminates the complexity traditionally associated with these tools, 
                  making sophisticated analytics accessible through intuitive interfaces and 
                  intelligent automation.
                </p>
              </div>
              <div className="animate-fade-in-right">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a world where data-driven decision making is effortless and every 
                  business can harness the full potential of their data to create exceptional 
                  customer experiences and drive sustainable growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By 2030, we aim to be the go-to platform for businesses seeking comprehensive 
                  insights into their performance, user behavior, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders driving innovation in SaaS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={member.name}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.image}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;