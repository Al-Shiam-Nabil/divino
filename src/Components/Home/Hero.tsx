import React from "react";
import Container from "../UI/Container";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD]">
      <Container>
        <section className="relative   flex flex-col items-center justify-center px-6 pt-20 pb-20  overflow-hidden">
          {/* Background Dot Grid */}
          {/* <div className="absolute inset-0 dot-grid opacity-60 z-0"></div> */}

          {/* Soft Ambient Light */}
          {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 blur-[120px] rounded-full z-0"></div> */}

          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 border border-slate-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-sm font-medium tracking-tight text-slate-600">
                Available for Q1 2025 Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Modern systems for <br />
              <span className="text-slate-400">digital excellence.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Elite-tier web development, high-fidelity graphic systems, and
              mission-critical IT infrastructure for ambitious companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
              <button className="bg-black text-white px-10 py-4 rounded-xl font-semibold text-sm hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
              <button className="border border-slate-600 px-10 py-4 text-slate-600 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-all">
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
