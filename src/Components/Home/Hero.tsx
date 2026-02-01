import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[linear-gradient(135deg,#ffffff_0%,#f0f4f8_50%,#d9e2ec_100%)] px-4">
      {/* ১. মেইন কার্ড (Responsive width & height) */}
      <div className="relative w-full max-w-[1200px] min-h-[600px]  md:h-[800px] py-20 2xl:py-30 flex items-center justify-center">
        {/* ৪. কন্টেন্ট লেয়ার (Added Padding for mobile) */}
        <div className="relative z-10 max-w-4xl px-4 md:px-8 flex flex-col items-center text-center">
          {/* ৫. হেডলাইন (Responsive font size & Increased Line Height) */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-black text-[#1A1A1A] leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 tracking-tighter">
            Design driven digital <br className="hidden md:block" /> solutions
            for modern brands.
          </h1>

      

          {/* ৭. স্মল টেক্সট (Responsive font size) */}
          <p className="text-[16px] md:text-[20px] text-[#555] leading-relaxed max-w-2xl mb-10 md:mb-12 font-medium">
            Divino works with businesses to build strong visual identities and
            effective digital experiences. We combine design, content, and
            technology to improve visibility and trust.
          </p>

          {/* ৮. আপনার সিগনেচার বাটন */}
          <div className="w-full max-w-[200px] md:max-w-[230px]">
            <button className="group cursor-pointer relative w-full h-[52px] md:h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[16px] md:text-[18px] transition-all active:scale-[0.98] shadow-lg">
              {/* বাটন ব্যাকগ্রাউন্ড অ্যানিমেশন */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>

              {/* টেক্সট এবং আইকন - সেন্টারে */}
              <span className="relative z-10">Read More</span>
              <ArrowRight
                size={22}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* ৯. গ্লাস ইফেক্ট এলিমেন্টস (Hidden on mobile to keep it clean) */}
        <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-white/20 backdrop-blur-3xl rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-48 h-48 bg-white/20 backdrop-blur-3xl rounded-full animate-bounce"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes whitish-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move { animation: gradient-move 8s ease infinite; }
          .animate-whitish-move { animation: whitish-move 3s linear infinite; }
        `,
        }}
      />
    </section>
  );
}



