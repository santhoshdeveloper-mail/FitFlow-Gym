'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Dumbbell } from "lucide-react";

const classes = [
  {
    title: "Strength & Conditioning",
    time: "6:00 AM - 7:00 AM",
    instructor: "Alex Rivera",
    spots: "12/20",
    level: "Intermediate",
    icon: Dumbbell,
  },
  {
    title: "HIIT Burn",
    time: "7:30 AM - 8:30 AM",
    instructor: "Priya Sharma",
    spots: "8/15",
    level: "All Levels",
    icon: Clock,
  },
  {
    title: "Power Yoga",
    time: "5:30 PM - 6:30 PM",
    instructor: "Rahul Menon",
    spots: "15/20",
    level: "Beginner",
    icon: Users,
  },
];

const Classes = () => {
  return (
    <section  id="classes" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">GROUP CLASSES</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Join Our Group Classes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Small group training with expert coaches. Limited spots available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <cls.icon className="h-10 w-10 text-primary" />
                  <Badge variant="outline">{cls.level}</Badge>
                </div>

                <h3 className="text-2xl font-semibold mb-2">{cls.title}</h3>
                <p className="text-muted-foreground mb-6">{cls.time}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coach</span>
                    <span className="font-medium">{cls.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Spots left</span>
                    <span className="font-medium">{cls.spots}</span>
                  </div>
                </div>

                <button className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition">
                  Book This Class
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;