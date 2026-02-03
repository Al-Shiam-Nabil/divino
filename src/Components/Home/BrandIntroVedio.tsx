import React, { useEffect, useRef, useState } from "react";
import BrandIntro from "../../assets/brandIntro.mp4";

const videoSrc = BrandIntro;

const BrandIntroVedio: React.FC = () => {
  const [smoothProgress, setSmoothProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /**
       * চ্যলেঞ্জ সমাধান: Viewport এর মধ্যেই ফুল উইডথ করা
       * start: ভিডিও যখন স্ক্রিনের ৮০% নিচে থাকবে তখন বড় হওয়া শুরু হবে।
       * end: ভিডিও যখন স্ক্রিনের ২০% ওপরে থাকবে তখনই ফুল উইডথ (১০০%) হয়ে যাবে।
       */
      const start = viewportHeight * 0.8;
      const end = viewportHeight * 0.2;

      let progress = (start - rect.top) / (start - end);
      targetProgress.current = Math.max(0, Math.min(1, progress));
    };

    const updateAnimation = () => {
      setSmoothProgress((prev) => {
        const lerpFactor = 0.1; // মাখন স্মুথনেস এর জন্য
        return prev + (targetProgress.current - prev) * lerpFactor;
      });
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    requestRef.current = requestAnimationFrame(updateAnimation);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const easedProgress =
    smoothProgress < 0.5
      ? 4 * smoothProgress * smoothProgress * smoothProgress
      : 1 - Math.pow(-2 * smoothProgress + 2, 3) / 2;

  const scale = 0.8 + easedProgress * 0.2;
  const width = 80 + easedProgress * 20;
  const borderRadius =
    typeof window !== "undefined" && window.innerWidth < 768
      ? 0
      : (1 - easedProgress) * 60;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] lg:min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div
        className="relative will-change-transform"
        style={{
          width:
            typeof window !== "undefined" && window.innerWidth < 768
              ? "100%"
              : `${width}%`,
          transform:
            typeof window !== "undefined" && window.innerWidth < 768
              ? "none"
              : `scale(${scale})`,
        }}
      >
        <div
          className="relative aspect-[9/16] md:aspect-video overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]"
          style={{
            borderRadius: `${borderRadius}px`,
          }}
        >
          <video
            className="w-full h-full object-cover scale-110"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroVedio;
