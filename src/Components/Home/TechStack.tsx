import {
  Atom,
  Box,
  Clapperboard,
  Code2,
  Cpu,
  Globe,
  Hexagon,
  ImageIcon,
  Palette,
  PenTool,
  Wind,
  Zap,
} from "lucide-react";
import React from "react";

const TechStack: React.FC = () => {
  // Categorized tools as per the plan
  const tools = [
    // Development Tools
    { name: "React", icon: <Atom size={32} />, color: "text-cyan-400" },
    { name: "Node.js", icon: <Cpu size={32} />, color: "text-green-500" },
    { name: "Next.js", icon: <Zap size={32} />, color: "text-slate-900" },
    { name: "WordPress", icon: <Globe size={32} />, color: "text-blue-500" },
    { name: "Webflow", icon: <Wind size={32} />, color: "text-blue-600" },
    // Design Tools
    { name: "Figma", icon: <Hexagon size={32} />, color: "text-pink-500" },
    {
      name: "Illustrator",
      icon: <PenTool size={32} />,
      color: "text-orange-500",
    },
    {
      name: "Photoshop",
      icon: <ImageIcon size={32} />,
      color: "text-blue-800",
    },
    {
      name: "After Effects",
      icon: <Clapperboard size={32} />,
      color: "text-indigo-600",
    },
    { name: "Blender", icon: <Box size={32} />, color: "text-orange-400" },
    // Additional Modern Stack
    { name: "TypeScript", icon: <Code2 size={32} />, color: "text-blue-700" },
    { name: "Tailwind", icon: <Palette size={32} />, color: "text-sky-400" },
  ];

  // Triple the array to ensure the marquee is always full and loops seamlessly
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="w-full py-24 relative overflow-hidden group border-y border-slate-100 bg-white/30 backdrop-blur-sm">
      {/* 
        Faded Edges Logic: 
        Using high-z-index absolute divs with gradients that match the app's 
        overall soft background feel while remaining functional.
      */}

      <div className="flex select-none">
        {/* 
          Marquee Container:
          - 'animate-marquee' handles the infinite linear movement.
          - 'group-hover:[animation-play-state:paused]' satisfies the pause-on-hover requirement.
        */}
        <div className="flex min-w-full shrink-0 items-center justify-around gap-24 py-8 animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-6 transition-all duration-500 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-125 cursor-pointer"
            >
              {/* Icon with Dynamic Brand Color on hover */}
              <div className={`transition-colors duration-500 ${tool.color}`}>
                {tool.icon}
              </div>

              {/* Text Styling - Larger & Bold */}
              <span className="text-lg font-[900] tracking-[0.1em] uppercase text-slate-900 font-display">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
