import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl font-extrabold tracking-tight"
          >
            <span className="text-foreground">Team</span>
            <span className="text-primary">ViralMedia</span>
          </button>

          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-foreground text-background hover:bg-primary hover:text-primary-foreground px-6 rounded-full text-sm font-bold transition-all duration-300"
          >
            Start Growing
          </Button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <div className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
              <div className={`w-full h-0.5 bg-foreground transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-6 space-y-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="block w-full text-left text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full font-bold"
              >
                Start Growing
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
