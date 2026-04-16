import React from "react";
import { motion } from "framer-motion";

const roles = [
  {
    id: 1,
    role: "Senior AI Engineer",
    company: "NexusCorp",
    date: "2023 - Present",
    description: "Leading the core AI team. Architected agentic frameworks that automated 40% of internal data workflows. Scaled RAG pipelines serving 10k+ daily queries."
  },
  {
    id: 2,
    role: "AI Software Engineer",
    company: "DataMind AI",
    date: "2021 - 2023",
    description: "Developed fine-tuned NLP models and deployed REST APIs using FastAPI and Docker. Improved model inference speed by 3x."
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "TechFlow Systems",
    date: "2019 - 2021",
    description: "Built scalable backend microservices in Python and Node.js. Transitioned into ML engineering by implementing the company's first predictive analytics dashboard."
  }
];

export default function Career() {
  return (
    <section id="career" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center" data-testid="career-heading">
          Career History
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {roles.map((role, index) => (
            <motion.div 
              key={role.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0 md:flex items-start justify-between group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted border border-background group-hover:bg-primary transition-colors z-10" />
              
              {/* Desktop center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-white/10 z-0" />

              <div className="md:w-[45%] md:text-right md:pr-12">
                <h3 className="text-xl font-bold text-foreground mb-1">{role.role}</h3>
                <div className="text-primary font-medium mb-2">{role.company}</div>
              </div>

              <div className="md:w-[45%] md:pl-12 mt-2 md:mt-0">
                <span className="inline-block text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded mb-3">
                  {role.date}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
