import {
  ArrowUpRight,
  Code2,
  Layers,
  Palette,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import Container from "../UI/Container";

type CardVariant = "indigo" | "rose" | "emerald" | "amber" | "violet" | "blue";

const BentoCard = ({
  title,
  description,
  icon: Icon,
  className = "",
  variant = "indigo",
  tag = "",
}: {
  title: string;
  description: string;
  icon: any;
  className?: string;
  variant?: CardVariant;
  tag?: string;
}) => {
  // Saturated modern pastel gradients - removed 'via-white' to keep the "colorful" feel
  const variantStyles: Record<CardVariant, string> = {
    indigo:
      "bg-gradient-to-br from-indigo-100 to-blue-200 border-indigo-200/60 shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)]",
    rose: "bg-gradient-to-br from-rose-100 to-pink-200 border-rose-200/60 shadow-[0_20px_40px_-15px_rgba(225,29,72,0.2)]",
    emerald:
      "bg-gradient-to-br from-emerald-100 to-teal-200 border-emerald-200/60 shadow-[0_20px_40px_-15px_rgba(5,150,105,0.2)]",
    amber:
      "bg-gradient-to-br from-amber-100 to-orange-200 border-amber-200/60 shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)]",
    violet:
      "bg-gradient-to-br from-violet-100 to-purple-200 border-violet-200/60 shadow-[0_20px_40px_-15px_rgba(124,58,237,0.2)]",
    blue: "bg-gradient-to-br from-sky-100 to-indigo-200 border-sky-200/60 shadow-[0_20px_40px_-15px_rgba(2,132,199,0.2)]",
  };

  const accentColors: Record<CardVariant, string> = {
    indigo: "text-indigo-700",
    rose: "text-rose-700",
    emerald: "text-emerald-700",
    amber: "text-amber-700",
    violet: "text-violet-700",
    blue: "text-blue-700",
  };

  const glowColors: Record<CardVariant, string> = {
    indigo: "bg-white/50",
    rose: "bg-white/50",
    emerald: "bg-white/50",
    amber: "bg-white/50",
    violet: "bg-white/50",
    blue: "bg-white/50",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-between transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {/* Soft Interactive Shine */}
      <div
        className={`absolute -top-[10%] -right-[10%] w-[80%] h-[80%] ${glowColors[variant]} rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-all duration-1000 opacity-40`}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div
            className={`w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm ${accentColors[variant]}`}
          >
            <Icon size={26} strokeWidth={2.5} />
          </div>
          {tag && (
            <span
              className={`px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md text-[10px] font-black uppercase tracking-widest border border-white/40 shadow-sm ${accentColors[variant]}`}
            >
              {tag}
            </span>
          )}
        </div>

        <h3 className="text-3xl font-[900] tracking-tight mb-4 leading-tight text-slate-900">
          {title}
        </h3>
        <p className="font-bold leading-relaxed tracking-tight text-lg text-slate-800/70">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-10 flex items-center justify-between">
        <div
          className={`w-12 h-12 rounded-full border border-white/50 bg-white/40 flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 shadow-sm`}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Background Icon Texture - Subtle but visible */}
      <div
        className={`absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 ${accentColors[variant]}`}
      >
        <Icon size={160} strokeWidth={1.5} />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <section
        ref={sectionRef}
        className=" pt-16 pb-20 md:pb-32 md:pt-0  w-full relative"
      >
        {/* Header */}
        <div className="reveal mb-24 text-center flex flex-col items-center">
          <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-[900] leading-[1] tracking-[-0.06em] mb-6 text-slate-900">
            High-performance <br />
            {/* <span className="italic font-light text-gray-500">
              specialized services.
            </span> */}
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mt-5 font-medium leading-relaxed">
            We combine aesthetic precision with technical excellence to build
            digital products that move the needle.
          </p>
        </div>

        {/* Grid with saturated pastel palettes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[340px] md:auto-rows-[400px]">
          {/* Web Dev - Featured Large - Indigo */}
          <BentoCard
            className="lg:col-span-2 lg:row-span-1 reveal"
            variant="indigo"
            tag="Engineering"
            title="Web Development"
            description="High-performance custom applications and immersive web experiences built with React and TypeScript."
            icon={Code2}
          />

          {/* Brand Design - Clean Square - Rose */}
          <BentoCard
            className="reveal"
            variant="rose"
            tag="Creative"
            title="Brand Identity"
            description="Visual systems that define values into recognition."
            icon={Palette}
          />

          {/* UI/UX - Square - Emerald */}
          <BentoCard
            className="reveal"
            variant="emerald"
            tag="Product"
            title="UI/UX Design"
            description="Human-centric interfaces optimized for conversion."
            icon={Layers}
          />

          {/* Strategy - Wide - Amber */}
          <BentoCard
            className="lg:col-span-2 reveal"
            variant="amber"
            tag="Strategy"
            title="Digital Strategy"
            description="Strategic roadmaps that align business goals with modern digital opportunities and growth hacks."
            icon={Zap}
          />

          {/* SEO - Square - Blue */}
          <BentoCard
            className="reveal"
            variant="blue"
            tag="Growth"
            title="SEO Mastery"
            description="Dominating rankings with data-driven optimization."
            icon={Search}
          />

          {/* Support - Square - Violet */}
          <BentoCard
            className="reveal"
            variant="violet"
            tag="Support"
            title="IT Support"
            description="Infrastructure for your business continuity."
            icon={ShieldCheck}
          />
        </div>
      </section>
    </Container>
  );
};

export default Services;
