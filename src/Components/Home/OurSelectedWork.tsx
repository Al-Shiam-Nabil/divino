import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Vedio1 from "../../assets/brandIntro.mp4";
import Container from '../UI/Container';

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
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "STC Bank",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 3,
    title: "Hipe Design",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail: "https://images.unsplash.com/photo-1620207418302-439b387441b0?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 4,
    title: "Dev Dot UI",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 5,
    title: "Zomato App",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
   {
    id: 6,
    title: "Picakbo Dot",
    description: "Accelerating the future of digital banking in Saudi Arabia.",
    tags: ["Fintech", "Mobile App", "Branding"],
    videoUrl: Vedio1,
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse coordinate tracker for the follower
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, 600);
  };

  return (
    <div className="group cursor-none relative"> {/* Cursor-none for the custom follower */}
      {/* Visual Container */}
      <div 
        className="relative aspect-square overflow-hidden rounded-xl bg-[#f8f8f8] transition-all duration-700 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 1. Modern Rectangular Floating Follower (View Case Study) */}
        <div 
          className="pointer-events-none absolute z-30 hidden md:flex transition-transform duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
            opacity: isHovered ? 1 : 0
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

        {/* 2. Static Thumbnail */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img 
            src={product.thumbnail} 
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* 3. Video Layer */}
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover z-0 transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
        >
          <source src={product.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Text Content - Same as your design */}
      <div className="mt-8 space-y-3 px-2">
        <h3 className="text-3xl font-bold tracking-tight text-[#111] transition-colors duration-300 group-hover:text-gray-600">
          {product.title}
        </h3>
        <p className="text-lg text-gray-500 leading-snug font-normal max-w-[90%]">
          {product.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-x-3 pt-1">
          {product.tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="text-sm font-medium text-gray-500 capitalize tracking-widest">{tag}</span>
              {index !== product.tags.length - 1 && <span className="text-gray-300">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurSelectedWork = () => {
  return (
   <Container>
     <section className="bg-white pt-24 ">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
   </Container>
  );
};

export default OurSelectedWork;