import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiFlutter,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGooglegemini,
} from "react-icons/si";

const techStack = [
  { name: "Gemini AI", category: "Intelligence", icon: SiGooglegemini },
  { name: "Lovable", category: "AI-Powered Dev", icon: null, letter: "L" },
  { name: "Supabase", category: "Database / Backend", icon: SiSupabase },
  { name: "React", category: "Frontend", icon: SiReact },
  { name: "TypeScript", category: "Fullstack", icon: SiTypescript },
  { name: "Flutter", category: "Mobile", icon: SiFlutter },
  { name: "Python", category: "Backend / Tooling", icon: SiPython },
  { name: "SonarQube", category: "Code Quality", icon: null, letter: "S" },
  { name: "Docker", category: "Deployment", icon: SiDocker },
  { name: "Git", category: "Version Control", icon: SiGit },
  { name: "Agentic AI", category: "Architecture", icon: null, letter: "A" },
  { name: "Vibe Coding", category: "Methodology", icon: null, letter: "V" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="tech-heading">
            Tools of the Trade
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The stack I use to go from idea to shipped product — fast.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
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
              {tech.icon ? (
                <tech.icon className="w-5 h-5 text-muted-foreground" />
              ) : (
                <div className="w-5 h-5 rounded-md bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary">
                  {tech.letter}
                </div>
              )}
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
