import khushi from "@/assets/clients/khushi.png";
import himanshu from "@/assets/clients/himanshu.png";
import kyra from "@/assets/clients/kyra.png";
import anona from "@/assets/clients/anona.png";
import mhb from "@/assets/clients/mhb.png";
import asheesh from "@/assets/clients/asheesh.png";
import kunal from "@/assets/clients/kunal.png";
import urvashi from "@/assets/clients/urvashi.png";
import manish from "@/assets/clients/manish.png";

type Client = {
  img: string;
  name: string;
  handle: string;
  role: string;
  followers: string;
};

const clients: Client[] = [
  { img: kyra, name: "Kyra", handle: "@kyraonig", role: "India's First AI Influencer · Shark Tank India", followers: "235K" },
  { img: manish, name: "Manish Singh", handle: "@manishceo", role: "Founder, ZZED Group · Forbes Featured", followers: "259K" },
  { img: kunal, name: "Kunal Chhibber", handle: "@slowbutmoving", role: "Nutritionist · Online Coach", followers: "191K" },
  { img: mhb, name: "MHB Academy", handle: "@mhbacademy", role: "Nutrition & Fitness Education", followers: "185K" },
  { img: khushi, name: "Khushi Chhabra", handle: "@nutritionwith_khushi", role: "Holistic Health Nutritionist", followers: "149K" },
  { img: himanshu, name: "Himanshu Goel", handle: "@himanshu_goel95", role: "Startup Founder · Shark Tank India S3", followers: "77.5K" },
  { img: urvashi, name: "Urvashi Agarwal", handle: "@bano.nutrismart", role: "Fitness Coach & Nutritionist", followers: "73.1K" },
  { img: anona, name: "Anona Agarwal", handle: "@levelupwithanona", role: "Creator · Media Pro", followers: "72K" },
  { img: asheesh, name: "Asheesh Grewal", handle: "@asheesh.mhb", role: "Founder & CEO · MHB Academy", followers: "33.5K" },
];

// Duplicate for seamless marquee
const row1 = [...clients, ...clients];
const row2 = [...clients.slice().reverse(), ...clients.slice().reverse()];

const Card = ({ c }: { c: Client }) => (
  <div className="relative w-[280px] h-[200px] shrink-0 rounded-2xl overflow-hidden group shadow-xl">
    <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-white font-bold text-lg leading-tight">{c.name}</h4>
        <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/30">{c.followers}</span>
      </div>
      <p className="text-green-200/90 text-xs font-medium">{c.role}</p>
    </div>
  </div>
);

const Clients = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-green-950 to-gray-950 relative overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 mb-14 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-semibold mb-6 border border-green-500/30">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          Trusted by India's Best
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          We work with India's{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Top 0.1%</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light">for their Social Media</p>
      </div>

      <div className="relative space-y-6">
        <div className="flex gap-6 animate-[marquee-left_40s_linear_infinite]">
          {row1.map((c, i) => <Card key={`r1-${i}`} c={c} />)}
        </div>
        <div className="flex gap-6 animate-[marquee-right_45s_linear_infinite]">
          {row2.map((c, i) => <Card key={`r2-${i}`} c={c} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Clients;