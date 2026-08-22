import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const stats = [
  { value: "3000+", label: "Videos Created" },
  { value: "870M+", label: "Total Views" },
  { value: "99%", label: "Client Satisfaction" },
];

const Hero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-40 pb-24 px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-soft rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto animate-fade-in">
        <span className="inline-block px-4 py-1.5 mb-8 eyebrow text-primary-deep bg-primary-soft rounded-full">
          Premium Content Agency
        </span>

        <h1 className="max-w-5xl mx-auto font-display text-5xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter text-foreground mb-8">
          DOMINATE THE <span className="text-primary">FEED.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
          TeamViralMedia turns creators, founders and brands into viral powerhouses through
          high-retention short-form strategy and world-class editing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            onClick={() => scrollTo("contact")}
            className="px-10 py-7 h-auto bg-primary text-primary-foreground font-bold rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-glow text-base"
          >
            Scale Your Brand
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("portfolio")}
            className="px-10 py-7 h-auto border-2 border-border bg-background text-foreground font-bold rounded-2xl hover:bg-muted transition-all text-base"
          >
            View Our Work
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-border pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-5xl font-extrabold text-foreground">{s.value}</div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
};

export default Hero;
