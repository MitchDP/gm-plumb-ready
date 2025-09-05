import { Wrench, Shield, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-heading text-foreground mb-4">
            About GM Plumbing LLC
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Led by Garrett, GM Plumbing LLC is committed to providing reliable, fast, and fair plumbing services 
            throughout the Albany, Corvallis, Lebanon, and Sweet Home areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Your Trusted Local Plumbing Partner
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With years of experience serving Oregon communities, we understand the unique plumbing challenges 
              that homeowners and businesses face. Our commitment goes beyond just fixing pipes – we build 
              lasting relationships with our customers through honest work, transparent pricing, and reliable service.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need emergency repairs, custom plumbing installations, or complete remodeling services, 
              we bring the expertise and professionalism you deserve. Every job is completed to the highest 
              standards, ensuring your plumbing systems work efficiently for years to come.
            </p>

            {/* Why Choose Us Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-card shadow-card">
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Expert Craftmanship</h4>
                <p className="text-sm text-muted-foreground">Quality work, every time</p>
              </Card>
              
              <Card className="p-4 text-center bg-card shadow-card">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Licensed & Insured</h4>
                <p className="text-sm text-muted-foreground">CCB #253536</p>
              </Card>
              
              <Card className="p-4 text-center bg-card shadow-card">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-card-foreground mb-1">Customer Focused</h4>
                <p className="text-sm text-muted-foreground">Your satisfaction guaranteed</p>
              </Card>
            </div>
          </div>

          {/* Kitchen plumbing work image */}
          <div className="lg:order-first">
            <Card className="p-8 bg-subtle-gradient shadow-elevated">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fc8c97a5-7dc4-4737-a12f-54fa41d3cd34.png" 
                  alt="Professional kitchen plumbing installation by GM Plumbing LLC featuring beautiful wood countertops and white cabinetry"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;