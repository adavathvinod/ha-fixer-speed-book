import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  onBookingClick: () => void;
}

export const ContactSection = ({ onBookingClick }: ContactSectionProps) => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to fix your washing machine? Contact us now for same-day service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 space-y-6 bg-card shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+971561069456" className="text-lg text-accent hover:underline">
                  +971 56 106 9456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:booking@hafixer.com" className="text-lg text-accent hover:underline">
                  booking@hafixer.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Service Areas</h3>
                <p className="text-muted-foreground">
                  Dubai, Sharjah & Ajman
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
                <p className="text-muted-foreground">
                  8:00 AM - 10:00 PM, 7 Days a Week
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-strong flex flex-col justify-center">
            <div className="text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Need Emergency Repair?
              </h3>
              <p className="text-lg text-primary-foreground/90">
                We offer same-day service for urgent repairs. Book now and get your washing machine fixed today!
              </p>
              <Button
                size="lg"
                onClick={onBookingClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-accent hover:shadow-xl transition-all hover:scale-105"
              >
                Book Emergency Repair
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 HA Fixer Washing Machine Repair. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
