import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Keyboard, Braces, Code2 } from "lucide-react";
import { SiSteam, SiItchdotio } from "react-icons/si";
import { BsXbox, BsWindows } from "react-icons/bs";

interface PlatformLink {
  label: string;
  url: string;
  icon: "steam" | "xbox" | "itch" | "windows";
}

interface Game {
  id: number;
  title: string;
  year: string;
  studio: string;
  genre: string;
  description: string;
  thumbnail: string | null;
  links: PlatformLink[];
  highlight: boolean;
  badge: string | null;
}

const games: Game[] = [
  {
    id: 1,
    title: "A RollBack Story",
    year: "2019",
    studio: "iQuantile",
    genre: "Adventure · Indie · Platformer",
    description: "The game that made history — the first game by a Bangladeshi developer published on Steam. A physics-based platformer with Metroidvania elements.",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/886390/header.jpg",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/886390/A_RollBack_Story/", icon: "steam" }
    ],
    highlight: true,
    badge: "1st Bangladeshi game on Steam"
  },
  {
    id: 2,
    title: "Control:Override",
    year: "2021",
    studio: "B-Deshi Interactive · Brain Station 23",
    genre: "Puzzle · Sci-Fi · Indie",
    description: "A sci-fi puzzle-platformer released on Steam, Xbox One, Xbox Series X|S, and Xbox Cloud Gaming — taking Bangladeshi game development multi-platform.",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1406090/header.jpg",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/1406090/ControlOverride/", icon: "steam" },
      { label: "Xbox", url: "https://www.xbox.com/en-US/play/games/controloverride/9N73W1728BG8", icon: "xbox" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 3,
    title: "Exwordcist",
    year: "2022",
    studio: "Brain Station 23",
    genre: "Typing · Educational · Indie",
    description: "A clever typing game — a portmanteau of 'Exorcist' and 'Word'. Sharpen your typing speed while battling supernatural forces.",
    thumbnail: null,
    links: [
      { label: "itch.io", url: "https://brainstation23.itch.io/exwordcist", icon: "itch" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 4,
    title: "SILENT SCREAM",
    year: "2023",
    studio: "Studio 23 · Brain Station 23",
    genre: "Action · Horror · Adventure",
    description: "A horror-action-adventure published on Steam and the Microsoft Store. Released September 2023, with atmospheric tension at its core.",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1955750/header.jpg",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/1955750/SILENT_SCREAM/", icon: "steam" },
      { label: "Windows", url: "https://apps.microsoft.com/detail/9pdjzk7hlhsd?hl=en-US&gl=BD", icon: "windows" }
    ],
    highlight: false,
    badge: null
  },
  {
    id: 5,
    title: "SILENT SCREAM 2",
    year: "2025",
    studio: "Studio 23 · Brain Station 23",
    genre: "Action-Adventure · Horror · Puzzle",
    description: "The sequel — launched in Early Access on Steam in May 2025. Deeper puzzle mechanics and an expanded horror narrative.",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/3023460/header.jpg",
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/3023460/SILENT_SCREAM_2/", icon: "steam" }
    ],
    highlight: false,
    badge: null
  }
];

function PlatformIcon({ icon, label }: { icon: PlatformLink["icon"]; label: string }) {
  const base = "inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors";

  const iconEl = (() => {
    if (icon === "steam") return <SiSteam className="w-3.5 h-3.5 shrink-0" />;
    if (icon === "itch") return <SiItchdotio className="w-3.5 h-3.5 shrink-0" />;
    if (icon === "xbox") return <BsXbox className="w-3.5 h-3.5 shrink-0" />;
    if (icon === "windows") return <BsWindows className="w-3.5 h-3.5 shrink-0" />;
    return <ExternalLink className="w-3.5 h-3.5 shrink-0" />;
  })();

  return (
    <span className={`${base} group/link`}>
      {iconEl}
      {label}
    </span>
  );
}

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
            Before AI engineering, there was game development. Led and contributed to multiple shipped titles across Steam, Xbox, Windows, and itch.io — including the first game by a Bangladeshi developer published on Steam.
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
              <div className={`group h-full rounded-2xl border flex flex-col transition-all duration-300 relative overflow-hidden
                ${game.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                  : "border-white/8 bg-secondary/20 hover:border-white/20"
                }`}
              >
                {game.highlight && (
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />
                )}

                {/* Thumbnail */}
                <div className="relative w-full aspect-[2.14/1] overflow-hidden shrink-0">
                  {game.thumbnail ? (
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-950 via-slate-900 to-background flex items-center justify-center relative overflow-hidden">
                      {/* dot grid */}
                      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                      <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase text-white/25">Typing Game · itch.io</span>
                      <Braces className="absolute top-4 right-4 w-4 h-4 text-orange-400/35" />
                      <Code2 className="absolute bottom-8 left-4 w-4 h-4 text-amber-400/30" />
                      <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm">
                        <Keyboard className="w-9 h-9 text-orange-300/80" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                    <span className="text-xs font-mono text-white/70">{game.year}</span>
                    {game.badge && (
                      <span className="text-[10px] font-mono bg-primary/90 text-black px-2 py-0.5 rounded-full font-semibold">
                        ★ {game.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3 className={`text-base font-bold mb-0.5 transition-colors leading-snug
                      ${game.highlight ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {game.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground/60">{game.studio}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{game.description}</p>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-3">
                    {game.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${game.title} on ${link.label}`}
                      >
                        <PlatformIcon icon={link.icon} label={link.label} />
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
