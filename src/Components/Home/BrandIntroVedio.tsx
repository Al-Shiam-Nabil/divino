import React, { useEffect, useRef, useState } from "react";
import BrandIntro from "../../assets/brandIntro.mp4";

const videoSrc = BrandIntro;
// "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const BrandIntroVedio: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ক্যালকুলেশন: সেকশনটি যখন ভিউপোর্টে আসবে তখন থেকে টপে যাওয়া পর্যন্ত
      const start = viewportHeight; // স্ক্রিনের নিচে থাকাকালীন
      const end = 0; // স্ক্রিনের একদম টপে পৌঁছালে

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // আধুনিক ইজিং (Easing) ফাংশন: এটি মুভমেন্টকে আরও প্রিমিয়াম করে
  const easedProgress = 1 - Math.pow(1 - scrollProgress, 2.5);

  // ডাইনামিক ভ্যালুসমূহ
  const scale = 0.8 + easedProgress * 0.2; // ০.৮ থেকে ১.০ পর্যন্ত স্কেল
  const width = 80 + easedProgress * 20; // ৮০% থেকে ১০০% পর্যন্ত উইডথ
  const borderRadius = window.innerWidth < 768 ? 0 : (1 - easedProgress) * 60; // ৩.৫রেম থেকে ০ পর্যন্ত

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div
        className="relative will-change-transform transition-all duration-150 ease-out"
        style={{
          width: window.innerWidth < 768 ? "100%" : `${width}%`,
          transform: window.innerWidth < 768 ? "none" : `scale(${scale})`,
        }}
      >
        {/* ভিডিও কন্টেইনার */}
        <div
          className="relative aspect-[9/16] md:aspect-video overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] transition-all duration-300"
          style={{
            borderRadius: `${borderRadius}px`,
          }}
        >
          <video
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* গ্রেডিয়েন্ট এবং ওভারলে */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroVedio;
