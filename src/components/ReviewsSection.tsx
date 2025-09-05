import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ken Hall",
      rating: 5,
      text: "Garrett plumbed our shop with washer, sink, toilet, shower, and even put in our utility sink, and outside fridge with water and ice. He was fast and planned for things we didn't even think of like insulation for the outside wall pipes. He's got a sweet dog too, that he brings along sometimes. He's not one for small talk but gets right to work and gets the job done. Highly recommend!"
    },
    {
      name: "Tanya Shobe",
      rating: 5,
      text: "Had a clogged sink for a while that I was desperate to have fixed but I got the run around with a few other plumbing outfits in town. Garrett showed up and offered a quick fix as well as a longer-term option that would address other plumbing issues we had been having elsewhere in the house. I very much appreciated his hard work, transparency, and options. Highly recommended!!!"
    },
    {
      name: "Michael Lowry",
      rating: 5,
      text: "Garrett is fantastic. He plumbed my bath remodel and addressed all of my requests perfectly. He recently responded to an urgent plumbing matter—outside of normal business hours. Great work and a real pro. 5 stars!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-heading text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with GM Plumbing LLC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Reviewer name */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">
                  {review.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Verified Customer
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall rating summary */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20 shadow-card inline-block">
            <div className="flex items-center justify-center mb-2">
              {renderStars(5)}
              <span className="ml-2 text-lg font-semibold text-foreground">5.0</span>
            </div>
            <p className="text-muted-foreground">
              Based on customer reviews across all platforms
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;