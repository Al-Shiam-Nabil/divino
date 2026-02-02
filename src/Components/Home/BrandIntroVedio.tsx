import React, { useEffect, useRef, useState } from "react";
import BrandIntro from "../../assets/brandIntro.mp4";

const BrandIntroVedio: React.FC = () => {
  const [widthPercent, setWidthPercent] = useState(80);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // যদি স্ক্রিন সাইজ 768px (md) এর নিচে হয়, তবে এনিমেশন দরকার নেই
      if (window.innerWidth < 768) {
        setWidthPercent(100);
        return;
      }

      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startTrigger = viewportHeight * 0.8;
      const endTrigger = viewportHeight * 0.1;

      const currentPos = rect.top;

      let progress = (startTrigger - currentPos) / (startTrigger - endTrigger);
      progress = Math.max(0, Math.min(1, progress));

      const easedProgress = Math.pow(progress, 1.5);

      const newWidth = 80 + easedProgress * 20;
      setWidthPercent(newWidth);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoSrc = BrandIntro;

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center overflow-hidden py-10 md:py-32"
    >
      <div
        className="relative group transition-all duration-700 md:duration-1000 ease-out will-change-[width,transform]"
        style={{
          // মোবাইলে সবসময় ১০০%, বড় স্ক্রিনে স্ক্রল অনুযায়ী পারসেন্টেজ
          width: window.innerWidth < 768 ? "100%" : `${widthPercent}%`,
        }}
      >
        {/* Container: মোবাইলে rounded-none (edge-to-edge), md তে rounded-3rem */}
        <div
          className={`relative aspect-video overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] bg-slate-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] 
            ${widthPercent > 98 || window.innerWidth < 768 ? "rounded-none" : "rounded-[1rem] md:rounded-[3rem]"}`}
        >
          <video
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroVedio;
