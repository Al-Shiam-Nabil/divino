import { ArrowUpRight, Cpu, Globe, Palette, Shield, Zap } from "lucide-react";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  gridClass: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Graphic & visual design",
    description:
      "We create strong visual systems that communicate clearly and consistently.",
    features: ["Brand identity", "Marketing visuals", "Print assets"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
    gridClass: "lg:col-span-8 lg:row-span-2",
    icon: <Palette size={24} />,
  },
  {
    id: 2,
    title: "Digital & web design support",
    description: "Functional, clean, and user-focused digital experiences.",
    features: ["UI/UX design", "Landing pages"],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Cpu size={24} />,
  },
  {
    id: 3,
    title: "Marketing & content",
    description: "Helping brands communicate through meaningful content.",
    features: ["Campaigns", "Content planning"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Globe size={24} />,
  },
  {
    id: 4,
    title: "SEO & visibility",
    description: "Technical and content side of digital visibility.",
    features: ["Optimizations", "On-page support"],
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1200",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Zap size={24} />,
  },
  {
    id: 5,
    title: "Asset production",
    description: "Image, video, and digital asset management.",
    features: ["Video motion", "Asset preparation"],
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Shield size={24} />,
  },
];

const OurServices: React.FC = () => {
  return (
    <section
      id="expertise"
      className="w-full py-12 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-[#5e7ea7]">
              Services
            </span>
          </div>
          <p className="text-[24px] sm:text-[28px] md:text-[38px] font-medium leading-[1.2] text-[#111111] tracking-tight max-w-4xl">
            We build transformative digital experiences for the world's leading
            brands by blending design, content, and technology.
          </p>
        </div>

        {/* Bento Grid - Improved Responsive Height & Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-10 auto-rows-[350px] md:auto-rows-[380px]">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`${service.gridClass} group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-zinc-100 border border-black/[0.05] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content Container - Responsive Padding */}
              <div className="relative z-10 h-full p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {/* Responsive Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter capitalize text-white leading-tight">
                    {service.title}
                  </h3>
                  {/* Responsive Description */}
                  <p className="text-white/90 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-sm">
                    {service.description}
                  </p>

                  {/* Responsive Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                    {service.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] md:text-[11px] font-bold border border-white/10"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-12 md:mt-20 flex justify-center">
          <button className="group relative overflow-hidden px-8 py-3 md:px-10 md:py-4 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 cursor-pointer isolate">
            <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[liquid-flow_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>
            <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>

            <div className="relative z-20 flex items-center gap-1">
              <span className="text-sm md:text-base font-semibold">
                Work with us
              </span>
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </button>
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
      `,
        }}
      />
    </section>
  );
};

export default OurServices;
