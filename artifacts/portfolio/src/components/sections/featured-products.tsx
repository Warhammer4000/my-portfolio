import React from "react";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Mic, ShieldCheck, BarChart2, Users, FileAudio, ClipboardList } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  date: string;
  description: string;
  tech: string[];
  outcome: string;
  icon: ReactNode;
  link: string | null;
  thumbnail: string | null;
}

const products: Product[] = [
  {
    id: 1,
    name: "Workforce 360",
    date: "Oct 2025 – Present",
    description: "A multi-module HR and workforce management platform built to centralize employee data, resource planning, analytics, and 360° feedback. Features AI-assisted project documentation, granular RBAC, and real-time workforce insights across the organization.",
    tech: ["Lovable", "Supabase", "React", "TypeScript", "Zod"],
    outcome: "Entire HR ops centralized",
    icon: <Users className="w-5 h-5 text-primary" />,
    link: null,
    thumbnail: null,
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
    thumbnail: "https://banglascribe.online/og-image.png",
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
    thumbnail: null,
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
    thumbnail: "https://openpulsesurvey.com/og-image.png",
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
};

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
  return (
    <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/40 to-background/80 shrink-0 flex items-center justify-center">
      <div className="opacity-20 scale-150">{product.icon}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
    </div>
  );
}

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
            <motion.div key={product.id} variants={item}>
              <Card className="h-full bg-secondary/30 border-white/10 hover:border-primary/50 transition-colors duration-300 flex flex-col group overflow-hidden relative p-0">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-700 opacity-0 group-hover:opacity-100 z-10" />

                <Thumbnail product={product} />

                <div className="flex flex-col flex-1 p-5">
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
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs hidden sm:flex">
                        {product.outcome}
                      </Badge>
                      {product.link && (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${product.name}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <CardContent className="flex-1 p-0 mb-3">
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-2 p-0">
                    {product.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs bg-white/5 border-white/10 text-muted-foreground">
                        {t}
                      </Badge>
                    ))}
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
