import React, { useState } from "react";

// TeamVirlMedia - Short-Form Pricing Component
// TailwindCSS-based, production-ready single-file React component.
// Default export: PricingSection

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly"); // "monthly" or "quarterly"

  const packages = [
    {
      id: "starter",
      title: "Starter Shorts",
      subtitle: "For solopreneurs & authors",
      videos: "8 Short-Form Videos / month (up to 60s)",
      thumbnails: "8 Custom Thumbnails",
      scripts: "Light Script Polishing",
      priceMonthly: 400,
      priceQuarterly: 349,
      cta: "Start Growing",
      tag: "Best for beginners",
    },
    {
      id: "growth",
      title: "Growth Shorts",
      subtitle: "Most popular — coaches & ecom",
      videos: "15 Short-Form Videos / month",
      thumbnails: "15 Thumbnails",
      scripts: "Scriptwriting Support (hooks + structure)",
      report: "Monthly Performance Report",
      priceMonthly: 800,
      priceQuarterly: 699,
      cta: "Scale with Us",
      tag: "Most popular",
      featured: true,
    },
    {
      id: "domination",
      title: "Domination Shorts",
      subtitle: "For brands, SaaS & agencies",
      videos: "30 Short-Form Videos / month",
      thumbnails: "30 Thumbnails",
      scripts: "Full Scriptwriting (hooks + storytelling)",
      analytics: "Advanced Analytics & 2x Strategy Calls",
      ads: "Custom Ad Creatives (UGC + promos)",
      priceMonthly: 1500,
      priceQuarterly: 1299,
      cta: "Dominate Your Niche",
      tag: "High-volume",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">TeamViralMedia — Packages</h2>
        <p className="mt-2 text-gray-600">Premium short-form video production — edit + thumbnails + scripts. You upload, we deliver.</p>
      </div>

      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-sm text-gray-600">Billing:</span>
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1 rounded-full text-sm font-medium ${billing === "monthly" ? "bg-white shadow" : "text-gray-600"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("quarterly")}
            className={`px-4 py-1 rounded-full text-sm font-medium ${billing === "quarterly" ? "bg-white shadow" : "text-gray-600"}`}
          >
            Quarterly (Save)
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {packages.map((pkg) => {
          const price = billing === "monthly" ? pkg.priceMonthly : pkg.priceQuarterly;
          const badge = billing === "monthly" ? `$${pkg.priceMonthly}/mo` : `$${pkg.priceQuarterly}/mo`;

          return (
            <article key={pkg.id} className={`relative rounded-2xl border p-6 shadow-sm bg-white ${pkg.featured ? "ring-2 ring-indigo-400" : ""}`}>
              {pkg.featured && (
                <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">Recommended</div>
              )}

              <header className="mb-4">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="text-sm text-gray-500">{pkg.subtitle}</p>
              </header>

              <div className="mb-4">
                <div className="text-3xl font-bold">{`$${price}`}</div>
                <div className="text-sm text-gray-500">{billing === "monthly" ? "per month" : "per month (billed quarterly)"}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-xs text-gray-600">
                  <span className="font-medium px-2 py-1 bg-gray-100 rounded">{pkg.tag}</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{billing === "quarterly" ? "Discount Applied" : ""}</span>
                </div>
              </div>

              <ul className="mb-6 space-y-2 text-sm text-gray-700">
                <li>• {pkg.videos}</li>
                <li>• {pkg.thumbnails}</li>
                <li>• {pkg.scripts}</li>
                {pkg.report && <li>• {pkg.report}</li>}
                {pkg.analytics && <li>• {pkg.analytics}</li>}
                {pkg.ads && <li>• {pkg.ads}</li>}
              </ul>

              <footer>
                <button
                  className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                  onClick={() => {
                    // Replace with actual CTA logic (open modal / contact form / calendar)
                    window?.open(`mailto:hello@teamvirlmedia.com?subject=Enquiry%20about%20${encodeURIComponent(pkg.title)}`);
                  }}
                >
                  {pkg.cta}
                </button>

                <div className="mt-3 text-xs text-gray-500">Need custom volume or agency pricing? <span className="text-indigo-600 font-medium">Contact us</span></div>
              </footer>
            </article>
          );
        })}
      </div>

    </section>
  );
}