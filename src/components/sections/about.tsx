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
              I'm a Senior Engineering Manager at Brain Station 23 — 7+ years building software and leading teams across game development, AR/VR, and now AI.
            </p>
            <p className="text-muted-foreground">
              My current focus is building internal AI tools that make real work faster. Not expensive SaaS subscriptions for features we don't need — tools we design ourselves for the exact problems we face every day.
            </p>
            <p>
              I believe AI engineering is about judgment, not just APIs. Knowing when to build, when to automate, and how to ship something colleagues actually rely on.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl">
              Earlier in my career I led Brain Station 23's AR/VR and XR practice — delivering B2B immersive experiences for international clients across training, simulation, and enterprise use cases. That work shaped how I think about emerging technology: prove it with a real product, not a proof of concept.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-sm font-mono">
            <a
              href="https://2takardeveloper.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Read my blog on Medium →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
