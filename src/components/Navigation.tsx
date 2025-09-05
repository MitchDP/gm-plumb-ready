import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gmLogo from '@/assets/gm-logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="bg-background shadow-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={gmLogo} 
              alt="GM Plumbing LLC" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Phone Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button"
              onClick={() => window.open('tel:+15419716573', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              (541) 971-6573
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  className="bg-primary hover:bg-primary-hover text-primary-foreground w-full shadow-button"
                  onClick={() => window.open('tel:+15419716573', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (541) 971-6573
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