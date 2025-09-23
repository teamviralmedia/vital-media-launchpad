import React from "react";

export default function PricingSection() {
  const packages = [
    {
      id: "starter",
      title: "Starter",
      price: 499,
      description: "Best for solopreneurs starting content journey",
      features: [
        "10 Reels/Shorts per month",
        "2 YouTube Videos (long-form edit + highlights)",
        "5 Thumbnails",
        "Script provided by client / polishing by us"
      ],
      cta: "Get Started",
    },
    {
      id: "growth",
      title: "Growth",
      price: 899,
      description: "Best for coaches & consultants who want consistent visibility",
      features: [
        "20 Reels/Shorts per month",
        "4 YouTube Videos",
        "8 Custom Thumbnails",
        "Full Scriptwriting & Optimization",
        "Basic Publishing Support (captions, hashtags, scheduling)"
      ],
      cta: "Scale with Growth",
      featured: true,
    },
    {
      id: "pro",
      title: "Pro",
      price: 1499,
      description: "Best for brands & startups aiming for daily presence + client acquisition",
      features: [
        "30 Reels/Shorts per month",
        "8+ YouTube Videos",
        "12 Thumbnails",
        "Complete Scriptwriting (done-for-you)",
        "Content Repurposing (blogs → shorts, podcasts → clips)",
        "Growth Strategy & Monthly Analytics Report"
      ],
      cta: "Go Pro",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">TeamViralMedia — Packages</h2>
        <p className="mt-2 text-gray-600">Professional content creation packages designed to scale your brand</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {packages.map((pkg) => {
          return (
            <article key={pkg.id} className={`relative rounded-2xl border p-6 shadow-lg bg-white ${pkg.featured ? "ring-2 ring-indigo-500 scale-105" : ""}`}>
              {pkg.featured && (
                <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</div>
              )}

              <header className="mb-6">
                <h3 className="text-2xl font-bold">{pkg.title}</h3>
                <div className="text-4xl font-bold mt-2">${pkg.price}<span className="text-lg text-gray-500">/month</span></div>
              </header>

              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 font-bold mt-0.5">✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="text-sm text-indigo-600 font-medium bg-indigo-50 p-3 rounded-lg">
                  👉 {pkg.description}
                </p>
              </div>

              <footer>
                <button
                  className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                  onClick={() => {
                    window?.open(`mailto:hello@teamviralmedia.com?subject=Enquiry%20about%20${encodeURIComponent(pkg.title)}%20Package`);
                  }}
                >
                  {pkg.cta}
                </button>
              </footer>
            </article>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">💡 Why these prices?</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Starter</strong> = entry-level, low barrier.</p>
            <p><strong>Growth</strong> = sweet spot (most clients land here).</p>
            <p><strong>Pro</strong> = high-ticket, but justified with strategy + analytics.</p>
          </div>
        </div>
      </div>

    </section>
  );
}