const videos = [
  { id: 1, embedUrl: "https://www.youtube.com/embed/rGJE79C9pPU?autoplay=1&mute=1&loop=1&playlist=rGJE79C9pPU", title: "High-Retention Short — Client Reel by TeamViralMedia" },
  { id: 2, embedUrl: "https://www.youtube.com/embed/3UZsG7QwHG4?autoplay=1&mute=1&loop=1&playlist=3UZsG7QwHG4", title: "Founder Brand Reel — Hook-Led Edit by TeamViralMedia" },
  { id: 3, embedUrl: "https://www.youtube.com/embed/efsOerrZbjo?autoplay=1&mute=1&loop=1&playlist=efsOerrZbjo", title: "Creator Short — Retention-Based Cut by TeamViralMedia" },
  { id: 4, embedUrl: "https://www.youtube.com/embed/EyUy6d2Qih8?autoplay=1&mute=1&loop=1&playlist=EyUy6d2Qih8", title: "Personal Brand Reel — Scripted Short by TeamViralMedia" },
  { id: 5, embedUrl: "https://www.youtube.com/embed/-QTgRj_nf5s?autoplay=1&mute=1&loop=1&playlist=-QTgRj_nf5s", title: "Viral Hook Short — Client Edit by TeamViralMedia" },
  { id: 6, embedUrl: "https://www.youtube.com/embed/A7XYiASNxnY?autoplay=1&mute=1&loop=1&playlist=A7XYiASNxnY", title: "Coach Content Reel — Short-Form Edit by TeamViralMedia" },
  { id: 7, embedUrl: "https://www.youtube.com/embed/PMIDA_hfbWU?autoplay=1&mute=1&loop=1&playlist=PMIDA_hfbWU", title: "Brand Story Short — Client Reel by TeamViralMedia" },
  { id: 8, embedUrl: "https://www.youtube.com/embed/GXYvDQKRL78?autoplay=1&mute=1&loop=1&playlist=GXYvDQKRL78", title: "Engagement-Driven Reel — Short-Form Edit by TeamViralMedia" },
  { id: 9, embedUrl: "https://www.youtube.com/embed/Thq9hlWdcyc?autoplay=1&mute=1&loop=1&playlist=Thq9hlWdcyc", title: "Founder-Led Short — Client Edit by TeamViralMedia" },
];

const Portfolio = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="portfolio" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="eyebrow text-primary">Our work</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-foreground">Recent Hits.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Short-form content built to hold attention and convert followers into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group rounded-[2rem] overflow-hidden border border-border bg-muted shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-ink text-background px-8 py-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-extrabold">
            Ready to create your next <span className="text-primary">viral</span> video?
          </h3>
          <p className="mt-4 text-ink-muted max-w-xl mx-auto">
            You only record the content. We handle strategy, editing, scripting, design and distribution.
          </p>
          <button
            onClick={scrollToContact}
            className="mt-8 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-glow"
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
