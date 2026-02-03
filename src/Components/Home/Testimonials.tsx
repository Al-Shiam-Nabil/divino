import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../UI/Container";

// ১. ডাটা টাইপ ইন্টারফেস
interface Testimonial {
  id: number;
  clientName: string;
  role: string;
  avatar: string;
  challenge: string;
  experience: string;
  outcome: string;
  image: string;
}

interface TestimonialProps {
  items?: Testimonial[];
  autoPlayInterval?: number;
}

const defaultData: Testimonial[] = [
  {
    id: 1,
    clientName: "Mohamad Alsabah",
    role: "Brand Promoter",
    avatar: "https://i.pravatar.cc/150?u=1",
    challenge: "We struggled to define a clear identity in a crowded market.",
    experience:
      "Divino didn't just design a logo; they deeply understood our culture. Their team felt like an extension of our own, making the complex process feel simple. ",
    outcome: "Brand Recognition Increased by 40%",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    clientName: "Sarah Jenkins",
    role: "Tech Founder",
    avatar: "https://i.pravatar.cc/150?u=2",
    challenge:
      "Our conversion rate was dropping due to an outdated user experience.",
    experience:
      "The technical depth the team brought to our web design was refreshing. They optimized every touchpoint, ensuring our users felt guided at every step. ",
    outcome: "Sales Conversion Boosted by 25%",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
];

const Testimonials: React.FC<TestimonialProps> = ({
  items = defaultData,
  autoPlayInterval = 5000, // ডিফল্ট ৫ সেকেন্ড পর পর চেঞ্জ হবে
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // নেক্সট স্লাইড লজিক
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  // প্রিভিয়াস স্লাইড লজিক
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  /**
   * অটো-প্লে ইফেক্ট:
   * এটি নির্দিষ্ট সময় পর পর nextSlide ফাংশন কল করবে।
   * মাউস হভার করলে (isPaused) এটি স্টপ থাকবে।
   */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval, isPaused]);

  const current = items[activeIndex];

  return (
    <section
      className="relative w-full py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden"
      // মাউস ভেতরে আনলে অটো-প্লে পজ হবে
      onMouseEnter={() => setIsPaused(true)}
      // মাউস সরালে অটো-প্লে আবার চালু হবে
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* Header Section */}
        <div className="mb-12 lg:mb-18">
          <h2 className="text-2xl md:text-[45px] font-medium text-center text-zinc-900 tracking-tight leading-tight">
            Relationships Built on Results.
            {/* <span className="italic font-serif text-zinc-500">Results.</span> */}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* বাম পাশের কন্টেন্ট */}
          <div className="w-full lg:w-[60%] min-h-[480px] flex flex-col justify-between">
            <div className="relative">
              <div className="flex items-center justify-between mb-10">
                <div className="text-[#5e7ea7]">
                  <Quote size={50} fill="currentColor" />
                </div>
                {/* নেভিগেশন বাটন */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-3.5 rounded-full border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3.5 rounded-full border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* স্লাইড অ্যানিমেশন */}
              <div
                key={current.id}
                className="animate-in fade-in slide-in-from-right-8 duration-700"
              >
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <p className="text-zinc-400 text-lg md:text-xl italic leading-snug">
                      "{current.challenge}"
                    </p>
                  </div>

                  <p className="text-[24px] md:text-[32px] text-zinc-800 leading-[1.3] font-medium tracking-tight">
                    {current.experience}
                  </p>

                  <div className="pt-3 ">
                    {/* <div className="inline-flex items-center gap-4 px-6 py-3 bg-zinc-900 rounded-full shadow-lg shadow-zinc-200">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </div>
                      <span className="text-[13px] font-bold text-white uppercase tracking-[0.1em]">
                        {current.outcome}
                      </span>
                    </div> */}

                    <div className="pt-6">
                      {/* Modern Light Mode Liquid Glass Badge */}
                      <div className="relative inline-flex items-center gap-4 px-8 py-4 overflow-hidden rounded-full group cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-white/50 isolate">
                        {/* 1. Frosted Glass Base */}
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl -z-20" />

                        {/* 2. Soft Pastel Water/Aurora Effect (Animated) */}
                        <div className="absolute inset-0 -z-10 opacity-30 mix-blend-multiply pointer-events-none overflow-hidden">
                          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,#60a5fa,#a78bfa,#f472b6,#60a5fa)] animate-[spin_10s_linear_infinite] blur-[35px]" />
                        </div>

                        {/* 3. High-Gloss Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out -z-10" />

                        {/* 4. Modern Status Dot */}
                        <div className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                        </div>

                        {/* 5. Text Content (Dark & Crisp) */}
                        <span className="relative z-10 text-sm font-semibold text-zinc-800 capitalize ">
                          {current.outcome}
                        </span>

                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-zinc-100 pt-8">
              <img
                src={current.avatar}
                alt={current.clientName}
                className="w-14 h-14 rounded-full grayscale border border-zinc-100 p-0.5"
              />
              <div>
                <h4 className="text-zinc-900 font-bold text-lg leading-none mb-1">
                  {current.clientName}
                </h4>
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* ডান পাশের ইমেজ (Circle Shape) */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* ব্যাকগ্রাউন্ড ডেকোরেটিভ সার্কেল */}
              <div className="absolute inset-0 border-2 border-zinc-200 rounded-full scale-110 -z-10" />

              <div className="w-full h-full overflow-hidden rounded-full border-[12px] border-white shadow-2xl shadow-zinc-300/50">
                <img
                  key={current.id}
                  src={current.image}
                  alt="Client Profile"
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-1000 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
