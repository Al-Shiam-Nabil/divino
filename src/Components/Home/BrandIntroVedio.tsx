import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const BrandIntroVedio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const videoSrc =
    "https://wavespaceagency.s3.us-east-2.amazonaws.com/Wavespace+-+UI%3AUX+design+for+future+unicorns+.mp4";

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center overflow-hidden py-32"
    >
      <div
        className="relative group cursor-pointer transition-all duration-1000 ease-out will-change-[width,transform]"
        style={{ width: `${widthPercent}%` }}
        onClick={() => setIsModalOpen(true)}
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

          {/* Play Indicator - Visual Cue */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 scale-90 group-hover:scale-100 transition-all duration-700">
              <svg className="w-10 h-10 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 backdrop-blur-3xl p-4 sm:p-8 animate-in fade-in zoom-in-95 duration-700 ease-out"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modern Close Button */}
          <button
            className="absolute top-8 right-8 w-14 h-14 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-all hover:rotate-90 z-[110] border border-white/10 group"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            <X
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Video Container in Modal */}
          <div
            className="w-full max-w-6xl aspect-video relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_0_120px_-20px_rgba(255,255,255,0.1)] border border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <video className="w-full h-full" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default BrandIntroVedio;
