import React from "react";
import Container from "../UI/Container";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD]">
      <Container>
        <section className="relative h-[calc(100vh-91px)]  flex flex-col items-center justify-center px-6 pt-20 pb-20  overflow-hidden">
          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full  border border-slate-300 mb-8">
              <span className="w-1.5 h-1.5  rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[12px] sm:text-sm font-semibold tracking-wide text-slate-600 ">
                Available for Q1 2025 Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.2]">
              Modern systems for <br />
              <span className="text-slate-400">digital excellence.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Elite-tier web development, high-fidelity graphic systems, and
              mission-critical IT infrastructure for ambitious companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-5 mb-24">
              <button className="bg-black border w-50  border-black cursor-pointer text-white px-5 py-3 rounded-lg font-semibold text-base hover:bg-transparent hover:text-black transition-all">
                Get Started
              </button>
              <button className="border-1 w-50  cursor-pointer border-slate-600 px-5 py-3 text-slate-600 rounded-lg font-semibold  hover:bg-black hover:text-white transition-all">
                View Capabilities
              </button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
