import { ArrowRight } from "lucide-react";
import Container from "../UI/Container";

const steps = [
  {
    id: "01",
    title: "Understand the Brand",
    focus: "Human & Insightful",
    desc: "We don't guess; we listen to ensure our strategy is rooted in reality, not just assumptions.",
    gradient: "from-[#6366F1] to-[#A855F7]", // Indigo to Purple
    textColor: "text-white",
  },
  {
    id: "02",
    title: "Design with Intent",
    focus: "Purpose-driven",
    desc: "We strip away the unnecessary. Every pixel and line of code is there to create clear, impactful work that solves problems.",
    gradient: "from-[#F43F5E] to-[#FB923C]", // Rose to Orange
    textColor: "text-white",
  },
  {
    id: "03",
    title: "Build for Visibility",
    focus: "Built to Perform",
    desc: "Whether it's a website or SEO plan, assets are optimized for speed, search engines, and maximum engagement.",
    gradient: "from-[#0EA5E9] to-[#22C55E]", // Blue to Green
    textColor: "text-white",
  },
  {
    id: "04",
    title: "Support Long Term Growth",
    focus: "Your Reliable Partner",
    desc: "Launching is just the beginning. We stay by your side, adapting to your changing needs as your business scales.",
    gradient: "from-[#1E293B] to-[#475569]", // Slate Dark (Premium finish)
    textColor: "text-white",
  },
];

const WorkFlow = () => {
  return (
    <section className="bg-white mt-20">
      {/* Header - Stays inside container */}
      {/* <div className="max-w-[1280px] mx-auto pt-24 pb-16 px-6 md:px-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
            Our Process
          </span>
        </div>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-black">
          The Divino <br />
          <span className="text-gray-200">Way.</span>
        </h2>
      </div> */}

      {/* Sticky Cards - Full Width */}
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="sticky top-0 w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden "
          >
            {/* Full Width Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
            />

            {/* Card Content Container */}
            <Container>
              <div className="relative z-10 w-full mx-auto  py-20 flex flex-col lg:flex-row justify-between items-center gap-12">
                {/* Left Side: Content */}
                <div className="w-full lg:w-2/3 space-y-6 md:space-y-10">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white">
                      {step.focus}
                    </span>
                  </div>

                  <h3
                    className={`text-4xl md:text-6xl font-black tracking-tight ${step.textColor} leading-tight`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-lg md:text-2xl font-medium leading-relaxed max-w-2xl ${step.textColor} opacity-90`}
                  >
                    {step.desc}
                  </p>

                  <div className="pt-6">
                    <button className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 capitalize shadow-2xl cursor-pointer">
                      View Case Study{" "}
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Huge Number Overlay */}
                <div className="hidden md:block select-none">
                  <span className="text-[20rem] lg:text-[35rem] font-black leading-none text-white/10 tracking-tighter">
                    {step.id}
                  </span>
                </div>
              </div>
            </Container>

            {/* Bottom Shadow for Stacking Depth */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Modern Footer CTA */}
      <Container>
        <div className="bg-white py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-2xl md:text-3xl font-black  text-black capitalize">
              Ready to start a partnership?
            </h2>
            {/* <button className="bg-black text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-indigo-600 transition-all duration-300 shadow-2xl flex items-center gap-4 mx-auto capitalize cursor-pointer">
            Let's talk with us <MessageCircle />
          </button> */}

            <div className="w-full max-w-[250px] mx-auto">
              <button className="group cursor-pointer relative w-full h-[52px] md:h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[16px] md:text-[18px] transition-all active:scale-[0.98] shadow-lg">
                {/* বাটন ব্যাকগ্রাউন্ড অ্যানিমেশন */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>

                {/* টেক্সট এবং আইকন - সেন্টারে */}
                <span className="relative z-10">Let's talk with us</span>
                <ArrowRight
                  size={22}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkFlow;
