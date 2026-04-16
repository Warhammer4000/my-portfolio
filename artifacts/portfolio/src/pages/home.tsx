import React from "react";
import Hero from "@/components/sections/hero";
import FeaturedProducts from "@/components/sections/featured-products";
import TechStack from "@/components/sections/tech-stack";
import About from "@/components/sections/about";
import Career from "@/components/sections/career";
import Publication from "@/components/sections/publication";
import Impact from "@/components/sections/impact";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans overflow-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <FeaturedProducts />
        <TechStack />
        <About />
        <Career />
        <Publication />
        <Impact />
        <Contact />
      </main>
    </div>
  );
}
