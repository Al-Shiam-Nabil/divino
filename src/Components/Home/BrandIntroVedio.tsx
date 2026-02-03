import React, { useEffect, useRef, useState } from "react";
import BrandIntro from "../../assets/brandIntro.mp4";

const videoSrc = BrandIntro;

const BrandIntroVedio: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ভিডিওটি যখন স্ক্রিনের মাঝখানে থাকবে তখন থেকে ক্যালকুলেশন শুরু হবে
      // এটি স্ক্রলিং ইফেক্টকে আরও ন্যাচারাল করে
      const start = viewportHeight;
      const end = -rect.height;

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    // 'passive: true' পারফরম্যান্স ভালো রাখে
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * আধুনিক ইজিং টুইস্ট:
   * আমি এখানে 'cubic-bezier' এর মতো একটি লজিক ব্যবহার করেছি।
   * এটি ভিডিওটিকে শুরুতে ধীরে, মাঝখানে দ্রুত এবং শেষে আবার খুব স্মুথলি বড় হতে সাহায্য করবে।
   */
  const easedProgress =
    scrollProgress < 0.5
      ? 4 * scrollProgress * scrollProgress * scrollProgress
      : 1 - Math.pow(-2 * scrollProgress + 2, 3) / 2;

  // আপনার ফিক্সড ডাইনামিক ভ্যালুসমূহ
  const scale = 0.8 + easedProgress * 0.2;
  const width = 80 + easedProgress * 20;
  const borderRadius = window.innerWidth < 768 ? 0 : (1 - easedProgress) * 60;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] lg:min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div
        // duration এবং ease-out টাইম বাড়ানো হয়েছে আরও মাখন স্মুথ ফিলের জন্য
        className="relative will-change-transform transition-all duration-500 ease-out"
        style={{
          width: window.innerWidth < 768 ? "100%" : `${width}%`,
          transform: window.innerWidth < 768 ? "none" : `scale(${scale})`,
        }}
      >
        <div
          className="relative aspect-[9/16] md:aspect-video overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] transition-all duration-300"
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
