import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, Calendar, Users, Award, BookOpen, ArrowRight, Newspaper } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      date: "December 2024",
      title: "Palzin Private Limited Raises $5M Series A to Expand SaaS Portfolio",
      description: "Company accelerates growth with three innovative products serving 50,000+ users globally.",
      category: "Funding",
      link: "#"
    },
    {
      date: "November 2024", 
      title: "Palzin Track Surpasses 20 Million Events Tracked Daily",
      description: "Product analytics platform reaches major milestone with 1000+ active companies.",
      category: "Product",
      link: "#"
    },
    {
      date: "October 2024",
      title: "Palzin Monitor Launches AI-Powered Incident Assistant",
      description: "Revolutionary AI feature provides instant incident analysis and resolution suggestions.",
      category: "Product",
      link: "#"
    },
    {
      date: "September 2024",
      title: "Palzin Feedback Reaches 1 Million Customer Feedback Collections",
      description: "Platform helps 500+ product teams make data-driven decisions with customer insights.",
      category: "Milestone",
      link: "#"
    }
  ];

  const mediaAssets = [
    {
      type: "Brand Guidelines",
      description: "Complete brand identity guidelines including logos, colors, and typography",
      format: "PDF",
      size: "2.5 MB"
    },
    {
      type: "Logo Pack",
      description: "High-resolution logos in various formats and orientations",
      format: "ZIP",
      size: "15 MB"
    },
    {
      type: "Product Screenshots",
      description: "High-quality screenshots of all Palzin products",
      format: "ZIP", 
      size: "25 MB"
    },
    {
      type: "Executive Photos",
      description: "Professional headshots of leadership team",
      format: "ZIP",
      size: "12 MB"
    },
    {
      type: "Company Fact Sheet",
      description: "Key company statistics and milestones",
      format: "PDF",
      size: "800 KB"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Best SaaS Startup",
      organization: "TechCrunch Disrupt",
      description: "Recognized for innovative approach to business intelligence and monitoring"
    },
    {
      year: "2024", 
      title: "Product Excellence Award",
      organization: "SaaS Awards",
      description: "Palzin Monitor wins for best infrastructure monitoring solution"
    },
    {
      year: "2023",
      title: "Emerging Company of the Year",
      organization: "Tech Innovation Summit",
      description: "Acknowledged for rapid growth and product innovation"
    }
  ];

  const stats = [
    { label: "Global Users", value: "50,000+" },
    { label: "Events Tracked Daily", value: "20M+" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Countries Served", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Newspaper className="w-4 h-4 mr-2" />
              Press & Media
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Press & <span className="text-primary">Media Kit</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get the latest news, press releases, and media assets from Palzin Private Limited. 
              Download our brand assets and stay updated with our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Download Media Kit
                <Download className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Contact PR Team
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Company at a Glance</h3>
            <p className="text-muted-foreground">Key metrics and achievements that define our growth</p>
          </div>
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

      {/* Press Releases Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Press Releases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest announcements, product launches, and company milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <Card 
                key={release.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {release.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {release.date}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {release.title}
                  </CardTitle>
                  <CardDescription>
                    {release.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    Read Full Release
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Media Assets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our brand assets, product screenshots, and company materials for your coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaAssets.map((asset, index) => (
              <Card 
                key={asset.type}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {asset.type}
                  </CardTitle>
                  <CardDescription>
                    {asset.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">Format: {asset.format}</span>
                    <span className="text-sm text-muted-foreground">Size: {asset.size}</span>
                  </div>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    Download
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our innovation and excellence in SaaS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card 
                key={award.title}
                className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-border bg-card animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 mx-auto w-fit">
                    {award.year}
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors duration-200">
                    {award.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-muted-foreground mb-2">
                    {award.organization}
                  </CardDescription>
                  <CardDescription>
                    {award.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Media Inquiries & Partnership
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or partnership opportunities, get in touch with our PR team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 border-border">
                <h3 className="font-semibold text-foreground mb-2">Press Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-4">For media and press-related questions</p>
                <p className="text-primary font-medium">press@palzin.com</p>
              </Card>
              <Card className="p-6 border-border">
                <h3 className="font-semibold text-foreground mb-2">Partnership Opportunities</h3>
                <p className="text-muted-foreground text-sm mb-4">For business partnerships and collaborations</p>
                <p className="text-primary font-medium">partnerships@palzin.com</p>
              </Card>
            </div>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Contact PR Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;