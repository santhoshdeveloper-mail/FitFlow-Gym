// components/sections/Features.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    desc: "Latest machines from Technogym & Life Fitness. Fully maintained.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    desc: "12 certified trainers. Personal training & group classes available.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    desc: "Open round the clock. Train anytime that fits your schedule.",
  },
  {
    icon: Award,
    title: "Proven Results",
    desc: "Average 8kg fat loss in first 90 days. Real member transformations.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">
            Why Members Love FitFlow
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Built for serious results. Designed for real life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}