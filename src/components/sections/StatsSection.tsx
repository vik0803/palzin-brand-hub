import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Active Users',
      description: 'Companies trust our platform'
    },
    {
      icon: TrendingUp,
      value: '10M+',
      label: 'Data Points',
      description: 'Processed every day'
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Guaranteed availability'
    },
    {
      icon: Shield,
      value: '24/7',
      label: 'Support',
      description: 'Expert assistance'
    }
  ];

  const companies = [
    { name: 'TechCorp', logo: 'T' },
    { name: 'DataFlow', logo: 'D' },
    { name: 'CloudNine', logo: 'C' },
    { name: 'InnovateTech', logo: 'I' },
    { name: 'SecureNet', logo: 'S' },
    { name: 'FlowState', logo: 'F' }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center animate-fade-in">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="flex items-center space-x-2 group hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {company.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;