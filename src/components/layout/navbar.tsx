import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiMedium } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const navLinks = [
  { name: "Products",    id: "products" },
  { name: "About",       id: "about"    },
  { name: "Career",      id: "career"   },
  { name: "Games",       id: "games"    },
  { name: "Events",      id: "events"   },
  { name: "Book",        id: "book"     },
  { name: "Contact",     id: "contact"  },
];

const socialLinks = [
  {
    label:   "Medium — Blog",
    href:    "https://2takardeveloper.medium.com/",
    Icon:    SiMedium,
    hoverBg: "hover:bg-white/10",
    hoverText: "hover:text-white",
  },
  {
    label:   "LinkedIn",
    href:    "https://www.linkedin.com/in/tanimulhaquekhan/",
    Icon:    BsLinkedin,
    hoverBg: "hover:bg-[#0A66C2]/20",
    hoverText: "hover:text-[#0A66C2]",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          className="text-lg font-bold font-mono tracking-tighter text-foreground shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="nav-logo"
        >
          THK<span className="text-primary">_</span>
        </button>

        {/* Desktop — page links */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-white/5"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop — social icon buttons */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          <div className="w-px h-5 bg-white/15 mr-1" />
          {socialLinks.map(({ label, href, Icon, hoverBg, hoverText }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className={`flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors ${hoverBg} ${hoverText}`}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Mobile — hamburger */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 w-64 p-6">
              {/* Mobile social row */}
              <div className="flex items-center gap-2 mb-8 pb-5 border-b border-white/10">
                <span className="text-xs text-muted-foreground mr-auto font-mono">THK_</span>
                {socialLinks.map(({ label, href, Icon, hoverBg, hoverText }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={`flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground transition-colors ${hoverBg} ${hoverText}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Mobile page links */}
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors px-3 py-2.5 rounded-md"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
