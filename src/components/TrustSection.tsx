import { Shield, Users, Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const TrustSection = () => {
  const trustFactors = [
    {
      icon: Shield,
      title: "90-Day Repair Warranty",
      description: "All repairs backed by comprehensive warranty coverage"
    },
    {
      icon: Users,
      title: "3,500+ Satisfied Customers",
      description: "Trusted by thousands across UAE"
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Licensed & experienced professionals"
    },
    {
      icon: CheckCircle,
      title: "Genuine Spare Parts",
      description: "Original manufacturer parts only"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose HA Fixer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional service you can trust with transparent pricing and guaranteed results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <factor.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{factor.title}</h3>
              <p className="text-sm text-muted-foreground">{factor.description}</p>
            </Card>
          ))}
        </div>

        {/* Google Reviews Display */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card shadow-soft">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">4.9</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Google Reviews</div>
                <div className="text-xs text-muted-foreground">Based on 500+ reviews</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
