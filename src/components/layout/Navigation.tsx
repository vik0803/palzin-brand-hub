import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const products = [
    {
      name: 'Palzin Monitor',
      description: 'Performance monitoring and uptime tracking',
      href: '/products/monitor'
    },
    {
      name: 'Palzin Track',
      description: 'User behavior analytics and insights',
      href: '/products/track'
    },
    {
      name: 'Palzin Feedback',
      description: 'Customer feedback collection and analysis',
      href: '/products/feedback'
    }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Press & Media', href: '/press' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Documentation', href: '#' },
    { name: 'Support Center', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Palzin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-96 p-6">
                      <div className="grid gap-4">
                        {products.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="group p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                          >
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                              {product.name}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {product.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <div className="grid gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4">
                      <div className="grid gap-2">
                        {resources.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block p-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-4">
              {/* Mobile Products */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground px-2">Products</h3>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground px-2">Company</h3>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground px-2">Resources</h3>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;