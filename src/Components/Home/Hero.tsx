import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[linear-gradient(135deg,#ffffff_0%,#f0f4f8_50%,#d9e2ec_100%)] py-12 md:py-20 lg:py-30 px-4">
      {/* ১. মেইন কার্ড (Responsive width & height) */}
      <div className="relative w-full max-w-[1200px] min-h-[600px] md:h-[800px] py-20 lg:py-30 flex items-center justify-center">
        {/* ৪. কন্টেন্ট লেয়ার (Added Padding for mobile) */}
        <div className="relative z-10 max-w-4xl px-4 md:px-8 flex flex-col items-center text-center">
          {/* ৫. হেডলাইন (Responsive font size & Increased Line Height) */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[72px] font-black text-[#1A1A1A] leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 tracking-tighter">
            Design driven digital <br className="hidden md:block" /> solutions
            for modern brands.
          </h1>

          {/* ৬. ট্যাগস (Flex wrap is already handled) */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
            {["Strategy", "Design", "Technology", "Web Development"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 md:px-6 py-2 bg-white/80 backdrop-blur-md border border-blue-200 text-[#444] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.1em] rounded-full"
                >
                  {tag}
                </span>
              ),
            )}
          </div> */}

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

// import { ArrowRight } from "lucide-react";
// import React from "react";
// import Container from "../UI/Container";

// const Hero: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD] ">
//       <Container>
//         <section className="relative  pt-40 pb-20 sm:pt-25   flex flex-col items-center justify-center min-h-screen">
//           <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
//             {/* Modern Label Badge */}
//             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-slate-900/10 text-slate-800 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
//               {/* <Sparkles size={14} className="text-indigo-600" /> */}
//               <span>Innovating the Digital Frontier</span>
//             </div>

//             {/* Headline with vibrant modern multi-color gradient */}
//             <h1 className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-black  tracking-tight text-slate-900 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-[1.4] sm:leading-[1.1]">
//               Design driven <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#d946ef] via-[#f43f5e] to-[#f59e0b] bg-[length:200%_auto] animate-gradient">
//                 digital solutions
//               </span>{" "}
//               <br />
//               for modern brands.
//             </h1>

//             {/* Sub-headline */}
//             <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
//               Divino works with businesses to build strong visual identities and
//               effective digital experiences. We combine design, content, and
//               technology to improve visibility and trust.
//             </p>

//             {/* Centered CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
//               <button className="group text-lg font-semibold w-full sm:w-auto px-10 py-4.5 bg-linear-45 to-[#0B2B4C] from-[#0A111B] text-white rounded-full transition-all duration-300 hover:bg-linear-45 hover:from-indigo-600 hover:to-indigo-600 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
//                 View Our Work
//                 <ArrowRight
//                   size={20}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>

//               <button className="w-full text-lg font-semibold  sm:w-auto px-10 py-4 bg-transparent text-slate-900 border border-[#0B2B4C] rounded-full  transition-all duration-300  hover:border-slate-900/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer hover:bg-linear-45 hover:from-[#0A111B] hover:to-[#0B2B4C] hover:text-white ">
//                 Let's Talk
//                 <ArrowRight
//                   size={20}
//                   className="text-slate-400 transition-colors group-hover:text-slate-900"
//                 />
//               </button>
//             </div>
//           </div>
//         </section>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
