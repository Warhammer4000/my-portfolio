import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const recommendations = [
  {
    id: 1,
    quote: "Tanim was introduced to me back in 2016 by the name of '2 Takar Developer'. We have come a long way. His knowledge about game development and AR/VR is PRICELESS. To my knowledge, he is the first Bangladeshi who has a released game on STEAM.",
    author: "B M Mohaiminul Islam Rahul",
    role: "Product Manager · Brain Station 23"
  },
  {
    id: 2,
    quote: "Tanimul Haque Khan is one of the talented and hard-working engineers. He is very keen to learn new things and keep his skill set updated. He is very motivational and a very responsible person at the workplace.",
    author: "Shahidul Islam",
    role: "ML & MLOps Expert · AI Systems Engineer"
  },
  {
    id: 3,
    quote: "One of my topmost students. Possesses an outstanding level of rational ability and utmost sincerity.",
    author: "Shovra Das",
    role: "Software Developer · Former Teacher at AIUB"
  },
  {
    id: 4,
    quote: "He was one of the best students with academic knowledge and extraordinary academic results. A passionate game developer with a team-leading and managing skill.",
    author: "Saumya Shovan Roy",
    role: "Lead Software Engineer · Cloud, Security & AI"
  }
];

export default function Impact() {
  return (
    <section className="py-24 bg-card/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">

        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="impact-heading">
            Recommendations
          </h2>
          <p className="text-muted-foreground text-lg">What colleagues and collaborators have said.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {recommendations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="bg-secondary/20 border-white/5 h-full relative p-6 hover:border-white/10 transition-colors">
                <Quote className="absolute top-6 left-6 w-7 h-7 text-primary/15" />
                <CardContent className="pt-8 px-0 pb-0">
                  <p className="text-base text-muted-foreground italic mb-5 relative z-10 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-white/5 pt-4">
                    <div className="font-semibold text-foreground text-sm">{item.author}</div>
                    <div className="text-xs text-primary font-mono mt-0.5">{item.role}</div>
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
          <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8 px-8 md:px-16 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
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
              <div className="text-4xl font-bold text-foreground mb-2" data-testid="stat-steam">1st</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-mono">Bangladeshi on Steam</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">game published</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
