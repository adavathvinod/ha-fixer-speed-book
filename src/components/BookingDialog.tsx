import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    appliance: "",
    area: "",
    name: "",
    phone: ""
  });

  const areas = [
    "Dubai Marina", "Downtown Dubai", "Jumeirah", "Al Barsha", "Deira",
    "Sharjah", "Ajman", "Business Bay", "JBR", "Al Quoz"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Booking Request:%0A%0AAppliance: ${formData.appliance}%0AArea: ${formData.area}%0AName: ${formData.name}%0APhone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/971561069456?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp...", {
      description: "We'll respond within minutes!"
    });
    
    // Reset and close
    setTimeout(() => {
      setStep(1);
      setFormData({ appliance: "", area: "", name: "", phone: "" });
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book Same-Day Repair
          </DialogTitle>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'} font-semibold`}>
            {step > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
          </div>
          <div className={`h-1 w-12 ${step >= 2 ? 'bg-accent' : 'bg-secondary'}`} />
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'} font-semibold`}>
            2
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <Label htmlFor="appliance" className="text-base font-semibold">
                  Which Appliance?
                </Label>
                <Select
                  value={formData.appliance}
                  onValueChange={(value) => setFormData({ ...formData, appliance: value })}
                  required
                >
                  <SelectTrigger id="appliance" className="mt-2 h-12">
                    <SelectValue placeholder="Select appliance type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="washing-machine">Washing Machine</SelectItem>
                    <SelectItem value="front-load">Front Load Washer</SelectItem>
                    <SelectItem value="top-load">Top Load Washer</SelectItem>
                    <SelectItem value="washer-dryer">Washer/Dryer Combo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="area" className="text-base font-semibold">
                  Your Area
                </Label>
                <Select
                  value={formData.area}
                  onValueChange={(value) => setFormData({ ...formData, area: value })}
                  required
                >
                  <SelectTrigger id="area" className="mt-2 h-12">
                    <SelectValue placeholder="Select your location" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover max-h-60">
                    {areas.map((area) => (
                      <SelectItem key={area} value={area}>{area}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.appliance || !formData.area}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2 h-12"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 h-12"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!formData.name || !formData.phone}
                  className="flex-1 h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Submit via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
