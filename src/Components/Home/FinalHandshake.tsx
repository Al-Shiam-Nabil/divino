import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import React, { useState } from "react";
import Container from "../UI/Container";

const FinalHandshake: React.FC = () => {
  const [selectedService, setSelectedService] = useState("UI/UX Design");

  return (
    <section className="py-24 lg:py-40 bg-[#F8F9FA] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Side: Partner Message & Trust (Wavespace Inspired) */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-32">
            <h2 className="text-[44px] md:text-[68px] font-bold text-zinc-900 leading-[1.05] tracking-tighter mb-8">
              When you grow, <br />
              <span className="text-zinc-400 font-medium">we grow.</span>
            </h2>

            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed  mb-12 font-medium">
              Great things are never built alone. Let's have a friendly chat to
              see if we can bring your vision to life.
            </p>

            {/* Trust List */}
            <div className="space-y-6 mb-16">
              {[
                "Strategic partners, not just vendors.",
                "Response within 24 hours.",
                "NDA? Absolutely, just ask.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#5E7EA7] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-zinc-700 font-semibold text-base md:text-lg tracking-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="group relative flex items-center gap-6 p-5 rounded-xl bg-white border border-zinc-100  transition-all duration-500 ease-in-out">
              {/* ইমেজ কন্টেইনার - মডার্ন স্কুইরকল শেপ */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-50 border border-zinc-100 group-hover:border-zinc-200 transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                    alt="Founder"
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>
                {/* একটি সলিড অনলাইন ইন্ডিকেটর */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
                </span>
              </div>

              {/* টেক্সট এবং কল-টু-অ্যাকশন */}
              <div className="flex flex-col gap-1.5">
                <div>
                  <h4 className="text-[20px] font-bold text-zinc-800 leading-tight tracking-tight">
                    Ranza Diven
                  </h4>
                  <p className="text-[12px] font-medium text-zinc-400 capitalize tracking-[0.1em] mt-1">
                    Founder & Strategist
                  </p>
                </div>

                {/* রিফাইনড বাটন - কোনো বর্ডার নেই, শুধু একটি স্লিক আন্ডারলাইন */}
                <button className="flex items-center gap-2 mt-1 group/btn cursor-pointer">
                  <div className="w-7 h-7 rounded-full bg-[#1C3883] flex items-center justify-center transition-transform duration-300 group-hover/btn:-rotate-45">
                    <ArrowRight size={15} className="text-white" />
                  </div>
                  <span className="text-[14px] font-semibold text-zinc-900 relative">
                    Book a direct call
                    <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-zinc-900 origin-right scale-x-0 group-hover/btn:scale-x-100 group-hover/btn:origin-left transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* --- Right Side: Form (Small Device এ Full Width, কোনো প্যাডিং নেই) --- */}
          <div className="w-screen md:w-full lg:w-[58%] -mx-4 md:mx-0">
            <div className="bg-white p-8 md:p-16 rounded-none md:rounded-2xl border-y md:border border-zinc-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                {/* Inputs Group: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      className="peer w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-zinc-900 transition-all text-zinc-900 font-semibold text-lg placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label className="absolute left-0 top-3 text-zinc-400 pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-zinc-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-valid:-top-5 peer-valid:text-xs">
                      Full Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      className="peer w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-zinc-900 transition-all text-zinc-900 font-semibold text-lg placeholder-transparent"
                      placeholder="Your Email"
                    />
                    <label className="absolute left-0 top-3 text-zinc-400 pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-zinc-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-valid:-top-5 peer-valid:text-xs">
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Modern Service Chips */}
                <div className="space-y-6">
                  <span className="text-sm font-semibold capitalize  text-zinc-500 block ml-1">
                    What do you need help with?
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "UI/UX Design",
                      "SaaS Design",
                      "Branding",
                      "Web Design",
                      "Mobile App",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                          selectedService === service
                            ? "bg-[#1C3883] text-white border-[#1C3883] shadow-xl shadow-zinc-200"
                            : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-900 hover:text-zinc-900"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div className="relative group">
                  <textarea
                    required
                    rows={1}
                    className="peer w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-zinc-900 transition-all text-zinc-900 font-semibold text-lg resize-none placeholder-transparent"
                    placeholder="Project Details"
                  />
                  <label className="absolute left-0 top-3 text-zinc-400 pointer-events-none transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-zinc-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-valid:-top-5 peer-valid:text-xs">
                    Project Details
                  </label>
                </div>

                {/* Action Buttons Section */}
                <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                  {/* Your Custom Primary Button */}
                  <div className="w-full sm:w-[260px]">
                    <button className="group cursor-pointer relative w-full h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[18px] transition-all active:scale-[0.98] shadow-xl">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>
                      <span className="relative z-10">Start Conversation</span>
                      <ArrowRight size={22} className="relative z-10" />
                    </button>
                  </div>

                  <span className="text-zinc-300 font-medium italic hidden sm:block tracking-tighter">
                    or
                  </span>

                  {/* Minimalist Secondary Button */}
                  <button className="flex items-center gap-3 text-zinc-500 font-bold hover:text-zinc-900 transition-all group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-[#1C3883] group-hover:text-white transition-all duration-300">
                      <Mail size={18} />
                    </div>
                    <span className="">Email Us</span>
                  </button>
                </div>
              </form>
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
          .animate-gradient-move {
            animation: gradient-move 6s ease infinite;
          }
        `,
        }}
      />
    </section>
  );
};

export default FinalHandshake;
