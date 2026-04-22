// components/layout/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu, Dumbbell, User } from "lucide-react";   // ← User is now imported

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Classes", id: "classes" },
    { name: "Trainers", id: "trainers" },
    { name: "Plans", id: "pricing" },
    { name: "Contact Us", id: "Contact-Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Dumbbell className="h-9 w-9 text-primary" />
          <span className="font-bold text-2xl tracking-tighter">FitFlow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* User Profile Button */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>

          <Button className="hidden md:flex gap-2 font-semibold">
            Join Now
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mt-10 flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left hover:text-primary py-2"
                  >
                    {link.name}
                  </button>
                ))}

                <div className="pt-8 border-t mt-auto">
                  <Button className="w-full">Join FitFlow Today</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}