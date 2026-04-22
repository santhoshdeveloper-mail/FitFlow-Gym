// components/sections/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section  id ="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20230516/original/pngtree-large-room-full-of-equipment-in-a-gym-picture-image_2611111.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge 
            variant="secondary" 
            className="mb-6 text-sm px-4 py-1.5 bg-transparent-0 border-white/20 hover:text-gray-400 text-white-500 transition"
          >
            Now Open in Chennai
          </Badge>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
            TRAIN HARD.<br />
            LIVE STRONG.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join Chennai&apos;s most modern fitness community. 
            World-class equipment, expert trainers, and results that last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 hover:bg-white hover:text-black font-semibold rounded-full group"
            >
              Join Now – Only ₹999/month
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition" />
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-7 font-semibold border-white bg-black text-white hover:bg-white hover:text-black rounded-full"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch 1-Min Video
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-gray-300">
            <div>⭐ 4.9/5 from 1240+ members</div>
            <div>🏋️ 50+ Premium Equipment</div>
            <div>👨‍🏫 12 Certified Trainers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;