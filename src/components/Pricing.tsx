import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

type Plan = {
  name: string;
  emoji: string;
  price: string;
  features: string[];
  excluded: string[];
  highlight?: boolean;
};

const shortFormPlans: Plan[] = [
  {
    name: "Starter Shorts",
    emoji: "☄️",
    price: "₹45,000",
    features: [
      "12 Reels",
      "2 Carousels",
      "Video Editing",
      "Hook Writing",
      "Captions",
      "Content Research",
      "Basic Strategy",
    ],
    excluded: ["Shoot Included", "Dedicated Manager"],
  },
  {
    name: "Growth Shorts",
    emoji: "🌕",
    price: "₹75,000",
    highlight: true,
    features: [
      "17 Reels",
      "4 Carousels",
      "Advanced Editing",
      "Viral Hook Strategy",
      "Script Writing",
      "Content Research",
      "Content Strategy",
      "Dedicated Account Manager",
    ],
    excluded: ["Shoot Included"],
  },
  {
    name: "Authority Shorts",
    emoji: "🌌",
    price: "₹1,20,000",
    features: [
      "25 Reels",
      "6 Carousels",
      "Premium Editing",
      "Full Content Strategy",
      "Script + Research",
      "Meme Marketing",
      "Dedicated Team",
      "Weekly Strategy Calls",
      "Priority Delivery",
    ],
    excluded: ["Shoot Included"],
  },
];

const longFormPlans: Plan[] = [
  {
    name: "Starter Long Form",
    emoji: "🎬",
    price: "₹35,000",
    features: [
      "2 Long Videos",
      "Professional Editing",
      "Thumbnails",
      "Titles",
      "Retention-Based Cuts",
      "Basic SEO Guidance",
    ],
    excluded: ["Shoot Included"],
  },
  {
    name: "Growth Long Form",
    emoji: "🎬",
    price: "₹65,000",
    highlight: true,
    features: [
      "4 Long Videos",
      "Advanced Editing",
      "Motion Graphics",
      "Thumbnail Design",
      "SEO Optimization",
      "Retention Strategy",
      "Dedicated Manager",
    ],
    excluded: ["Shoot Included"],
  },
  {
    name: "Authority Long Form",
    emoji: "🎬",
    price: "₹1,10,000",
    features: [
      "8 Long Videos",
      "Premium Editing",
      "Cinematic Cuts",
      "Full YouTube Strategy",
      "Thumbnail + Packaging",
      "Research Support",
      "Priority Delivery",
      "Dedicated Team",
    ],
    excluded: ["Shoot Included"],
  },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div
    className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
      plan.highlight
        ? "bg-gradient-to-b from-green-600 to-green-700 text-white shadow-2xl shadow-green-600/30 ring-2 ring-green-400"
        : "bg-white text-gray-900 shadow-lg border border-gray-100"
    }`}
  >
    {plan.highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-green-700 text-xs font-bold px-4 py-1 rounded-full shadow">
        MOST POPULAR
      </span>
    )}
    <div className="text-4xl mb-3">{plan.emoji}</div>
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-extrabold">{plan.price}</span>
      <span className={plan.highlight ? "text-green-100" : "text-gray-500"}>
        {" "}/ month
      </span>
    </div>
    <ul className="space-y-3 mb-6 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <Check
            className={`h-5 w-5 mt-0.5 shrink-0 ${
              plan.highlight ? "text-white" : "text-green-600"
            }`}
          />
          <span className="text-sm">{f}</span>
        </li>
      ))}
      {plan.excluded.map((f) => (
        <li
          key={f}
          className={`flex items-start gap-2 ${
            plan.highlight ? "text-green-100/80" : "text-gray-400"
          }`}
        >
          <X className="h-5 w-5 mt-0.5 shrink-0" />
          <span className="text-sm line-through">{f}</span>
        </li>
      ))}
    </ul>
    <Button
      onClick={scrollToContact}
      className={`w-full rounded-full py-6 font-semibold ${
        plan.highlight
          ? "bg-white text-green-700 hover:bg-green-50"
          : "bg-green-600 hover:bg-green-700 text-white"
      }`}
    >
      Get Started
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Pricing & Packages
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You only record the content. We handle strategy, editing, scripting,
            design & distribution.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-3xl">☄️</span>
            <h3 className="text-3xl font-bold text-gray-900">
              Short Form Content Packages
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {shortFormPlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-3xl">🎥</span>
            <h3 className="text-3xl font-bold text-gray-900">
              Long Form Content Packages
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {longFormPlans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;