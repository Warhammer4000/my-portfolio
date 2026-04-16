import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Users } from "lucide-react";

export default function Publication() {
  return (
    <section id="book" className="py-24 relative bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="publication-heading">
            Published Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond code — sharing what I've learned with the broader community.
          </p>
        </div>

        <motion.a
          href="https://link.springer.com/book/10.1007/978-1-4842-6917-6"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group block"
          data-testid="link-book"
        >
          <div className="relative rounded-2xl border border-white/10 bg-secondary/20 hover:border-primary/40 hover:bg-secondary/30 transition-all duration-300 overflow-hidden p-8 md:p-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Book icon / cover placeholder */}
              <div className="shrink-0">
                <div className="w-28 h-36 rounded-lg bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                  <BookOpen className="w-10 h-10 text-primary/70" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Apress · Springer · 2021
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  How to Make a Game
                </h3>
                <p className="text-muted-foreground mb-2 text-base leading-relaxed">
                  Go From Idea to Publication — Avoiding the Common Pitfalls Along the Way
                </p>

                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Tanimul Haque Khan &amp; Minhaz-Us-Salakeen Fahme</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  A practical guide to the full game development lifecycle — from initial concept and design through development, testing, and publishing. 278 pages covering the decisions, tradeoffs, and pitfalls that most tutorials skip. Published by Apress, an imprint of Springer Nature.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                  <span className="bg-secondary/60 border border-white/5 px-3 py-1 rounded-full">278 Pages</span>
                  <span className="bg-secondary/60 border border-white/5 px-3 py-1 rounded-full">Game Development</span>
                  <span className="bg-secondary/60 border border-white/5 px-3 py-1 rounded-full">ISBN 978-1-4842-6917-6</span>
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
