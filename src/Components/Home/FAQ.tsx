import { ArrowRight, MessageCircle, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Container from "../UI/Container";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "We specialize in end-to-end digital product design. This includes user research, wireframing, high-fidelity UI design, prototyping, and usability testing.",
  },
  {
    question: "Why is UI/UX design important for your business growth?",
    answer:
      "Directly: Good design reduces friction. When users find your product easy to navigate, conversion rates increase and customer churn decreases.",
  },
  {
    question:
      "My website isn't generating enough leads. How can your design help?",
    answer:
      "We analyze your user journey to find 'leakage points'. By optimizing call-to-actions (CTAs) and simplifying information architecture, we turn visitors into customers.",
  },
  {
    question: "What separates your agency from others?",
    answer:
      "Proactive Transparency. We don't just take orders; we act as strategic partners. We prioritize business goals over just aesthetics, ensuring every pixel serves a purpose.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="mb-16 ">
          <h2 className="text-[36px] md:text-[50px] font-bold text-zinc-900 tracking-tight leading-tight max-w-2xl">
            Everything You Need <br />
            <span className="text-zinc-400 font-medium">to Know.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Left Side: Accordion List */}
          <div className="w-full lg:flex-[0_0_60%] border-t border-zinc-100 ">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-zinc-100">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-7 flex items-center justify-between text-left group transition-all"
                >
                  <span
                    className={`text-lg md:text-xl font-semibold tracking-tight transition-colors duration-500 ${
                      openIndex === index
                        ? "text-zinc-900"
                        : "text-zinc-500 group-hover:text-zinc-800"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 p-1 rounded-full transition-all duration-500 ${
                      openIndex === index
                        ? "rotate-180 bg-zinc-900 text-white"
                        : "text-zinc-400 group-hover:text-zinc-900"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100 pb-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-lg leading-relaxed max-w-[95%]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Floating Card - Full width on Mobile */}
          <div className="w-screen lg:w-auto -mx-6 md:mx-0 lg:flex-[0_0_35%] lg:sticky lg:top-32 transition-none">
            <div className="relative px-4 py-8 md:p-12 rounded-none md:rounded-[40px] overflow-hidden text-white shadow-2xl isolate min-h-[400px] flex flex-col justify-center">
              {/* --- Infinity Animated Background --- */}
              <div className="absolute inset-0 bg-[#060B12] -z-20" />
              <div className="absolute inset-0 -z-10 opacity-60">
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#1E3A8A] blur-[100px] rounded-full animate-blob-slow" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#0B2B4C] blur-[80px] rounded-full animate-blob-slow reverse" />
              </div>

              <div className="relative z-10 max-w-[90%] mx-auto md:max-w-none">
                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                  <MessageCircle className="text-[#D9FF50]" size={32} />
                </div>

                <h3 className="text-3xl font-bold mb-5 leading-[1.2]">
                  Still have a <br /> specific question?
                </h3>
                <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-medium">
                  Explain it to us like a friend over coffee. We're ready to
                  clear any doubts.
                </p>

                {/* --- Animated Button --- */}
                <div className="w-full">
                  <button className="group cursor-pointer relative w-full h-[52px] md:h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[16px] md:text-[18px] transition-all active:scale-[0.95] shadow-xl">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>
                    <span className="relative z-10">Chat with a Human</span>
                    <ArrowRight
                      size={22}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes blob-slow {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -20px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .animate-gradient-move { animation: gradient-move 6s ease infinite; }
          .animate-blob-slow { animation: blob-slow 10s ease-in-out infinite; }
        `,
        }}
      />
    </section>
  );
};

export default FAQ;
