import React from "react";
import { motion } from "framer-motion";
import { 
  SiOpenai, 
  SiPython, 
  SiTypescript, 
  SiFastapi, 
  SiDocker,
  SiReact
} from "react-icons/si";

const techStack = [
  { name: "GPT-4 / LLMs", category: "Intelligence", icon: SiOpenai },
  { name: "LangChain", category: "Orchestration", icon: null },
  { name: "LlamaIndex", category: "RAG / Data", icon: null },
  { name: "Python", category: "Backend", icon: SiPython },
  { name: "TypeScript", category: "Frontend / Fullstack", icon: SiTypescript },
  { name: "FastAPI", category: "API Layer", icon: SiFastapi },
  { name: "Pinecone", category: "Vector DB", icon: null },
  { name: "React", category: "UI", icon: SiReact },
  { name: "Docker", category: "Deployment", icon: SiDocker },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="tech-heading">
            AI Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My arsenal for building intelligent, resilient, and fast systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 bg-secondary/40 border border-white/5 hover:border-primary/30 rounded-xl px-5 py-3 transition-all hover:bg-secondary/60 cursor-default"
              data-testid={`tech-item-${i}`}
            >
              {tech.icon && <tech.icon className="w-5 h-5 text-muted-foreground" />}
              {!tech.icon && <div className="w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center text-[10px] font-bold text-muted-foreground">AI</div>}
              <div>
                <div className="text-sm font-semibold">{tech.name}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">{tech.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
