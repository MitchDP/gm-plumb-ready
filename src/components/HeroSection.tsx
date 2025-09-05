import { Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section id="home" className="bg-subtle-gradient py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-hero text-foreground mb-6">
            Professional Plumbing Services
            <span className="block text-primary">You Can Trust</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We can handle all your plumbing needs — custom work, new construction, remodels, and service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button text-lg px-8 py-3"
              onClick={() => window.open('tel:+15419716573', '_self')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (541) 971-6573
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Service Today
            </Button>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-card shadow-card">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-card-heading text-card-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Mon-Sat: 7 AM - 5 PM<br />
                Sunday: Closed
              </p>
            </Card>

            <Card className="p-6 bg-card shadow-card">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-card-heading text-card-foreground mb-2">Service Areas</h3>
              <p className="text-muted-foreground">
                Albany, Corvallis, Lebanon,<br />
                Sweet Home & surrounding areas
              </p>
            </Card>

            <Card className="p-6 bg-card shadow-card">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
              </div>
              <h3 className="text-card-heading text-card-foreground mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                CCB #253536<br />
                Professional & Reliable
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;