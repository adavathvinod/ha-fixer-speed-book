import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileFooterProps {
  onBookingClick: () => void;
}

export const MobileFooter = ({ onBookingClick }: MobileFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-strong">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Button
          asChild
          size="lg"
          className="h-14 bg-success hover:bg-success/90 text-success-foreground font-semibold rounded-xl shadow-medium"
        >
          <a href="https://wa.me/971561069456" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>
        
        <Button
          asChild
          size="lg"
          className="h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl shadow-accent"
        >
          <a href="tel:+971561069456">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
};
