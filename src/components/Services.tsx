import { PenLine, Scissors, TrendingUp, Film, Subtitles, Sparkles } from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Viral Scripting",
    desc: "Psychology-backed hooks and scripts designed to stop the scroll in the first half second.",
  },
  {
    icon: Scissors,
    title: "Elite Editing",
    desc: "Fast-paced, high-retention editing with motion graphics, sound design and dynamic captions.",
  },
  {
    icon: TrendingUp,
    title: "Account Growth",
    desc: "Full channel management, content research, SEO and a data-driven posting strategy.",
  },
];

const capabilities = [
  { icon: Film, label: "Script Cutting" },
  { icon: Sparkles, label: "Motion Graphics" },
  { icon: Subtitles, label: "Subtitles" },
  { icon: TrendingUp, label: "Publish Ready" },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-ink text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <span className="eyebrow text-primary">What we do</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-primary">Expert Solutions.</h2>
          <p className="mt-4 text-ink-muted text-lg">
            We handle everything from ideation to posting — you only record the content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-[2rem] bg-ink-soft border border-ink-line hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-xl mb-6 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-ink-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 p-6 rounded-2xl bg-ink-soft border border-ink-line"
              >
                <c.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-ink-line shadow-elegant">
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/QNQELB2pw_c?autoplay=1&mute=1&loop=1&playlist=QNQELB2pw_c"
                title="TeamViralMedia showreel"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
