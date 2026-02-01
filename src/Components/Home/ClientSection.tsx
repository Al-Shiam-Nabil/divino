import { ArrowRight } from "lucide-react";
import React from "react";
import Container from "../UI/Container";

// ১. লোগো ডাটা স্ট্রাকচার
const clientLogos = [
  {
    name: "Stripe",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Toyota",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "VMware",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
  },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
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
    name: "Samsung",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "ADP",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg",
  },
];

const ClientSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-white">
      <Container>
        <div className="w-full mx-auto flex flex-col items-center">
          {/* ২. লোগো গ্রিড (Responsive: Mobile 2, Tablet 3, Laptop 5 columns) */}
          <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 items-center justify-items-center  mb-20">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-full flex  px-4">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* ৩. ভিউ অল ক্লায়েন্টস লিংক (ইমেজ অনুযায়ী) */}
          <div className="group flex items-center gap-2 cursor-pointer border-b border-gray-200 pb-2 hover:border-black transition-all">
            <span className="text-[18px] md:text-[20px] font-medium text-[#111111]">
              View all clients
            </span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientSection;
