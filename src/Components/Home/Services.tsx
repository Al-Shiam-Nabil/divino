import { AnimatePresence, motion } from "framer-motion";
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

// --- Types ---
interface ServiceItemCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  gridClass: string;
  icon: React.ReactNode;
}

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
}

// --- Data (Same as your code) ---
const servicesDataForCard: ServiceItemCard[] = [
  {
    id: 1,
    title: "Graphic & visual design",
    description:
      "We create strong visual systems and brand identities that communicate your message clearly and consistently across all platforms.",
    features: ["Brand identity", "Marketing visuals", "Print assets"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497485_Brand-Design-%26-Strategy.avif",
    gridClass: "lg:col-span-8 lg:row-span-2",
    icon: <Palette size={24} />,
  },
  {
    id: 2,
    title: "Digital & web design support",
    description:
      "Our team designs functional and user-centric digital experiences that prioritize usability while maintaining a premium, modern aesthetic.",
    features: ["UI/UX design", "Landing pages"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497487_Website-Design-%26-Development.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Cpu size={24} />,
  },
  {
    id: 3,
    title: "Marketing & content",
    description:
      "We help brands grow by producing high-impact visual stories and strategic content plans that drive real audience engagement.",
    features: ["Campaigns", "Content planning"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b4974e5_mobile-app-design.avif",
    gridClass: "lg:col-span-4 lg:row-span-1",
    icon: <Globe size={24} />,
  },
  {
    id: 4,
    title: "SEO & visibility",
    description:
      "Technical support to enhance your digital visibility, ensuring your website ranks higher and reaches the right target audience effectively.",
    features: ["Optimizations", "On-page support"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497483_SaaS-Product-Design.avif",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Zap size={24} />,
  },
  {
    id: 5,
    title: "Asset production",
    description:
      "Professional management and production of digital assets, including motion graphics and video content ready for web and marketing use.",
    features: ["Video motion", "Asset preparation"],
    image:
      "https://cdn.prod.website-files.com/697722e913f661fc1b49692f/697722e913f661fc1b497482_MVP-Development.avif",
    gridClass: "lg:col-span-6 lg:row-span-1",
    icon: <Shield size={24} />,
  },
];

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

  // Modern Fade Reveal Settings

  return (
    <section
      id="expertise"
      className="w-full pb-12 md:pb-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="w-full mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-25">
          {/* Left Content Side */}
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpVariant}
            className="lg:w-1/2 space-y-10"
          >
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
                  </div>
                </div>
              </div>
            </button>
          </motion.div> */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            // once: false রাখা হয়েছে আপনার চাহিদা মতো
            // amount: 0.1 দেওয়া হয়েছে যাতে এলিমেন্ট ভিউপোর্টে সামান্য ঢুকলেই এনিমেশন শুরু হয়
            // margin: "-100px 0px" নিচ থেকে উপরে স্ক্রল করার সময় হঠাত লাফানো (jitter) বন্ধ করবে
            viewport={{ once: false, amount: 0.1, margin: "-100px 0px" }}
            variants={{
              hidden: {
                opacity: 0,
                y: 30, // y ভ্যালু ৩০-৪০ থেকে কমিয়ে ২০ করা হয়েছে যাতে 'jump' টা চোখে না লাগে
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.2, // প্রিমিয়াম ফিল দেওয়ার জন্য ১.২ সেকেন্ড
                  ease: [0.16, 1, 0.3, 1], // হাই-এন্ড এজেন্সি স্টাইল স্মুথ কার্ভ
                },
              },
            }}
            // will-change ব্যবহার করলে ব্রাউজার স্ক্রলিংয়ের সময় লেআউট ক্যালকুলেশন নিয়ে ঝামেলা করে না
            style={{ willChange: "transform, opacity" }}
            className="lg:w-1/2 space-y-10"
          >
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
                  </div>
                </div>
              </div>
            </button>
          </motion.div>

          {/* Right Side - Accordion */}
          <div className="lg:w-1/2 flex flex-col w-full">
            {servicesData.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="border-b border-gray-100"
              >
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

                <AnimatePresence>
                  {openId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="pb-12">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bento Grid Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:px-6 lg:auto-rows-[400px]">
          {servicesDataForCard.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${service.gridClass} group relative overflow-hidden md:rounded-3xl bg-zinc-100 border border-black/[0.05] min-h-[600px] lg:min-h-0`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out scale-100 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 h-full py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-start">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter capitalize text-[#111111]">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-xl border border-black/10 flex items-center justify-center text-[#111111] transition-all duration-500 group-hover:bg-black group-hover:text-white shrink-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Bento Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:px-6 lg:auto-rows-[400px]">
          {servicesDataForCard.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${service.gridClass} group relative flex flex-col lg:block overflow-hidden rounded-none md:rounded-3xl bg-white lg:bg-zinc-100  min-h-[500px] lg:min-h-0`}
            >
              {/* Image Container - মোবাইলে flex-grow করবে, লার্জে absolute থাকবে */}
              <div className="relative flex-grow lg:absolute lg:inset-0 lg:z-0 overflow-hidden rounded-none md:rounded-3xl ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out scale-100 group-hover:scale-105"
                />

                {/* Desktop View Overlay Content (Ager Design) */}
                <div className="hidden md:flex absolute inset-0 z-10 py-8 px-8 flex-col justify-start">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter capitalize text-[#111111]">
                      {service.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-xl border border-black/10 flex items-center justify-center text-[#111111] transition-all duration-500 group-hover:bg-black group-hover:text-white shrink-0">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/Single Column View Content (আপনার দেওয়া নতুন ডিজাইন) */}
              <div className="md:hidden mt-8 px-6 md:px-2 flex flex-col items-start gap-4 pb-6">
                <div className="space-y-1.5">
                  <h3 className="text-2xl md:text-[2rem] font-bold tracking-tight text-zinc-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Dynamic Tags from features */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[14px] md:text-[15px] font-semibold text-[#5e7ea7] transition-colors duration-300 hover:text-zinc-900 capitalize cursor-default">
                        {feature}
                      </span>
                      {idx < service.features.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-zinc-200"></span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Dynamic Description */}
                <p className="md:text-[1.15rem] text-zinc-500 font-medium leading-relaxed max-w-[92%]">
                  {service.description}
                </p>

                {/* Explore Now Button */}
                <button className="mt-3 flex items-center gap-3 group/link">
                  <span className="text-[16px] md:text-[17px] font-semibold text-zinc-900 relative">
                    Explore Now
                    <span className="absolute bottom-[-8px] left-0 w-full h-[1.5px] bg-zinc-200 group-hover/link:bg-zinc-900 transition-colors duration-300"></span>
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 text-zinc-900 border border-zinc-100 group-hover/link:bg-zinc-900 group-hover/link:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
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
