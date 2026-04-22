// app/page.tsx
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Trainers from "@/components/sections/Trainers";
import Classes from "@/components/sections/Classes";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Classes />
      <Trainers />  
      <Pricing />
      <Footer />
    </>
  );
}