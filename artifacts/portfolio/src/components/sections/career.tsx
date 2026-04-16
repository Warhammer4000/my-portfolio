import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const brainStation = [
  {
    id: 1,
    role: "Senior Engineering Manager",
    company: "Brain Station 23",
    date: "Jan 2026 – Present",
    description: "Leading engineering teams while driving the adoption of AI tools internally. Responsible for evaluating and deploying emerging AI technologies to increase department efficiency across the organization.",
    current: true,
  },
  {
    id: 2,
    role: "Engineering Manager",
    company: "Brain Station 23",
    date: "Jul 2025 – Dec 2025",
    description: "Developed and shipped internal AI tools that empowered departments to work more efficiently. Introduced AI-first workflows using tools like Lovable, Gemini, and Supabase — resulting in 6 shipped AI products within a year.",
  },
  {
    id: 3,
    role: "Head of Department",
    company: "Brain Station 23",
    date: "Jul 2023 – Jun 2025",
    description: "Led Brain Station 23's internal game studio initiative. Conducted feasibility analysis, drove game developer training programs, forged partnerships with Microsoft, Sony, and Nintendo, and researched end-to-end game publishing from Bangladesh.",
  },
  {
    id: 4,
    role: "Business Unit Head",
    company: "Brain Station 23",
    date: "Jan 2021 – Jun 2023",
    description: "Ran a 30+ person AR/VR & Game Development service business unit. Responsible for P&L forecasting, business planning, client happiness, employee growth, compensation, benefits, and team culture.",
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "Brain Station 23",
    date: "Aug 2019 – Jan 2021",
    description: "Managed projects end-to-end, led teams, handled client relationships, automated internal workflows, and provided pre-sales support.",
  },
  {
    id: 6,
    role: "Associate Software Engineer",
    company: "Brain Station 23",
    date: "Dec 2018 – Aug 2019",
    description: "Game development, technical documentation, team leadership, project analysis, and R&D of new technologies.",
  },
];

const iQuantile = [
  {
    id: 7,
    role: "Manager",
    company: "iQuantile",
    date: "Jan 2018 – Dec 2018",
    description: "Project management, system design, UML and ERD modelling for software products.",
  },
  {
    id: 8,
    role: "Game Developer",
    company: "iQuantile",
    date: "Mar 2017 – Jan 2018",
    description: "Full-cycle game development — from asset acquisition and team coordination to publishing and maintenance.",
  },
];

function TimelineItem({ role, index, isLast }: { role: typeof brainStation[0]; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="relative pl-8 pb-8 group"
    >
      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors duration-300 z-10 ${role.current ? "bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]" : "bg-background border-white/20 group-hover:border-primary"}`} />
      {!isLast && <div className="absolute left-[5px] top-5 bottom-0 w-px bg-white/8" />}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 className="text-base font-bold text-foreground">{role.role}</h3>
        {role.current && (
          <span className="text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">Current</span>
        )}
        <span className="text-xs font-mono text-muted-foreground ml-auto">{role.date}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
    </motion.div>
  );
}

export default function Career() {
  const [showEarly, setShowEarly] = useState(false);

  return (
    <section id="career" className="py-24 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="career-heading">
          Career
        </h2>
        <p className="text-muted-foreground mb-16">7+ years building software, leading teams, and shipping products.</p>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Brain Station 23 · 7 years 5 months</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div>
            {brainStation.map((role, i) => (
              <TimelineItem key={role.id} role={role} index={i} isLast={i === brainStation.length - 1} />
            ))}
          </div>
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors border border-white/5 hover:border-white/10 rounded-xl bg-secondary/10 hover:bg-secondary/20 mb-8"
          onClick={() => setShowEarly(!showEarly)}
          data-testid="btn-toggle-early-career"
        >
          <span className="font-mono uppercase tracking-wider text-xs">{showEarly ? "Hide" : "Show"} earlier experience</span>
          <motion.div animate={{ rotate: showEarly ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showEarly && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">iQuantile · 1 year 10 months</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
              {iQuantile.map((role, i) => (
                <TimelineItem key={role.id} role={role} index={i} isLast={i === iQuantile.length - 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
