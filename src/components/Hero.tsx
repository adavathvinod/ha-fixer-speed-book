import { Phone, Wrench, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookingClick: () => void;
}

export const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 md:py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-semibold">4.9 Stars · 3,500+ Happy Customers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Same-Day Washing Machine
              <span className="block text-accent">Repair Service</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Expert technicians. Genuine parts. 90-day warranty. 
              <span className="block font-semibold mt-2">Available across Dubai, Sharjah & Ajman</span>
            </p>

            {/* Trust Badges - Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-accent" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Wrench className="w-5 h-5 text-accent" />
                <span>Certified Techs</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-5 h-5 text-accent" />
                <span>Genuine Parts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={onBookingClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Same-Day Repair Now
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl"
              >
                <a href="tel:+971561069456">
                  <Phone className="w-5 h-5 mr-2" />
                  +971 56 106 9456
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="hidden md:block animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80" 
                alt="Professional washing machine repair technician"
                className="relative rounded-2xl shadow-strong w-full h-auto"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card text-card-foreground rounded-xl shadow-strong p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2h</div>
                  <div className="text-sm text-muted-foreground">Avg Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
