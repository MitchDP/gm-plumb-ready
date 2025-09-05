import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const StickyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        onClick={() => window.open('tel:+15419716573', '_self')}
        className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button rounded-full w-14 h-14 p-0 animate-pulse hover:animate-none"
        aria-label="Call GM Plumbing"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default StickyCallButton;