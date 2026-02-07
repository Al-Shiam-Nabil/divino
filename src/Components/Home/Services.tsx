import {
  ArrowUpRight,
  ChevronDown,
  Cpu,
  Globe,
  Palette,
  Shield,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

interface ServiceItemCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  gridClass: string;
  icon: React.ReactNode;
}

const servicesDataForCard: ServiceItemCard[] = [
  {
    id: 1,
    title: "Graphic & visual design",
    description:
      "We create strong visual systems that communicate clearly and consistently.",
    features: ["Brand identity", "Marketing visuals", "Print assets"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497485_Brand-Design-%26-Strategy.avif",
    gridClass: "lg:col-span-8 lg:row-span-2",
    icon: <Palette size={24} />,
  },
  {
    id: 2,
    title: "Digital & web design support",
    description: "Functional, clean, and user-focused digital experiences.",
    features: ["UI/UX design", "Landing pages"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497487_Website-Design-%26-Development.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Cpu size={24} />,
  },
  {
    id: 3,
    title: "Marketing & content",
    description: "Helping brands communicate through meaningful content.",
    features: ["Campaigns", "Content planning"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b4974e5_mobile-app-design.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Globe size={24} />,
  },
  {
    id: 4,
    title: "SEO & visibility",
    description: "Technical and content side of digital visibility.",
    features: ["Optimizations", "On-page support"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497483_SaaS-Product-Design.avif",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Zap size={24} />,
  },
  {
    id: 5,
    title: "Asset production",
    description: "Image, video, and digital asset management.",
    features: ["Video motion", "Asset preparation"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497482_MVP-Development.avif",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Shield size={24} />,
  },
];

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Graphic & Visual Design",
    description:
      "We create strong visual systems that communicate clearly and consistently.",
    features: [
      "Brand identity & visual guidelines",
      "Marketing visuals & social media design",
      "Print & digital design assets",
    ],
  },
  {
    id: 2,
    title: "Digital & Web Design Support",
    description:
      "We design and support digital experiences that are functional, clean, and user-focused.",
    features: [
      "Website UI/UX design support",
      "Landing pages & web visuals",
      "Ongoing design and content support",
    ],
  },
  {
    id: 3,
    title: "Marketing & Content Production Support",
    description:
      "We help brands communicate better through meaningful content.",
    features: [
      "Marketing visuals and creatives",
      "Content planning & production support",
      "Digital campaign support",
    ],
  },
  {
    id: 4,
    title: "SEO & Website Visibility Support",
    description: "We support the technical and content side of visibility.",
    features: [
      "SEO-related tasks and optimizations",
      "Content structure & on-page support",
      "Website performance & visibility assistance",
    ],
  },
  {
    id: 5,
    title: "Image, Video & Digital Asset Production",
    description: "We produce and manage visual content for digital platforms.",
    features: [
      "Image creation & editing",
      "Video and motion content support",
      "Digital asset preparation for web & marketing",
    ],
  },
];

const Services: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="expertise"
      className="w-full pb-12 md:pb-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-25">
          <div className="lg:w-1/2  space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-[14px] font-bold uppercase tracking-widest text-[#5e7ea7]">
                  Services
                </span>
              </div>
              <p className="text-[26px] md:text-[38px] font-medium leading-[1.2] text-[#111111] tracking-tight">
                We build transformative digital experiences for the world's
                leading brands by blending design, content, and technology.
              </p>
            </div>

            <button className="group relative overflow-hidden px-10 py-4 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 cursor-pointer isolate">
              <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[liquid-flow_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>
              <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>
              <div className="relative z-20 flex items-center gap-1">
                <span className="text-base font-semibold">Work with Us</span>
                <div className="relative w-5 h-5 overflow-hidden">
                  <div className="relative w-full h-full flex flex-col transition-all group-hover:[animation:icon-loop_0.5s_linear_infinite]">
                    <div className="absolute inset-0 flex items-center justify-center shrink-0">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center shrink-0 translate-y-full -translate-x-full">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="lg:w-1/2 flex flex-col w-full">
            {servicesData.map((service) => (
              <div key={service.id} className="border-b border-gray-100">
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full flex items-center justify-between py-8 md:py-10 text-left group hover:opacity-60 transition-all cursor-pointer"
                >
                  <span className="text-[24px] md:text-[32px] font-bold text-[#111111] tracking-tight">
                    {service.title}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 md:w-8 md:h-8 text-gray-400 transition-transform duration-500 ${
                      openId === service.id ? "rotate-180 text-zinc-900" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openId === service.id
                      ? "max-h-[600px] pb-12 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[18px] md:text-[20px] text-gray-600 mb-8 leading-relaxed max-w-[90%]">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[16px] md:text-[18px] text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bento Grid Updated Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 lg:auto-rows-[400px]">
          {servicesDataForCard.map((service) => (
            <div
              key={service.id}
              className={`${service.gridClass} group relative overflow-hidden rounded-3xl bg-zinc-100 border border-black/[0.05] transition-all duration-700 min-h-[550px] lg:min-h-0`}
            >
              {/* Background Image - Full Clear */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out scale-100 group-hover:scale-105"
                />
              </div>

              {/* Content Container - Dark Text & Items at the Top */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-start">
                {/* TOP SECTION: Title and Icon */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter capitalize text-[#111111]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Dark Water Effect Icon Background */}
                  <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-xl border border-black/10 flex items-center justify-center text-[#111111] transition-all duration-500 group-hover:bg-black group-hover:text-white shrink-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes liquid-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes icon-loop {
            0% { transform: translate(0, 0); }
            100% { transform: translate(100%, -100%); }
          }
        `,
        }}
      />
    </section>
  );
};

export default Services;
