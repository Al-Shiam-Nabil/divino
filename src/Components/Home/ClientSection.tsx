import { ArrowRight } from "lucide-react";
import React from "react";
import Container from "../UI/Container";

const clientLogos = [
  {
    name: "Stripe",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "VMware",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
  },
  {
    name: "Discover",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg",
  },
  {
    name: "Coinbase",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.svg",
  },
  {
    name: "Fiverr",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg",
  },
  {
    name: "CocaCola",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
];

const ClientSection: React.FC = () => {
  // Infinite লুপের জন্য লোগো লিস্টকে ডুপ্লিকেট করা হয়েছে
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <Container>
        <div className="w-full mx-auto flex flex-col items-center">
          {/* লোগো অ্যানিমেশন কন্টেইনার - Rows with modern spacing */}
          <div className="w-full flex flex-col gap-12 lg:gap-20 mb-24">
            {/* Row 1: Left to Right */}
            <div className="relative flex overflow-hidden">
              <div className="flex animate-marquee-slow whitespace-nowrap gap-16 md:gap-28 items-center">
                {duplicatedLogos.map((logo, index) => (
                  <img
                    key={`row1-${index}`}
                    src={logo.url}
                    alt={logo.name}
                    className="h-7 md:h-9 lg:h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left (Reverse) */}
            <div className="relative flex overflow-hidden">
              <div className="flex animate-marquee-reverse-slow whitespace-nowrap gap-16 md:gap-28 items-center">
                {duplicatedLogos.map((logo, index) => (
                  <img
                    key={`row2-${index}`}
                    src={logo.url}
                    alt={logo.name}
                    className="h-7 md:h-9 lg:h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ৩. ভিউ অল ক্লায়েন্টস বাটন (আপনার দেওয়া স্টাইল অনুযায়ী) */}
          <button className="flex items-center gap-3 group/link py-1">
            <span className="text-[16px] md:text-[17px] font-semibold text-zinc-900 relative">
              Meet our partners
              <span className="absolute bottom-[-8px] left-0 w-full h-[1.5px] bg-zinc-200 group-hover/link:bg-zinc-900 transition-colors duration-300" />
            </span>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 text-zinc-900 border border-zinc-100 group-hover/link:bg-zinc-900 group-hover/link:text-white transition-all duration-300">
              <ArrowRight size={18} strokeWidth={2} />
            </div>
          </button>
        </div>
      </Container>

      {/* Modern Slow Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse-slow {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientSection;
