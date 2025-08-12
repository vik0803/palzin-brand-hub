import { Link } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of SaaS Monitoring: Why Real-time Analytics Matter",
      excerpt: "Discover how real-time monitoring can transform your business operations and prevent costly downtime before it happens.",
      author: "Sarah Chen",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Monitoring",
      slug: "future-of-saas-monitoring",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Building Better Products with Customer Feedback",
      excerpt: "Learn how to leverage customer feedback effectively to build products that truly meet user needs and drive business growth.",
      author: "Michael Rodriguez",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Product Development",
      slug: "building-better-products-feedback",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Analytics Deep Dive: Understanding User Behavior Patterns",
      excerpt: "Explore advanced analytics techniques to understand your users better and make data-driven decisions for your product.",
      author: "Emily Johnson",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Analytics",
      slug: "analytics-user-behavior-patterns",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Monitoring", "Analytics", "Product Development", "Engineering"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog & <span className="text-transparent bg-clip-text bg-gradient-primary">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest trends, insights, and best practices in SaaS, monitoring, analytics, and product development.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-primary text-primary-foreground font-medium rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;