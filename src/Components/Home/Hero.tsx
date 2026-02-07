import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  // ১. এনিমেশন ভেরিয়েন্টস - আরও স্মুথ এবং ধীরগতির জন্য
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // ১.২ সেকেন্ড ধরে চলবে, যা প্রিমিয়াম লুক দেয়
        ease: [0.22, 1, 0.36, 1], // Quintic ease-out কার্ভ (খুবই স্মুথ)
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3, // প্রতিটি এলিমেন্ট আসার মাঝে ০.৩ সেকেন্ড গ্যাপ
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[linear-gradient(135deg,#ffffff_0%,#f0f4f8_50%,#d9e2ec_100%)] px-4 overflow-hidden">
      {/* ২. মেইন কার্ড কন্টেইনার */}
      <div className="relative w-full max-w-[1200px] min-h-[600px] md:h-[800px] py-20 flex items-center justify-center">
        {/* কন্টেন্ট লেয়ার - Stagger Wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate" // যখন স্ক্রিনে আসবে তখন শুরু হবে
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl px-4 md:px-8 flex flex-col items-center text-center"
        >
          {/* হেডলাইন */}
          <motion.h1
            variants={fadeInUp}
            className="text-[36px] sm:text-[48px] md:text-[72px] font-black text-[#1A1A1A] leading-[1.2] md:leading-[1.15] mb-6 md:mb-8 tracking-tighter"
          >
            Design driven digital <br className="hidden md:block" /> solutions
            for modern brands.
          </motion.h1>

          {/* স্মল টেক্সট */}
          <motion.p
            variants={fadeInUp}
            className="text-[16px] md:text-[20px] text-[#555] leading-relaxed max-w-2xl mb-10 md:mb-12 font-medium"
          >
            Divino works with businesses to build strong visual identities and
            effective digital experiences. We combine design, content, and
            technology to improve visibility and trust.
          </motion.p>

          {/* বাটন */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-[200px] md:max-w-[230px]"
          >
            <button className="group cursor-pointer relative w-full h-[52px] md:h-[64px] flex items-center justify-center gap-2 overflow-hidden text-white rounded-full font-bold text-[16px] md:text-[18px] transition-all active:scale-[0.95] shadow-lg">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>
              <span className="relative z-10">Read More</span>
              <ArrowRight
                size={22}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* ৩. ফ্লোটিং গ্লাস বল - গতি আরও কমানো হয়েছে রিলেক্সড ফিল দেওয়ার জন্য */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-white/40 backdrop-blur-3xl rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute bottom-10 right-10 w-48 h-48 bg-white/40 backdrop-blur-3xl rounded-full"
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move { animation: gradient-move 8s ease infinite; }
        `,
        }}
      />
    </section>
  );
}
