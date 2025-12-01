import { useState } from "react";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { BookingDialog } from "@/components/BookingDialog";
import { MobileFooter } from "@/components/MobileFooter";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Hero onBookingClick={() => setBookingOpen(true)} />
      <TrustSection />
      <ServicesSection />
      <ContactSection onBookingClick={() => setBookingOpen(true)} />
      
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <MobileFooter onBookingClick={() => setBookingOpen(true)} />

      {/* Mobile spacing for fixed footer */}
      <div className="h-20 md:hidden" />
    </main>
  );
};

export default Index;
