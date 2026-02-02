import { ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

// Video Import
// import Vedio1 from "../../assets/brandIntro.mp4";
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
    tags: ["Fintech", "Mobile App", "Branding"],
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

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group relative w-full flex flex-col  mt-20">
      {/* Media Layer */}
      <div
        className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden bg-[#ebebeb] transition-all duration-700 ease-in-out md:rounded-[2rem] cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* BIG Explore Cursor (Desktop Only) */}
        <div
          className="pointer-events-none absolute z-30 hidden md:flex transition-transform duration-[400ms] ease-out"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="bg-white h-30 w-30 rounded-full flex flex-col items-center justify-center shadow-2xl">
            <ArrowUpRight
              size={24}
              className="text-black mt-1"
              strokeWidth={2.5}
            />

            <span className="text-[14px] font-[900] capitalize tracking-tighter text-black leading-none">
              Explore
            </span>
          </div>
        </div>

        {/* Thumbnail Image */}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Hover Video */}
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
      <div className="mt-8 px-6 md:px-2 flex flex-col items-start gap-6 mb-14 md:mb-0">
        <div className="space-y-3">
          <h3 className="text-4xl  font-black tracking-tighter text-[#111] leading-none">
            {product.title}
          </h3>
          <p className="text-lg text-gray-500 font-medium leading-tight max-w-[95%]">
            {product.description}
          </p>
        </div>

        {/* Badges Under Description */}
        <div className="flex flex-wrap items-center gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-semibold capitalize tracking-wider rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* NEW Modern Mobile Button */}
        <button className="group/btn lg:hidden relative inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2 overflow-hidden transition-all duration-300 ease-out active:scale-95 border border-zinc-200 hover:border-zinc-900 bg-white">
          {/* Background Fill Hover Effect */}
          <span className="absolute inset-0 bg-zinc-900 translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />

          {/* Button Text */}
          <span className="relative z-10 text-[13px] font-bold tracking-widest capitalize text-zinc-900 transition-colors duration-300 group-hover/btn:text-white">
            Explore Now
          </span>

          {/* Icon with Rounded Background (Now on Right Side) */}
          <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 transition-colors duration-300 group-hover/btn:bg-white/20">
            <div className="relative w-5 h-5 overflow-hidden">
              <ArrowRight
                size={18}
                className="absolute text-zinc-900 transition-all duration-300 group-hover/btn:translate-x-full group-hover/btn:opacity-0"
              />
              <ArrowRight
                size={18}
                className="absolute -translate-x-full text-white transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
              />
            </div>
          </span>
        </button>
      </div>
    </div>
  );
};

const OurSelectedWork = () => {
  return (
    <section className="bg-white pt-10 pb-40">
      <div className="w-full max-w-[1280px] mx-auto px-0 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-16 md:gap-y-32">
          {products.map((product, index) => (
            <div key={product.id} className={index % 2 !== 0 ? "md:mt-32" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSelectedWork;
