import React, { useEffect, useRef, useState } from "react";
import BrandIntro from "../../assets/brandIntro.mp4";

const BrandIntroVedio: React.FC = () => {
  const [widthPercent, setWidthPercent] = useState(80); // Start at 80%
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll logic for expanding width
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // DELAYED TRIGGER:
      // startTrigger: starts expanding when the element's top is at 80% of viewport height
      // endTrigger: reaches full width when the element's top is at 10% of viewport height
      const startTrigger = viewportHeight * 0.8;
      const endTrigger = viewportHeight * 0.1;

      const currentPos = rect.top;

      // Calculate progress (0 to 1) within the specific range
      let progress = (startTrigger - currentPos) / (startTrigger - endTrigger);
      progress = Math.max(0, Math.min(1, progress));

      // Apply an easing curve to the progress for smoother feel
      // Using a power function for a "slow-in" effect
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
      className="relative w-full flex justify-center overflow-hidden py-20 md:pt-32 md:pb-20"
    >
      <div
        className="relative group  transition-all duration-1000 ease-out will-change-[width,transform]"
        style={{ width: `${widthPercent}%` }}
      >
        {/* Modern Cinematic Container */}
        <div
          className={`relative aspect-video overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] bg-slate-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.18)] ${widthPercent > 98 ? "rounded-none" : "rounded-[1rem] md:rounded-[3rem]"}`}
        >
          {/* Muted Teaser Video */}
          <video
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Intelligent Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroVedio;
