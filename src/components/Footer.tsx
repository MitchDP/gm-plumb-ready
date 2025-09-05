import { Phone, MapPin, Clock } from 'lucide-react';
import gmLogo from '@/assets/gm-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={gmLogo} 
                alt="GM Plumbing LLC" 
                className="h-12 w-auto mr-3 bg-white rounded p-1"
              />
              <div>
                <h3 className="text-xl font-bold">GM Plumbing LLC</h3>
                <p className="text-sm opacity-80">Professional Plumbing Services</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Reliable, fast, and fair plumbing services for Albany, Corvallis, Lebanon, 
              Sweet Home, and surrounding areas. Licensed, insured, and committed to your satisfaction.
            </p>
            <p className="text-sm font-semibold">
              Licensed & Insured • CCB #253536
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a 
                  href="tel:+15419716573" 
                  className="hover:text-primary transition-colors"
                >
                  (541) 971-6573
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p>Albany, Corvallis</p>
                  <p>Lebanon, Sweet Home</p>
                  <p>& surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <div>
                  <p>Mon - Sat: 7 AM - 5 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} GM Plumbing LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm hover:text-primary transition-colors"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;