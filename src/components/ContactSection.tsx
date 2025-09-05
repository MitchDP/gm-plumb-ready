import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Plumbing Service Request - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service Needed: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:contact@gmplumbingllc.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-heading text-foreground mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to get started? Contact us for fast, reliable plumbing services in Albany, 
            Corvallis, Lebanon, Sweet Home, and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-card shadow-card">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-card-heading text-card-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-3">(541) 971-6573</p>
                <Button 
                  className="bg-primary hover:bg-primary-hover text-primary-foreground w-full"
                  onClick={() => window.open('tel:+15419716573', '_self')}
                >
                  Call Now
                </Button>
              </Card>

              <Card className="p-6 bg-card shadow-card">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-card-heading text-card-foreground mb-2">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Saturday</p>
                  <p className="font-semibold">7:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card shadow-card">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-card-heading text-card-foreground mb-2">Service Areas</h3>
              <div className="text-muted-foreground">
                <p className="mb-2">We proudly serve:</p>
                <ul className="space-y-1">
                  <li>• Albany, Oregon</li>
                  <li>• Corvallis, Oregon</li>
                  <li>• Lebanon, Oregon</li>
                  <li>• Sweet Home, Oregon</li>
                  <li>• Surrounding areas</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20 shadow-card mt-6">
              <h3 className="text-card-heading text-foreground mb-2">Licensed & Insured</h3>
              <p className="text-muted-foreground">
                <strong>CCB #253536</strong><br />
                Fully licensed and insured for your peace of mind.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card shadow-elevated">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Request Service
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-card-foreground mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select a service</option>
                  <option value="Emergency Repair">Emergency Repair</option>
                  <option value="Custom Plumbing">Custom Plumbing</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Remodel">Remodel</option>
                  <option value="Fixture Replacement">Fixture Replacement</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your plumbing needs..."
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground w-full py-3 text-lg shadow-button"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;