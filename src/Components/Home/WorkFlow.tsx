import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Understand the Brand",
    focus: "Human & Insightful",
    badge: "Discovery Phase",
    desc: "We don't guess; we listen to ensure our strategy is rooted in reality, not just assumptions.",
    gradient: "from-[#6366F1] to-[#A855F7]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "02",
    title: "Design with Intent",
    focus: "Purpose-driven",
    badge: "Creative UI/UX",
    desc: "We strip away the unnecessary. Every pixel and line of code is there to create impactful work.",
    gradient: "from-[#F43F5E] to-[#FB923C]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "03",
    title: "Build for Visibility",
    focus: "Built to Perform",
    badge: "SEO Strategy",
    desc: "Assets are optimized for speed, search engines, and maximum engagement in the digital world.",
    gradient: "from-[#0EA5E9] to-[#22C55E]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "04",
    title: "Support Long Term Growth",
    focus: "Your Partner",
    badge: "Scale & Support",
    desc: "Launching is just the beginning. We stay by your side as your business scales to new heights.",
    gradient: "from-[#1E293B] to-[#475569]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
];

const WorkFlow = () => {
  return (
    <section className="bg-white">
      <div className="relative">
        {steps.map((step, index) => {
          const isImageLeft = index % 2 !== 0;

          return (
            <div
              key={index}
              className="sticky top-0 w-full min-h-screen lg:min-h-0 lg:h-[70vh] flex items-center justify-center overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
              />

              <div className="relative z-10 w-full h-full flex flex-col justify-between items-center">
                {/* Content Container */}
                <div
                  className={`w-full h-full max-w-[1280px] mx-auto flex flex-col ${
                    isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-stretch lg:items-center justify-between`}
                >
                  {/* Text Section */}
                  <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-0 pt-16 md:pt-24 lg:pt-0">
                    <div className="space-y-4 md:space-y-6">
                      <h3
                        className={`text-3xl md:text-5xl font-black tracking-tighter ${step.textColor} leading-tight`}
                      >
                        {step.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <div className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">
                          {step.focus}
                        </div>
                        <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white/80 font-medium text-[10px] md:text-xs uppercase tracking-widest">
                          {step.badge}
                        </div>
                      </div>

                      <p
                        className={`text-sm md:text-lg font-medium leading-relaxed max-w-md ${step.textColor} opacity-90`}
                      >
                        {step.desc}
                      </p>

                      <div className="pt-2">
                        <button className="group inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-xl">
                          View Case Study
                          <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image Section - Increased height for mobile and added gap */}
                  <div
                    className={`w-full lg:w-[48%] h-full relative flex items-end lg:items-center lg:mx-8 xl:mx-0 ${
                      isImageLeft ? "lg:justify-start" : "lg:justify-end"
                    } mt-16 md:mt-24 lg:mt-0`}
                  >
                    <div className="relative w-screen lg:w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[400px]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="absolute bottom-0 w-full h-full object-cover rounded-none lg:rounded-[2.5rem] border-t lg:border border-white/20 lg:shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="bg-white py-24 px-6 text-center">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="w-full max-w-[260px] mx-auto">
            <button className="group cursor-pointer relative w-full h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-lg shadow-xl">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#1E3A8A,#0A111B)] bg-[length:200%_200%] animate-gradient-move"></div>
              <span className="relative z-10">Let's talk with us</span>
              <ArrowRight
                size={22}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
