import { Wrench, Home, Hammer, AlertCircle, Droplets, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Custom Plumbing Projects",
      description: "Tailored plumbing solutions designed specifically for your unique needs and space requirements."
    },
    {
      icon: Home,
      title: "New Construction Plumbing",
      description: "Complete plumbing installation for new homes and commercial buildings, from foundation to finish."
    },
    {
      icon: Hammer,
      title: "Remodels",
      description: "Bathroom, kitchen, and whole house remodeling with expert plumbing installation and upgrades."
    },
    {
      icon: AlertCircle,
      title: "Repairs & Emergency Service",
      description: "Fast, reliable repair services for urgent plumbing issues and emergency situations."
    },
    {
      icon: Droplets,
      title: "Fixture Replacements",
      description: "Professional installation of sinks, toilets, showers, disposals, faucets, and more."
    },
    {
      icon: Wrench,
      title: "Maintenance & Inspections",
      description: "Preventive maintenance services to keep your plumbing system running smoothly year-round."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-heading text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to custom installations, we provide comprehensive plumbing services 
            to meet all your residential and commercial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-card-heading text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Service Guarantee */}
        <div className="mt-12">
          <Card className="p-8 bg-primary/5 border-primary/20 shadow-card text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Service Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We stand behind every job with our commitment to quality workmanship, transparent pricing, 
              and customer satisfaction. Your plumbing problems are our priority.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;