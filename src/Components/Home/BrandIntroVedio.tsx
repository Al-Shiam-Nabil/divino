import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const BrandIntroVedio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Placeholder video URL
  const videoSrc =
    // "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    "https://wavespaceagency.s3.us-east-2.amazonaws.com/Wavespace+-+UI%3AUX+design+for+future+unicorns+.mp4";

  return (
    <section className="relative  pb-24 w-full   mx-auto overflow-hidden">
      <div
        className="relative group cursor-pointer "
        onClick={() => setIsModalOpen(true)}
      >
        {/* Modern Cinematic Container without borders */}
        <div className="relative aspect-video  overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] bg-slate-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_48px_80px_-20px_rgba(0,0,0,0.18)] group-hover:scale-[1.015]">
          {/* Muted Teaser Video with subtle zoom on hover */}
          <video
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Intelligent Overlay for contrast */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Modern Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in zoom-in-95 duration-500 ease-out"
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
            className="w-full max-w-6xl aspect-video relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_0_120px_-20px_rgba(255,255,255,0.1)]"
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
