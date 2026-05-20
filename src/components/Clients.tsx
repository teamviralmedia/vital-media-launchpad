import khushi from "@/assets/clients/dp/khushi.png";
import himanshu from "@/assets/clients/dp/himanshu.png";
import kyra from "@/assets/clients/dp/kyra.png";
import anona from "@/assets/clients/dp/anona.png";
import mhb from "@/assets/clients/dp/mhb.png";
import asheesh from "@/assets/clients/dp/asheesh.png";
import kunal from "@/assets/clients/dp/kunal.png";
import urvashi from "@/assets/clients/dp/urvashi.png";
import manish from "@/assets/clients/dp/manish.png";
import segmind from "@/assets/clients/dp/segmind.png";
import curlmantra from "@/assets/clients/dp/curlmantra.png";
import dangar from "@/assets/clients/dp/dangar.png";
import karan from "@/assets/clients/dp/karan.png";
import veeraj from "@/assets/clients/dp/veeraj.png";
import fundsindia from "@/assets/clients/dp/fundsindia.png";
import arkam from "@/assets/clients/dp/arkam.png";
import athenese from "@/assets/clients/dp/athenese.png";
import dostcast from "@/assets/clients/dp/dostcast.png";
import anandrathi from "@/assets/clients/dp/anandrathi.png";
import motilal from "@/assets/clients/dp/motilal.png";
import inc42 from "@/assets/clients/dp/inc42.png";
import snehil from "@/assets/clients/dp/snehil.png";
import arpit from "@/assets/clients/dp/arpit.png";

type Client = {
  img: string;
  name: string;
  handle: string;
  role: string;
  followers: string;
};

const clients: Client[] = [
  { img: dostcast, name: "Dostcast", handle: "@dostcast", role: "Podcast · Hosted by Vinamre Kasanaa", followers: "250K" },
  { img: motilal, name: "Motilal Oswal Group", handle: "@motilaloswalgroup", role: "Wealth Management · 39 Yrs of Trust", followers: "608K" },
  { img: inc42, name: "Inc42 Media", handle: "@inc42.media", role: "Authority on India's Startup Economy", followers: "196K" },
  { img: arpit, name: "Dr. Arpit Bansal", handle: "@drarpitbansal", role: "Surgeon · Laparoscopy & Gut Health", followers: "135K" },
  { img: snehil, name: "Snehil Khanor", handle: "@snehilkhanor", role: "Founder/CEO TrulyMadly · Investor", followers: "51K" },
  { img: anandrathi, name: "Anand Rathi Wealth", handle: "@anandrathiwealth", role: "Private Wealth for HNI/UHNIs", followers: "11.7K" },
  { img: veeraj, name: "Veeraj Gadda", handle: "@vee_daily19", role: "Digital Creator · Fitness", followers: "1M" },
  { img: kyra, name: "Kyra", handle: "@kyraonig", role: "India's First AI Influencer · Shark Tank India", followers: "235K" },
  { img: manish, name: "Manish Singh", handle: "@manishceo", role: "Founder, ZZED Group · Forbes Featured", followers: "259K" },
  { img: karan, name: "Karan Sarin", handle: "@sweetreactions", role: "Author · Metabolic Health Coach", followers: "259K" },
  { img: kunal, name: "Kunal Chhibber", handle: "@slowbutmoving", role: "Nutritionist · Online Coach", followers: "191K" },
  { img: mhb, name: "MHB Academy", handle: "@mhbacademy", role: "Nutrition & Fitness Education", followers: "185K" },
  { img: khushi, name: "Khushi Chhabra", handle: "@nutritionwith_khushi", role: "Holistic Health Nutritionist", followers: "149K" },
  { img: himanshu, name: "Himanshu Goel", handle: "@himanshu_goel95", role: "Startup Founder · Shark Tank India S3", followers: "77.5K" },
  { img: urvashi, name: "Urvashi Agarwal", handle: "@bano.nutrismart", role: "Fitness Coach & Nutritionist", followers: "73.1K" },
  { img: anona, name: "Anona Agarwal", handle: "@levelupwithanona", role: "Creator · Media Pro", followers: "72K" },
  { img: asheesh, name: "Asheesh Grewal", handle: "@asheesh.mhb", role: "Founder & CEO · MHB Academy", followers: "33.5K" },
  { img: dangar, name: "Dr Devendra Dangar", handle: "@drdevendradangar", role: "Paediatrician · Parenting Expert", followers: "35.5K" },
  { img: fundsindia, name: "FundsIndia", handle: "@fundsindia", role: "India's 1st Online Investment Platform", followers: "17.6K" },
  { img: curlmantra, name: "CurlMantra", handle: "@curlmantra", role: "Hair Care · Made for Indian Curls", followers: "6.8K" },
  { img: segmind, name: "Segmind AI", handle: "@segmind.ai", role: "Generative AI Workflows", followers: "4.6K" },
  { img: athenese, name: "Athenese-Dx", handle: "@athenesedx", role: "Medical Diagnostics · Research", followers: "2.7K" },
  { img: arkam, name: "Arkam Ventures", handle: "@arkamventures", role: "VC · Early Stage Fund", followers: "2.3K" },
];

// Duplicate for seamless marquee
const row1 = [...clients, ...clients];
const row2 = [...clients.slice().reverse(), ...clients.slice().reverse()];

const Card = ({ c }: { c: Client }) => (
  <div className="w-[260px] shrink-0 flex flex-col items-center text-center px-6 py-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/40 transition-all duration-300">
    <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-green-400/60 ring-offset-4 ring-offset-transparent mb-4 bg-white">
      <img src={c.img} alt={c.name} className="w-full h-full object-cover object-center" />
    </div>
    <h4 className="text-white font-bold text-base leading-tight">{c.name}</h4>
    <p className="text-green-300 text-xs font-semibold mt-1">{c.followers} followers</p>
    <p className="text-gray-400 text-xs mt-2 leading-snug">{c.role}</p>
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