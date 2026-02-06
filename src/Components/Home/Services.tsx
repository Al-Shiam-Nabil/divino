import {
  ArrowRight,
  Database,
  Globe,
  Layout,
  PenTool,
  Smartphone,
  Zap,
} from "lucide-react";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  hoverDescription: string;
  btnText: string;
  image: string;
  icon: React.ReactNode;
  accent: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "UI/UX Design",
    hoverDescription:
      "Building trust through exceptional user journeys and unforgettable interfaces.",
    btnText: "Explore Design",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497484_UI%26UX-Design-%26-Consultation.avif",
    icon: <Layout size={16} />,
    accent: "#3B82F6",
  },
  {
    id: 2,
    title: "Brand Design",
    hoverDescription:
      "Crafting unique identities that resonate deeply with your target audience.",
    btnText: "Shape Brand",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497485_Brand-Design-%26-Strategy.avif",
    icon: <PenTool size={16} />,
    accent: "#A855F7",
  },
  {
    id: 3,
    title: "Web Development",
    hoverDescription:
      "High-performance web solutions built with precision and modern tech stacks.",
    btnText: "View Solutions",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497487_Website-Design-%26-Development.avif",
    icon: <Globe size={16} />,
    accent: "#10B981",
  },
  {
    id: 4,
    title: "SaaS Product",
    hoverDescription:
      "Scaling your business with dedicated SaaS UX and architecture experts.",
    btnText: "Start Scaling",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497483_SaaS-Product-Design.avif",
    icon: <Database size={16} />,
    accent: "#F97316",
  },
  {
    id: 5,
    title: "MVP Launch",
    hoverDescription:
      "Test core ideas quickly and iterate based on real-world user feedback.",
    btnText: "Launch Now",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497482_MVP-Development.avif",
    icon: <Zap size={16} />,
    accent: "#EAB308",
  },
  {
    id: 6,
    title: "Mobile App",
    hoverDescription:
      "Cross-platform mobile apps focused on performance and intuitive flow.",
    btnText: "Build App",
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b4974e5_mobile-app-design.avif",
    icon: <Smartphone size={16} />,
    accent: "#F43F5E",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] text-[#111111]">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 gap-8 px-6 md:px-0">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-bold tracking-tighter leading-none">
              Our Services
            </h2>
            <p className="text-zinc-500 max-w-xl text-lg xl:text-xl">
              We build transformative digital experiences for the world's
              leading brands by blending design, content, and technology.
            </p>
          </div>
          <div className="w-full max-w-[200px] md:max-w-[230px]">
            <button className="group cursor-pointer relative w-full h-[52px] md:h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[16px] md:text-[18px] transition-all active:scale-[0.98] shadow-lg">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>
              <span className="relative z-10">Work With Us</span>
              <ArrowRight
                size={22}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Dynamic Card Grid - Added gap-12 for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative h-[600px] md:h-[550px] rounded-none md:rounded-[2.5rem] bg-white border-y md:border border-zinc-200 overflow-hidden transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              </div>

              {/* Modern Top Button/Label (Replaced the Icon) */}
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 bg-white/10 text-white text-[10px] font-bold uppercase tracking-[2px] transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: service.accent }}
                  ></span>
                  {service.title.split(" ")[0]}
                </div>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                <div className="relative">
                  {/* Title */}
                  <h3 className="text-4xl font-bold text-white tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>

                  {/* Slide-up Content */}
                  <div className="max-h-0 group-hover:max-h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                      {service.hoverDescription}
                    </p>

                    <button className="flex items-center gap-3 text-white font-bold group/btn">
                      <span className="uppercase tracking-widest text-[11px] border-b border-white/30 group-hover/btn:border-white transition-all pb-1">
                        {service.btnText}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover/btn:scale-110 transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              <div
                className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-1000 ease-out z-20"
                style={{ backgroundColor: service.accent }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
