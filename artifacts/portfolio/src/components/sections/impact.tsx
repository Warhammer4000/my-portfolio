import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impacts = [
  {
    id: 1,
    quote: "Tanimul has an unusual ability to identify a painful daily workflow and turn it into a shipped product within weeks. Bangla Scribe eliminated hours of manual work for our entire team overnight.",
    author: "Colleague, Brain Station 23",
    role: "Engineering Team"
  },
  {
    id: 2,
    quote: "He doesn't just manage engineers — he builds alongside them. When he introduced AI-first tooling across our departments, the velocity change was visible within the first month.",
    author: "Colleague, Brain Station 23",
    role: "Product Team"
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center" data-testid="impact-heading">
          Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-secondary/20 border-white/5 h-full relative p-6">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                <CardContent className="pt-8 px-0 pb-0">
                  <p className="text-lg text-muted-foreground italic mb-6 relative z-10">
                    "{item.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{item.author}</div>
                    <div className="text-sm text-primary font-mono mt-1">{item.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 px-8 md:px-16 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="stat-products">6</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">AI Products Shipped</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">since 2025</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="stat-years">7+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Years Engineering</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">at Brain Station 23</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="stat-team">30+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Person Team Led</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">AR/VR & Game Dev</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
