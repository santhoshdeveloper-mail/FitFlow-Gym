// components/sections/Pricing.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "799",
    description: "Perfect for beginners",
    features: [
      "Access to gym equipment",
      "Group classes (limited)",
      "Locker access",
      "Fitness app tracking",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  
  {
    name: "Premium",
    price: "1499",
    description: "Most popular choice",
    features: [
      "24/7 gym access",
      "All group classes",
      "Personal trainer (2 sessions/month)",
      "Sauna & Steam room",
      "Protein shake after workout",
    ],
    popular: true,
    buttonText: "Join Premium Now",
  },

  {
    name: "Elite",
    price: "2499",
    description: "For serious athletes",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Nutrition consultation",
      "Body composition scan every month",
      "Priority class booking",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">PRICING</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Simple Pricing. Real Value.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the plan that fits your goals. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative flex flex-col h-full transition-all duration-300 overflow-hidden ${
                plan.popular 
                  ? "border-primary shadow-2xl scale-[1.03] z-20" 
                  : "hover:shadow-xl"
              }`}
            >
              {/* Most Popular Badge - Fixed positioning */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                  <Badge className="bg-primary hover:bg-primary text-primary-foreground px-8 py-1.5 text-sm font-semibold tracking-wide shadow-md">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className={`text-center pb-8 ${plan.popular ? "pt-14" : "pt-10"}`}>
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-5xl font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-xl">/month</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col px-8 pb-8">
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  className={`w-full mt-auto font-semibold ${plan.popular ? "" : "variant=outline"}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include free 7-day trial • No contract • Cancel anytime
        </p>
      </div>
    </section>
  );
}