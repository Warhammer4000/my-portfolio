import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
          data-testid="hero-name"
        >
          Tanimul Haque Khan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-medium text-primary mb-8"
          data-testid="hero-title"
        >
          AI Empowered Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
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
    </section>
  );
}
