import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Vedio1 from "../../assets/brandIntro.mp4";
// ... (Product interface and products array stay the same)
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Hipe Design",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Dev Dot UI",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Zomato App",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Picakbo Dot",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="group relative w-full flex flex-col">
      {/* Media: মোবাইলে ফুল উইডথ এবং লম্বা (aspect-[3/4]), ডেক্সটপেও Portrait (aspect-[4/5]) */}
      <div
        className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden bg-[#f8f8f8] transition-all duration-700 ease-in-out md:rounded-xl cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Floating Follower (Desktop Only) */}
        <div
          className="pointer-events-none absolute z-30 hidden md:flex transition-transform duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-3 shadow-[0_15px_35px_rgba(0,0,0,0.15)] border border-white/50">
            <span className="text-[11px] font-black capitalize tracking-[0.2em] text-black whitespace-nowrap">
              View Case Study
            </span>
            <div className="bg-black rounded-full p-1">
              <ArrowUpRight size={14} className="text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Thumbnail Layer */}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Video Layer */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
        >
          <source src={product.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content Area: মোবাইলে আপনার আপলোড করা ছবির মতো হুবহু ডিজাইন */}
      <div className="mt-6 md:mt-8 px-6 md:px-0 flex flex-col items-start gap-2 md:gap-3 mb-12 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111]">
          {product.title}
        </h3>
        <p className="text-base  text-gray-700 leading-snug max-w-full md:max-w-[90%]">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-2 ">
          {product.tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="text-sm md:text-base font-medium text-gray-500">
                {tag}
              </span>
              {index !== product.tags.length - 1 && (
                <span className="text-gray-300">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* View Case Study Link: মোবাইলে সবসময় দেখা যাবে, ডেক্সটপেও চাইলে রাখতে পারেন */}
        <button className="mt-2 flex lg:hidden items-center gap-2 text-sm font-medium  border-b border-black/20 pb-1 hover:border-black transition-colors">
          View case study <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
};

const OurSelectedWork = () => {
  return (
    <section className="bg-white py-20 md:py-30">
      {/* Container: 1280px max-width, মোবাইলে 0 প্যাডিং (Edge-to-Edge) */}
      <div className="w-full max-w-[1280px] mx-auto px-0 md:px-8 xl:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 md:gap-y-24 lg:gap-x-16">
          {products.map((product, index) => (
            <div key={product.id} className={index % 2 !== 0 ? "md:mt-20" : ""}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSelectedWork;
