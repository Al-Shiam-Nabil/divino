import { ArrowUpRight, Globe, Palette, Smartphone } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Container from "../UI/Container";

interface Project {
  id: number;
  name: string;
  tags: string[];
  outcome: string;
  image: string;
  icon: any;
}

const projects: Project[] = [
  {
    id: 1,
    name: "VIP WASH",
    tags: ["Logo Design", "Web Development", "SEO"],
    outcome:
      "Redesigned specifically for the Finnish market to increase trust and customer acquisition.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    icon: Globe,
  },
  {
    id: 2,
    name: "LUMINA ARCH",
    tags: ["Branding & Identity", "UI/UX Design"],
    outcome:
      "A complete visual overhaul that positioned the firm for premium high-value contracts.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2340",
    icon: Palette,
  },
  {
    id: 3,
    name: "NORDIC TECH",
    tags: ["Mobile App", "SaaS Strategy"],
    outcome:
      "Streamlined user journey for a fintech application, reducing user churn by 25%.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    icon: Smartphone,
  },
];

const SelectedWork: React.FC = () => {
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
    <div className="bg-[#F0F0F0]">
      <Container>
        <section
          ref={sectionRef}
          id="portfolio"
          className="py-30 px-6 max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="reveal flex flex-col items-center text-center mb-32">
            <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-[800] tracking-[-0.05em] leading-[0.9] text-slate-900">
              Featured Projects
            </h2>
          </div>

          {/* Projects List - Sharp Modern Layout */}
          <div className="space-y-40">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="reveal group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Preview - Real Images with minimal rounding */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 transition-all duration-1000 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-white/50 flex items-center gap-2">
                      <project.icon size={14} className="text-slate-900" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-slate-400 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-5xl lg:text-4xl font-[800] text-slate-900 mb-8 tracking-[-0.04em] uppercase">
                    {project.name}
                  </h3>

                  <p className="text-xl font-medium text-slate-500 leading-relaxed mb-12">
                    {project.outcome}
                  </p>

                  <div className="flex items-center">
                    <button className="group/btn relative flex items-center gap-4 py-2">
                      <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900 border-b-2 border-slate-900 pb-1">
                        View Case Study
                      </span>
                      <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-500 group-hover/btn:bg-slate-900 group-hover/btn:text-white group-hover/btn:rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Footer */}
          <div className="reveal mt-48 text-center">
            <button className="group relative px-10 py-6 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:translate-y-[-4px] active:translate-y-0 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]">
              <span className="relative z-10 flex items-center gap-4">
                Browse All Work
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default SelectedWork;
