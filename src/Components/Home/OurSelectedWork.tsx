import { motion } from "framer-motion"; // Motion import
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

const Vedio1 =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

interface Product {
  id: number;
  title: string;
  description: string;
  tags: string[];
  videoUrl: string;
  thumbnail: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Slack",
    description: "Designing and building Slack's interactive demo experience.",
    tags: ["Web Design", "Enterprise", "Development"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "STC Bank",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Web App", "Mobile", "Website", "Fintech", "UI/UX"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Hipe Design",
    description: "Creative solutions for modern digital problems.",
    tags: ["Design System", "UI/UX", "Product"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=967&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dev Dot UI",
    description:
      "Building a platform for developers to showcase their UI skills.",
    tags: ["Community", "Web App", "SaaS"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      // --- SMOOTH SCROLL REVEAL ---
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false, // Protibar scroll-e animated hobe
        amount: 0.15, // 15% dekha gele animation shuru hobe
        margin: "0px 0px -10% 0px", // "Kapakapi" thamanor jonno bottom buffer
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth Agency Style Easing
      }}
      className="group relative w-full flex flex-col"
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#f9f9f9] transition-all duration-700 md:rounded-[2.5rem] cursor-none shadow-sm"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true);
          videoRef.current?.play().catch(() => {});
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      >
        {/* Desktop Custom Cursor */}
        <div
          className="pointer-events-none absolute z-30 hidden md:flex transition-transform duration-500"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="bg-white text-black h-24 w-24 rounded-full flex flex-col items-center justify-center shadow-2xl">
            <ArrowUpRight size={22} strokeWidth={1.5} />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] mt-1">
              Explore
            </span>
          </div>
        </div>

        {/* Media Content */}
        <div
          className={`absolute inset-0 z-10 transition-all duration-1000 ${isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
        >
          <source src={product.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content Area */}
      <div className="mt-8 px-6 md:px-2 flex flex-col items-start gap-4">
        <div className="space-y-1.5">
          <h3 className="text-2xl md:text-[2rem] font-bold tracking-tight text-zinc-900 leading-tight">
            {product.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
          {product.tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-[14px] md:text-[15px] font-semibold text-[#5e7ea7] transition-colors duration-300 hover:text-zinc-900 capitalize cursor-default">
                {tag}
              </span>
              {index < product.tags.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-zinc-200" />
              )}
            </div>
          ))}
        </div>

        <p className=" md:text-[1.15rem] text-zinc-500 font-medium leading-relaxed max-w-[92%]">
          {product.description}
        </p>

        <button className=" lg:hidden mt-3 flex items-center gap-3 group/link">
          <span className="text-[16px] md:text-[17px] font-semibold text-zinc-900 relative">
            Explore Now
            <span className="absolute bottom-[-8px] left-0 w-full h-[1.5px] bg-zinc-200 group-hover/link:bg-zinc-900 transition-colors duration-300" />
          </span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-50 text-zinc-900 border border-zinc-100 group-hover/link:bg-zinc-900 group-hover/link:text-white transition-all duration-300">
            <ArrowRight size={18} strokeWidth={2} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

const OurSelectedWork = () => {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto md:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-16 md:gap-y-32">
          {products.map((product, index) => (
            <div key={product.id} className={index % 2 !== 0 ? "md:mt-24" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSelectedWork;
