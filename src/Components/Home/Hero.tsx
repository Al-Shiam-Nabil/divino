import { ArrowRight } from "lucide-react";
import React from "react";
import Container from "../UI/Container";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD] ">
      <Container>
        <section className="relative  pt-40 pb-20 sm:pt-25   flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
            {/* Modern Label Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-slate-900/10 text-slate-800 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {/* <Sparkles size={14} className="text-indigo-600" /> */}
              <span>Innovating the Digital Frontier</span>
            </div>

            {/* Headline with vibrant modern multi-color gradient */}
            <h1 className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-black  tracking-tight text-slate-900 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-[1.4] sm:leading-[1.1]">
              Design driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#d946ef] via-[#f43f5e] to-[#f59e0b] bg-[length:200%_auto] animate-gradient">
                digital solutions
              </span>{" "}
              <br />
              for modern brands.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              Divino works with businesses to build strong visual identities and
              effective digital experiences. We combine design, content, and
              technology to improve visibility and trust.
            </p>

            {/* Centered CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-600">
              <button className="group text-lg font-semibold w-full sm:w-auto px-10 py-4.5 bg-linear-45 to-[#0B2B4C] from-[#0A111B] text-white rounded-full transition-all duration-300 hover:bg-linear-45 hover:from-indigo-600 hover:to-indigo-600 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                View Our Work
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="w-full text-lg font-semibold  sm:w-auto px-10 py-4 bg-transparent text-slate-900 border border-[#0B2B4C] rounded-full  transition-all duration-300  hover:border-slate-900/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer hover:bg-linear-45 hover:from-[#0A111B] hover:to-[#0B2B4C] hover:text-white ">
                Let's Talk
                <ArrowRight
                  size={20}
                  className="text-slate-400 transition-colors group-hover:text-slate-900"
                />
              </button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;

// import React from "react";
// import Container from "../UI/Container";

// const Hero: React.FC = () => {
//   return (
//     <div className="bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD]">
//       <Container>
//         <section className="relative h-[calc(100vh-91px)]  flex flex-col items-center justify-center px-6 pt-20 pb-20  overflow-hidden">
//           <div className="max-w-4xl mx-auto w-full text-center relative z-10">
//             <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full  border border-slate-300 mb-8">
//               <span className="w-1.5 h-1.5  rounded-full bg-blue-600 animate-pulse"></span>
//               <span className="text-[12px] sm:text-sm font-semibold tracking-wide text-slate-600 ">
//                 Available for Q1 2025 Projects
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.2]">
//               Modern systems for <br />
//               <span className="text-slate-400">digital excellence.</span>
//             </h1>

//             <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
//               Elite-tier web development, high-fidelity graphic systems, and
//               mission-critical IT infrastructure for ambitious companies.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-5 mb-24">
//               <button className="bg-black border w-50  border-black cursor-pointer text-white px-5 py-3 rounded-lg font-semibold text-base hover:bg-transparent hover:text-black transition-all">
//                 Get Started
//               </button>
//               <button className="border-1 w-50  cursor-pointer border-slate-600 px-5 py-3 text-slate-600 rounded-lg font-semibold  hover:bg-black hover:text-white transition-all">
//                 View Capabilities
//               </button>
//             </div>
//           </div>
//         </section>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
