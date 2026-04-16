import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impacts = [
  {
    id: 1,
    quote: "Tanimul is one of those rare engineers who deeply understands both the math behind LLMs and the software engineering required to put them in production. He shipped our core AI feature in weeks.",
    author: "Sarah J.",
    role: "VP of Engineering"
  },
  {
    id: 2,
    quote: "Working with him completely changed how we view AI implementation. He didn't just build a wrapper; he engineered an autonomous system that saved our operations team thousands of hours.",
    author: "Michael T.",
    role: "Director of Product"
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center" data-testid="impact-heading">
          Impact & Colleagues
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-8 md:gap-16 py-8 px-12 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Products Shipped</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">99%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
