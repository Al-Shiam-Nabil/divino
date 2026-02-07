import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Container from "../UI/Container";

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
      "Divino didn't just design a logo; they deeply understood our culture. Their team felt like an extension of our own, making the complex process feel simple.",
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
      "The technical depth the team brought to our web design was refreshing. They optimized every touchpoint, ensuring our users felt guided at every step.",
    outcome: "Sales Conversion Boosted by 25%",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
];

const Testimonials: React.FC<TestimonialProps> = ({
  items = defaultData,
  autoPlayInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

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
      className="relative w-full py-12 md:py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* Header Section */}
        <div className="mb-8 md:mb-12 lg:mb-18 text-center">
          <h2 className="text-3xl lg:text-[45px] font-bold text-zinc-900 tracking-tight leading-tight">
            Relationships Built on Results.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24 items-center mt-15 md:mt-20 ">
          {/* বাম পাশের কন্টেন্ট - নির্দিষ্ট উচ্চতা দেওয়া হয়েছে যাতে কার্ড সাইজ না বদলায় */}
          <div className="w-full lg:w-[60%] flex flex-col justify-between min-h-[420px] md:min-h-[580px] lg:min-h-[600px]">
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6 md:mb-10">
                <div className="text-[#5e7ea7]">
                  <Quote
                    size={40}
                    className="md:w-[50px] md:h-[50px]"
                    fill="currentColor"
                  />
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 md:p-3.5 rounded-full border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ChevronLeft size={18} className="md:w-5 md:h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 md:p-3.5 rounded-full border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ChevronRight size={18} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* স্লাইড কন্টেন্ট - ট্রানজিশন এবং হাইট স্ট্যাবিলিটি */}
              <div
                key={current.id}
                className="animate-in fade-in slide-in-from-right-8 duration-700 h-full flex flex-col"
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <p className="text-zinc-400 text-base md:text-lg lg:text-xl italic leading-snug">
                      "{current.challenge}"
                    </p>
                  </div>

                  <p className="text-[20px] md:text-[24px] lg:text-[32px] text-zinc-800 leading-[1.3] font-medium tracking-tight">
                    {current.experience}
                  </p>

                  <div className="pt-4 ">
                    {/* Silk Mesh Badge */}
                    <div className="relative inline-flex items-center gap-3 md:gap-4 px-6 md:px-9 py-3 md:py-4 overflow-hidden rounded-full group cursor-default shadow-[0_15px_35px_rgba(94,126,167,0.15)]  isolate">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#f5f3ff] -z-20" />
                      <div className="absolute inset-0 -z-10 opacity-40 mix-blend-multiply pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[150%] bg-[radial-gradient(circle_at_center,#60a5fa,#c084fc,#f472b6)] animate-[pulse_6s_ease-in-out_infinite] blur-[45px] opacity-50" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[120%] bg-[radial-gradient(circle_at_center,#38bdf8,#818cf8)] animate-[pulse_8s_ease-in-out_infinite] blur-[40px] opacity-40" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out -z-10" />
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_12px_rgba(94,126,167,0.6)]"></span>
                      </div>
                      <span className="relative z-10 text-[13px] md:text-sm font-bold text-[#334155] tracking-tight">
                        {current.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ক্লায়েন্ট প্রোফাইল - এটি সবসময় কার্ডের একদম নিচে লেগে থাকবে */}
            <div className="mt-auto flex items-center gap-4 border-t border-zinc-100 pt-6 ">
              <img
                src={current.avatar}
                alt={current.clientName}
                className="w-14 h-14  rounded-full grayscale border border-zinc-100 p-0.5"
              />
              <div>
                <h4 className="text-zinc-900 font-medium text-base md:text-lg leading-none mb-1">
                  {current.clientName}
                </h4>
                <p className="text-zinc-400 text-xs capitalize tracking-widest font-medium">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          {/* ডান পাশের ইমেজ - বড় ডিভাইসে ফিক্সড পজিশন */}
          <div className="hidden lg:flex w-full lg:w-[40%] justify-center lg:justify-end self-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
            50% { transform: scale(1.1) translate(5%, 5%); opacity: 0.6; }
          }
        `,
        }}
      />
    </section>
  );
};

export default Testimonials;
