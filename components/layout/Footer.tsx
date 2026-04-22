// components/layout/Footer.tsx
import { Dumbbell, Camera, Users, Share2, Play } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="Contact-Us" className="bg-zinc-950 text-zinc-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">FitFlow</div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Premium fitness experience in Chennai. 
              Train hard. Live strong.
            </p>

            {/* Social Icons - Fixed */}
            <div className="mt-8 flex gap-5">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="X / Twitter">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#classes" className="hover:text-white transition">Classes</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="#trainers" className="hover:text-white transition">Trainers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <p>123 Fitness Street,<br />Anna Nagar, Chennai - 600040</p>
              <p>+91 98765 43210</p>
              <p>hello@fitflow.in</p>
            </div>
          </div>

          {/* Gym Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Gym Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium text-white">5:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-white">6:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-white">6:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-xs text-zinc-500">
          © 2026 FitFlow Gym Chennai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}