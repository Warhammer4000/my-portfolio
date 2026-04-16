import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  SiSupabase, SiReact, SiTypescript, SiFlutter, SiPython,
  SiGooglegemini, SiSonar, SiDocker, SiGit, SiPypi, SiDart,
  SiZod, SiTrivy,
} from "react-icons/si";
import {
  Zap, ExternalLink, Mic, ShieldCheck, BarChart2, Users, FileAudio, ClipboardList,
  Network, Database, Layers, TerminalSquare, Shield, GitBranch, Code2,
  ChevronDown, ChevronUp,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle, CardFooter } from "@/components/ui/card";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

/* ── Tech icon registry ─────────────────────────────────────── */
type TechDef =
  | { kind: "si"; Icon: IconType; color: string }
  | { kind: "img"; src: string }
  | { kind: "lucide"; node: ReactNode }
  | { kind: "letter"; letter: string; color: string };

const techRegistry: Record<string, TechDef> = {
  "Gemini AI":     { kind: "si",     Icon: SiGooglegemini, color: "#4285F4" },
  "Lovable":       { kind: "img",    src: "https://lovable.dev/favicon.ico" },
  "Supabase":      { kind: "si",     Icon: SiSupabase,     color: "#3ECF8E" },
  "React":         { kind: "si",     Icon: SiReact,        color: "#61DAFB" },
  "React.js":      { kind: "si",     Icon: SiReact,        color: "#61DAFB" },
  "TypeScript":    { kind: "si",     Icon: SiTypescript,   color: "#3178C6" },
  "Zod":           { kind: "si",     Icon: SiZod,          color: "#3E67B1" },
  "Flutter":       { kind: "si",     Icon: SiFlutter,      color: "#54C5F8" },
  "Dart":          { kind: "si",     Icon: SiDart,         color: "#00B4D8" },
  "Python":        { kind: "si",     Icon: SiPython,       color: "#FFD43B" },
  "PyPI":          { kind: "si",     Icon: SiPypi,         color: "#3775A9" },
  "SonarQube":     { kind: "si",     Icon: SiSonar,        color: "#CB2029" },
  "Semgrep":       { kind: "letter", letter: "S",          color: "#FC6D26" },
  "Trivy":         { kind: "si",     Icon: SiTrivy,        color: "#1904DA" },
  "Docker":        { kind: "si",     Icon: SiDocker,       color: "#2496ED" },
  "Git":           { kind: "si",     Icon: SiGit,          color: "#F05032" },
  "Realtime":      { kind: "lucide", node: <Zap className="w-4 h-4" style={{ color: "#3ECF8E" }} /> },
  "Vibe Coding":   { kind: "letter", letter: "V",          color: "#a855f7" },
};

function TechIcon({ name }: { name: string }) {
  const def = techRegistry[name];
  const wrapper = "flex items-center justify-center w-7 h-7 rounded-md bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-colors cursor-default";
  if (!def) return (
    <span title={name} className={`${wrapper} text-[9px] font-bold text-muted-foreground uppercase`}>
      {name.slice(0, 2)}
    </span>
  );
  if (def.kind === "si") return (
    <span title={name} className={wrapper}>
      <def.Icon className="w-4 h-4" style={{ color: def.color }} />
    </span>
  );
  if (def.kind === "img") return (
    <span title={name} className={wrapper}>
      <img src={def.src} alt={name} className="w-4 h-4 object-contain" loading="lazy" />
    </span>
  );
  if (def.kind === "lucide") return (
    <span title={name} className={wrapper}>{def.node}</span>
  );
  return (
    <span title={name} className={wrapper}>
      <span className="text-[10px] font-bold" style={{ color: def.color }}>{def.letter}</span>
    </span>
  );
}

/* ── Product data ───────────────────────────────────────────── */
interface PlaceholderTheme {
  gradient: string;
  centerIcon: ReactNode;
  microIcons: ReactNode[];
  label: string;
}

interface ProductDetails {
  story?: string[];
  features?: { label: string; desc: string }[];
  modules?: { name: string; desc: string }[];
}

interface Product {
  id: number;
  name: string;
  date: string;
  description: string;
  tech: string[];
  outcome: string;
  icon: ReactNode;
  link: string | null;
  linkLabel?: string;
  thumbnail: string | null;
  placeholder?: PlaceholderTheme;
  details?: ProductDetails;
}

const products: Product[] = [
  {
    id: 1,
    name: "Workforce 360",
    date: "Oct 2025 – Present",
    description: "A multi-module HR and workforce management platform designed to centralize operations across employee data, planning, analytics, feedback, and administration. Built with a unified permission model, granular RBAC, and real-time workforce insights.",
    tech: ["Lovable", "Supabase", "React", "TypeScript", "Zod"],
    outcome: "Entire HR ops centralized",
    icon: <Users className="w-5 h-5 text-primary" />,
    link: null,
    thumbnail: null,
    placeholder: {
      gradient: "from-indigo-950 via-slate-900 to-background",
      centerIcon: <Users className="w-9 h-9 text-indigo-300/80" />,
      microIcons: [
        <Network className="w-5 h-5 text-indigo-400/40" />,
        <Database className="w-4 h-4 text-blue-400/40" />,
        <Layers className="w-4 h-4 text-indigo-300/30" />,
      ],
      label: "HR Platform · AI-Assisted",
    },
    details: {
      modules: [
        { name: "Employee Profile & CV Database", desc: "Advanced directory with deep filtering (skills, experience, certifications, availability, billing). CV generation with customizable templates and bulk export (PDF/DOCX)." },
        { name: "Resource Planning & Calendar", desc: "Workforce allocation with timelines, forecasting, and project assignment tracking. Audit trails and utilization metrics." },
        { name: "Reporting & Analytics", desc: "Workforce insights including timesheets, engagement, and organizational composition. Dashboards, pivot tables, and exports." },
        { name: "Surveys & 360° Feedback", desc: "Survey builder with reusable templates, campaign management, analytics, and structured review cycles." },
        { name: "Performance (PIP)", desc: "Configurable workflows for performance improvement tracking and evaluation." },
        { name: "Bench Management", desc: "Non-billable employee tracking with feedback, analytics, and cost visibility." },
        { name: "Food Planning", desc: "Meal scheduling, order aggregation, feedback, and operational analytics." },
        { name: "Project Database", desc: "Central repository with search, documentation, team management, and AI-assisted content." },
        { name: "Security & Admin", desc: "Granular RBAC with module-level permissions, Row-Level Security, full audit logging, feature toggles, and ERP integration." },
      ],
    },
  },
  {
    id: 2,
    name: "Bangla Scribe",
    date: "Jan 2026 – Present",
    description: "Automated Bangla meeting transcription powered by Google Gemini. Eliminated a daily manual workflow of uploading audio, copying, and formatting. Your audio is processed through your own Gemini API key — costs stay near zero, data stays yours.",
    tech: ["Gemini AI", "Lovable", "Supabase", "React"],
    outcome: "Daily manual workflow eliminated",
    icon: <Mic className="w-5 h-5 text-primary" />,
    link: "https://banglascribe.online/",
    linkLabel: "Visit banglascribe.online",
    thumbnail: "https://banglascribe.online/og-image.png",
    details: {
      story: [
        "We transcribe meetings every single day. The existing bots worked well enough for English, but Bangla support was practically non-existent. Google's Gemini, on the other hand, handled Bangla remarkably well — but using it meant a tedious manual workflow of uploading audio, copying text, and formatting it ourselves. Every. Single. Day.",
        "So we asked ourselves: \"Why not just automate the whole thing?\" Bangla Scribe was born from that question. Instead of paying for yet another SaaS subscription that still couldn't handle our language, we built our own tool.",
        "It's mostly a frontend app — your audio is processed through your own Gemini API key, keeping costs near zero. We only charge what it takes to keep the servers running. No venture-backed pricing games. No features gated behind enterprise tiers. Just a tool we needed, shared with everyone who needs it too.",
      ],
    },
  },
  {
    id: 3,
    name: "Code Audit 23",
    date: "Oct 2025 – Present",
    description: "A unified CLI tool that combines SonarQube, Semgrep, and Trivy into a single command. Standardises code quality and security scanning across all projects with SARIF output and an interactive menu — no per-project setup required.",
    tech: ["Python", "PyPI", "SonarQube", "Semgrep", "Trivy"],
    outcome: "Security scanning unified company-wide",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    link: "https://pypi.org/project/code-audit-23/",
    linkLabel: "View on PyPI",
    thumbnail: null,
    placeholder: {
      gradient: "from-emerald-950 via-slate-900 to-background",
      centerIcon: <TerminalSquare className="w-9 h-9 text-emerald-300/80" />,
      microIcons: [
        <Shield className="w-5 h-5 text-emerald-400/40" />,
        <GitBranch className="w-4 h-4 text-teal-400/40" />,
        <Code2 className="w-4 h-4 text-emerald-300/30" />,
      ],
      label: "CLI Tool · Security Scanning",
    },
    details: {
      features: [
        { label: "Unified Interface", desc: "Single command to run multiple code quality and security scans across any project." },
        { label: "SonarQube", desc: "Deep code quality and security analysis with issue tracking and technical debt visibility." },
        { label: "Semgrep", desc: "Lightning-fast static code analysis for OWASP-class security vulnerabilities." },
        { label: "Trivy", desc: "Vulnerability scanning for dependencies and container images with CVE detection." },
        { label: "SARIF Reports", desc: "Standardized output format compatible with GitHub Advanced Security and other platforms." },
        { label: "Interactive Menu", desc: "User-friendly CLI with an interactive selection menu — no flags to memorize." },
        { label: "Cross-Platform", desc: "Works on Windows, macOS, and Linux. Self-contained executable — no installation required." },
      ],
    },
  },
  {
    id: 4,
    name: "Pulse Live",
    date: "Feb 2026",
    description: "A free, open-source alternative to Mentimeter. Run live polls, word clouds, Q&A, quizzes, ratings, and rankings during presentations with real-time audience responses, beautiful visualizations, and full session analytics — fully self-hosted.",
    tech: ["Lovable", "Supabase", "React", "Realtime"],
    outcome: "Zero vendor lock-in, free forever",
    icon: <BarChart2 className="w-5 h-5 text-primary" />,
    link: "https://github.com/Warhammer4000/pulse-live",
    linkLabel: "View on GitHub",
    thumbnail: "https://opengraph.githubassets.com/298baadf32e086e51827297825e89f38a1a666fa39f9e776a5530409388930d7/Warhammer4000/pulse-live",
  },
  {
    id: 5,
    name: "Vocario",
    date: "Sep 2025 – Dec 2025",
    description: "A Flutter app for audio recording and AI-powered summarization using Google Gemini. Single-tap recording for meetings, lectures, and interviews. Supports importing existing audio, Bangla language, and one-tap export of summaries to email, chat, or documents.",
    tech: ["Flutter", "Gemini AI", "Dart"],
    outcome: "Instant AI summaries from any audio",
    icon: <FileAudio className="w-5 h-5 text-primary" />,
    link: "https://play.google.com/store/apps/details?id=com.brainstation23.vocario&hl=en_US&pli=1",
    linkLabel: "View on Play Store",
    thumbnail: "https://play-lh.googleusercontent.com/CxxYHVIeABVXujE44atgoqz-9MsEziHvnVezl5BSQpYnumrn19uj2xCHOEnIswyvQQ",
  },
  {
    id: 6,
    name: "Open Pulse Survey",
    date: "Jul 2025 – Oct 2025",
    description: "A self-hosted employee feedback platform for HR teams. Features a survey builder with reusable templates, campaign management, analytics, and structured 360° review cycles — all within the company's own infrastructure for full data sovereignty.",
    tech: ["React.js", "Supabase", "Vibe Coding"],
    outcome: "Employee feedback stays internal",
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    link: "https://openpulsesurvey.com/",
    linkLabel: "Visit openpulsesurvey.com",
    thumbnail: "https://openpulsesurvey.com/og-image.png",
  },
];

/* ── Animation variants ─────────────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};

/* ── Thumbnail ──────────────────────────────────────────────── */
function Thumbnail({ product }: { product: Product }) {
  if (product.thumbnail) {
    return (
      <div className="relative w-full aspect-video overflow-hidden bg-secondary/50 shrink-0">
        <img
          src={product.thumbnail}
          alt={product.name}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            product.id === 5
              ? "object-contain p-6 bg-gradient-to-br from-[#00B4D8]/10 to-secondary/80"
              : "object-cover"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
      </div>
    );
  }
  const ph = product.placeholder;
  return (
    <div className={`relative w-full aspect-video overflow-hidden shrink-0 bg-gradient-to-br ${ph?.gradient ?? "from-primary/10 via-secondary/40 to-background/80"} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      {ph?.label && (
        <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase text-white/30 z-10">{ph.label}</span>
      )}
      {ph?.microIcons[0] && <div className="absolute top-4 right-4 z-10">{ph.microIcons[0]}</div>}
      {ph?.microIcons[1] && <div className="absolute bottom-8 left-4 z-10">{ph.microIcons[1]}</div>}
      {ph?.microIcons[2] && <div className="absolute top-1/2 right-8 -translate-y-1/2 z-10">{ph.microIcons[2]}</div>}
      <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm">
        {ph?.centerIcon ?? <div className="opacity-20 scale-150">{product.icon}</div>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
    </div>
  );
}

/* ── Details panel ──────────────────────────────────────────── */
function DetailsPanel({ details }: { details: ProductDetails }) {
  if (details.story) {
    return (
      <div className="flex flex-col gap-2.5">
        {details.story.map((p, i) => (
          <p key={i} className="text-xs text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>
    );
  }
  if (details.features) {
    return (
      <ul className="grid grid-cols-1 gap-1.5">
        {details.features.map((f) => (
          <li key={f.label} className="flex items-start gap-2 text-xs">
            <span className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5" />
            <span>
              <span className="font-semibold text-foreground/80">{f.label}</span>
              {" — "}
              <span className="text-muted-foreground">{f.desc}</span>
            </span>
          </li>
        ))}
      </ul>
    );
  }
  if (details.modules) {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {details.modules.map((m) => (
          <li key={m.name} className="flex items-start gap-2 text-xs">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5" />
            <span>
              <span className="font-semibold text-foreground/80">{m.name}</span>
              <span className="text-muted-foreground/70 block leading-snug">{m.desc}</span>
            </span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

/* ── Product card ───────────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = !!product.details;

  return (
    <Card className="h-full bg-secondary/30 border-white/10 hover:border-primary/50 transition-colors duration-300 flex flex-col group overflow-hidden relative p-0">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700 opacity-0 group-hover:opacity-100 z-10" />

      <Thumbnail product={product} />

      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-secondary border border-white/5 shrink-0">
              {product.icon}
            </div>
            <div>
              <CardTitle className="text-base font-bold group-hover:text-primary transition-colors leading-tight" data-testid={`product-title-${product.id}`}>
                {product.name}
              </CardTitle>
              <span className="text-xs font-mono text-muted-foreground">{product.date}</span>
            </div>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5 shrink-0 ml-2">
            {product.outcome}
          </span>
        </div>

        {/* Description */}
        <CardContent className="p-0 mb-3">
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </CardDescription>
        </CardContent>

        {/* Expandable details */}
        {hasDetails && (
          <>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="self-start flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-2"
            >
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              {expanded ? "Hide details" : "Show details"}
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/5 pt-3 mb-3 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                    <DetailsPanel details={product.details!} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Footer: link button + tech icons */}
        <CardFooter className="p-0 mt-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {product.tech.map((t) => (
              <TechIcon key={t} name={t} />
            ))}
          </div>
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/25 hover:border-primary/40 rounded-full px-3 py-1.5 transition-colors shrink-0"
            >
              {product.linkLabel ?? "View project"}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 relative bg-card/50 border-y border-white/5">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" data-testid="products-heading">
            Recent AI Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Built and shipped since 2025 — real tools solving real problems at Brain Station 23 and beyond. Not demos. Not experiments. Things people use every day.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={cardVariant}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
