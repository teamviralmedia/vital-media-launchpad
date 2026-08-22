const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="eyebrow text-primary">About TeamViralMedia</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Retention is the new <span className="text-primary">Currency.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            We help Coaches, Consultants, SaaS and Tech Founders build profitable personal brands
            through short-form content. In a world of three-second attention spans, we engineer the
            bridge between your message and the viewer's interest.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            As college dropouts who cut their teeth inside two marketing agencies, our systems are
            built on data and real-world reps — not classroom theory.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12 border-t border-border pt-10">
            <div>
              <div className="font-display text-4xl font-extrabold text-foreground">870M+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Total Views</div>
            </div>
            <div>
              <div className="font-display text-4xl font-extrabold text-foreground">3000+</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Videos Shipped</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-primary rounded-[2rem] rotate-3 absolute inset-0" />
          <div className="aspect-square bg-ink rounded-[2rem] relative z-10 overflow-hidden">
            <img
              src="https://ik.imagekit.io/44occvdby4/1.png?updatedAt=1751681767939"
              alt="TeamViralMedia founders and content studio"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="eyebrow text-primary">Content Creation Studio</div>
              <div className="font-display text-2xl font-extrabold text-background mt-2">
                Team<span className="text-primary">ViralMedia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
