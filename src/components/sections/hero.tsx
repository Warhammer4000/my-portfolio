import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import profilePhoto from "@assets/image_1776340977291.png";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-white/5 backdrop-blur-sm mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="text-xs font-mono font-medium tracking-tight text-muted-foreground uppercase">System Online</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
              data-testid="hero-name"
            >
              Tanimul<br />Haque Khan
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-medium text-primary mb-6"
              data-testid="hero-title"
            >
              AI Empowered Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
              data-testid="hero-subtitle"
            >
              I don't just work in AI. I ship real AI products that solve hard problems, scale to production, and drive measurable business impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="btn-view-work"
              >
                View my work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 text-base bg-transparent border-white/10 hover:bg-white/5"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/tanimulhaquekhan/', '_blank');
                }}
                data-testid="btn-linkedin"
              >
                <Terminal className="mr-2 w-4 h-4" />
                Connect on LinkedIn
              </Button>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-full lg:max-w-md">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-95 translate-y-4" />

              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_hsl(var(--primary)/0.08)]">
                <img
                  src={profilePhoto}
                  alt="Tanimul Haque Khan speaking at AI Engineering Hackathon"
                  className="w-full h-full object-cover object-top"
                />
                {/* Left edge fade — blends into background */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent pointer-events-none" />
                {/* Bottom edge fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                {/* Event badge overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_hsl(var(--primary))]" />
                    <span className="text-xs font-mono text-muted-foreground">AI Engineering Hackathon · Organizer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
