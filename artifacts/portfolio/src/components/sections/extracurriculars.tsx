import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Users, Gamepad2, Zap, Cpu, Brain, Sparkles, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlaceholderTheme {
  gradient: string;
  centerIcon: React.ReactNode;
  microIcons: React.ReactNode[];
  label: string;
}

interface Event {
  id: number;
  title: string;
  type: "Hackathon" | "Game Jam" | "Meetup";
  role: string;
  period: string;
  description: string;
  url: string;
  thumbnail: string | null;
  placeholder?: PlaceholderTheme;
}

const events: Event[] = [
  {
    id: 1,
    title: "Poridhi AI Engineering Hackathon",
    type: "Hackathon",
    role: "Organizer",
    period: "2024 – 2025",
    description: "Organized and hosted the AI Engineering Hackathon in partnership with Poridhi — Bangladesh's largest AI-focused learning platform. Brought together developers to build AI-powered solutions under time pressure.",
    url: "https://poridhi.io/hackathon",
    thumbnail: null,
    placeholder: {
      gradient: "from-blue-950 via-slate-900 to-background",
      centerIcon: <Cpu className="w-9 h-9 text-blue-300/80" />,
      microIcons: [
        <Sparkles className="w-5 h-5 text-blue-400/40" />,
        <Brain className="w-4 h-4 text-indigo-400/35" />,
        <Zap className="w-4 h-4 text-cyan-400/30" />,
      ],
      label: "AI Engineering Hackathon",
    },
  },
  {
    id: 2,
    title: "Learnathon by Geeky Solutions",
    type: "Hackathon",
    role: "Organizer",
    period: "Ongoing",
    description: "Co-organized Learnathon — a flagship tech learning competition and hackathon run by Geeky Solutions, bringing together Bangladesh's brightest developers to learn and build.",
    url: "https://learnathon.geeky.solutions/",
    thumbnail: null,
    placeholder: {
      gradient: "from-amber-950 via-slate-900 to-background",
      centerIcon: <GraduationCap className="w-9 h-9 text-amber-300/80" />,
      microIcons: [
        <Trophy className="w-5 h-5 text-amber-400/40" />,
        <Zap className="w-4 h-4 text-orange-400/35" />,
        <Users className="w-4 h-4 text-amber-300/30" />,
      ],
      label: "Learning Competition",
    },
  },
  {
    id: 3,
    title: "Brain JAM",
    type: "Game Jam",
    role: "Organizer",
    period: "Jan – Feb 2020",
    description: "Ran Brain Station 23's inaugural game jam — a 2-week event inviting developers to design, build, and ship a playable game from scratch. Fostered game dev culture within the Bangladeshi dev community.",
    url: "https://itch.io/jam/brain-jam",
    thumbnail: "https://img.itch.zone/aW1hZ2UyL2phbS8xMzA2Ny8yOTE5MTM1LnBuZw==/original/qC3YoU.png",
  },
  {
    id: 4,
    title: "BrainJam March 2021",
    type: "Game Jam",
    role: "Organizer",
    period: "Mar – Apr 2021",
    description: "Second edition of the Brain Station 23 game jam. Expanded participation and refined the event format, further establishing Bangladesh's game development community on itch.io.",
    url: "https://itch.io/jam/brainjammarch2021",
    thumbnail: "https://img.itch.zone/aW1hZ2UyL2phbS8yOTg3NTUvNTQ2MzgzMC5qcGc=/original/YedajI.jpg",
  },
  {
    id: 5,
    title: "Brain Station 23 × IUTCS Hack-a-Jam 2021",
    type: "Game Jam",
    role: "Organizer",
    period: "Dec 2021 – Jan 2022",
    description: "Partnered with IUT Computer Society to host a cross-institutional game jam — merging hackathon energy with game development. Teams competed to build and ship games in under two weeks.",
    url: "https://itch.io/jam/iutcs-hack-a-jam-2021",
    thumbnail: "https://img.itch.zone/aW1nLzc1ODc2MTIuanBn/original/rhXcjq.jpg",
  },
];

const typeColors: Record<Event["type"], string> = {
  "Hackathon": "bg-blue-500/10 border-blue-500/30 text-blue-400",
  "Game Jam":  "bg-purple-500/10 border-purple-500/30 text-purple-400",
  "Meetup":    "bg-green-500/10 border-green-500/30 text-green-400",
};

const typeIcon: Record<Event["type"], React.ReactNode> = {
  "Hackathon": <Zap className="w-3.5 h-3.5" />,
  "Game Jam":  <Gamepad2 className="w-3.5 h-3.5" />,
  "Meetup":    <Users className="w-3.5 h-3.5" />,
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Extracurriculars() {
  return (
    <section id="events" className="py-24 relative bg-card/30 border-y border-white/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="events-heading">
            Community & Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Organizing hackathons, game jams, and learning competitions — building Bangladesh's tech and game development communities from the ground up.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={itemVariant} className="h-full">
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl border border-white/8 bg-secondary/20 hover:border-white/20 hover:bg-secondary/30 transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-video overflow-hidden shrink-0">
                  {event.thumbnail ? (
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${event.placeholder?.gradient ?? "from-primary/15 via-secondary/50 to-background"} flex items-center justify-center relative overflow-hidden`}>
                      {/* dot grid */}
                      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      {event.placeholder?.label && (
                        <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase text-white/25 z-10">
                          {event.placeholder.label}
                        </span>
                      )}
                      {event.placeholder?.microIcons[0] && <div className="absolute top-4 right-4 z-10">{event.placeholder.microIcons[0]}</div>}
                      {event.placeholder?.microIcons[1] && <div className="absolute bottom-8 left-4 z-10">{event.placeholder.microIcons[1]}</div>}
                      {event.placeholder?.microIcons[2] && <div className="absolute top-1/2 right-8 -translate-y-1/2 z-10">{event.placeholder.microIcons[2]}</div>}
                      <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm">
                        {event.placeholder?.centerIcon ?? (
                          event.type === "Hackathon"
                            ? <Zap className="w-9 h-9 text-primary/50" />
                            : <Gamepad2 className="w-9 h-9 text-primary/50" />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${typeColors[event.type]}`}>
                      {typeIcon[event.type]}
                      {event.type}
                    </span>
                    <span className="text-[10px] font-mono text-white/60">{event.period}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                  </div>
                  <Badge variant="outline" className="self-start text-[10px] bg-primary/10 text-primary border-primary/20 font-mono">
                    {event.role}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mt-1">
                    {event.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
