import { ArrowUpRight, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Container from "../UI/Container";

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

const ServicesSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full my-20 lg:my-25 bg-white">
      <Container>
        <div className="w-full mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* বাম পাশের টেক্সট - Sticky & Modern Button Added */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 space-y-10">
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

            {/* Modern Interactive Button */}
            <button className="group relative overflow-hidden px-10 py-4 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 cursor-pointer isolate">
              <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[liquid-flow_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>

              <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>

              <div className="absolute inset-0 z-15 opacity-30 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

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
            </button>
          </div>

          {/* ডান পাশের সার্ভিসেস একর্ডিয়ন (Design Same) */}
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
      </Container>
    </section>
  );
};

export default ServicesSection;
