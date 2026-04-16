import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Products", id: "products" },
    { name: "About", id: "about" },
    { name: "Career", id: "career" },
    { name: "Games", id: "games" },
    { name: "Events", id: "events" },
    { name: "Book", id: "book" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="text-lg font-bold font-mono tracking-tighter cursor-pointer text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="nav-logo"
        >
          THK<span className="text-primary">_</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://2takardeveloper.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => window.open('https://www.linkedin.com/in/tanimulhaquekhan/', '_blank')}
          >
            LinkedIn
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 w-64">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-lg font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="https://2takardeveloper.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
                <div className="pt-6 border-t border-white/10">
                  <Button 
                    className="w-full" 
                    onClick={() => window.open('https://www.linkedin.com/in/tanimulhaquekhan/', '_blank')}
                  >
                    LinkedIn
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
