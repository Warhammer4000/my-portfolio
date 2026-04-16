import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
          
          <div className="flex items-center gap-3 mb-8 text-primary">
            <Terminal className="w-6 h-6" />
            <h2 className="text-xl font-mono font-bold uppercase tracking-wider">System.About()</h2>
          </div>

          <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/90" data-testid="about-text">
            <p>
              I build AI products that go from idea to production. Not fragile demos — real systems that companies rely on.
            </p>
            <p className="text-muted-foreground">
              My engineering philosophy is simple: AI should solve actual problems, not just look cool. I bridge the gap between cutting-edge model capabilities and rigorous software engineering.
            </p>
            <p>
              Whether it's architecting a massive RAG pipeline, designing agentic workflows, or deploying fast APIs, I ship code that matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
