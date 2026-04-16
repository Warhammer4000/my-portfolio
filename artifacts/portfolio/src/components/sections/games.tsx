import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Gamepad2, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const games = [
  {
    id: 1,
    title: "A RollBack Story",
    year: "2019",
    studio: "iQuantile",
    platforms: ["Steam"],
    genre: "Adventure · Indie · Platformer",
    description: "The game that made history — the first game by a Bangladeshi developer to be published on Steam. A physics-based platformer with Metroidvania elements.",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/886390/A_RollBack_Story/" }
    ],
    highlight: true,
    badge: "First Bangladeshi game on Steam"
  },
  {
    id: 2,
    title: "Control:Override",
    year: "2021",
    studio: "B-Deshi Interactive · Brain Station 23",
    platforms: ["Steam", "Xbox", "Xbox Cloud"],
    genre: "Puzzle · Sci-Fi · Casual · Indie",
    description: "A sci-fi puzzle-platformer published on Steam, Xbox One, Xbox Series X|S, and Xbox Cloud Gaming — taking Bangladeshi game development multi-platform.",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/1406090/ControlOverride/" },
      { label: "Xbox", url: "https://www.xbox.com/en-US/play/games/controloverride/9N73W1728BG8" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 3,
    title: "Exwordcist",
    year: "2022",
    studio: "Brain Station 23",
    platforms: ["itch.io"],
    genre: "Typing · Educational · Indie",
    description: "A clever typing game from Brain Station 23's internal game studio — a portmanteau of 'Exorcist' and 'Word'. Sharpen your typing skills while battling the supernatural.",
    links: [
      { label: "itch.io", url: "https://brainstation23.itch.io/exwordcist" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 4,
    title: "SILENT SCREAM",
    year: "2023",
    studio: "Studio 23 · Brain Station 23",
    platforms: ["Steam"],
    genre: "Action · Adventure · Horror · Indie",
    description: "A horror-action-adventure game developed by Studio 23 and published by Brain Station 23. Released September 2023 on Steam.",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/1955750/SILENT_SCREAM/" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 5,
    title: "SILENT SCREAM 2",
    year: "2025",
    studio: "Studio 23 · Brain Station 23",
    platforms: ["Steam"],
    genre: "Action-Adventure · Horror · Puzzle · Indie",
    description: "The sequel — launched in Early Access on Steam in May 2025. Expands on the original with deeper puzzle mechanics and a broader horror narrative.",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/3023460/SILENT_SCREAM_2/" }
    ],
    highlight: false,
    badge: null
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Games() {
  return (
    <section id="games" className="py-24 relative bg-card/20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="games-heading">
            Games Released
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Before AI engineering, there was game development. Led and contributed to multiple shipped titles across Steam, Xbox, and itch.io — including the first game by a Bangladeshi developer published on Steam.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {games.map((game) => (
            <motion.div key={game.id} variants={itemVariant} className="h-full">
              <div className={`group h-full rounded-2xl border bg-secondary/20 p-6 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden
                ${game.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                  : "border-white/8 hover:border-white/20"
                }`}
              >
                {game.highlight && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className={`p-2 rounded-lg border ${game.highlight ? "bg-primary/15 border-primary/30" : "bg-secondary border-white/5"}`}>
                    {game.platforms.includes("Xbox") ? (
                      <Monitor className={`w-5 h-5 ${game.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    ) : (
                      <Gamepad2 className={`w-5 h-5 ${game.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    )}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{game.year}</span>
                </div>

                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-1 transition-colors ${game.highlight ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                    {game.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground/70 mb-3">{game.studio}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{game.description}</p>
                </div>

                <div className="space-y-3">
                  {game.badge && (
                    <div className="inline-block text-xs font-mono bg-primary/15 border border-primary/30 text-primary px-3 py-1 rounded-full">
                      ★ {game.badge}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((p) => (
                      <Badge key={p} variant="secondary" className="text-xs bg-white/5 border-white/10 text-muted-foreground">
                        {p}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs bg-white/5 border-white/10 text-muted-foreground/60">
                      {game.genre.split(" · ")[0]}
                    </Badge>
                  </div>

                  <div className="flex gap-3">
                    {game.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
