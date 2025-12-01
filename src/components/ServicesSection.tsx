import { Wrench, MapPin, DollarSign, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ServicesSection = () => {
  const brands = [
    "Samsung", "LG", "Bosch", "Whirlpool", "Siemens", "Electrolux", 
    "Haier", "Midea", "Candy", "Indesit", "Beko", "Hitachi"
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Brands Section */}
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Wrench className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">All Major Brands</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            We Repair All Washing Machine Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand}
                className="px-6 py-3 bg-secondary/50 rounded-lg font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Service Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving All of Dubai, Sharjah & Ajman
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Fast, reliable washing machine repair service available across all major areas in the UAE.
            </p>
            <ul className="space-y-3">
              {[
                "Dubai: Marina, Downtown, Jumeirah, Al Barsha, Deira",
                "Sharjah: All residential and commercial areas",
                "Ajman: City-wide coverage with same-day service"
              ].map((area, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-success" />
                  </div>
                  <span className="text-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-strong">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold">Transparent Pricing</h3>
                </div>
                <p className="text-primary-foreground/90">
                  Diagnostic visit: AED 50 (waived if you proceed with repair)
                </p>
              </div>

              <div className="border-t border-primary-foreground/20 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold">90-Day Warranty</h3>
                </div>
                <p className="text-primary-foreground/90">
                  All repairs come with a comprehensive 90-day parts and labor warranty
                </p>
              </div>

              <div className="border-t border-primary-foreground/20 pt-6">
                <div className="text-center bg-accent/10 rounded-lg p-4">
                  <div className="text-4xl font-bold text-accent mb-1">2-4 hrs</div>
                  <div className="text-sm">Average Repair Time</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
