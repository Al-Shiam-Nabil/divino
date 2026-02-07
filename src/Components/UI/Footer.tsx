import {
  ArrowUpRight,
  Facebook,
  Figma,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import React from "react";

// লোগো ইমপোর্ট আপনার পাথ অনুযায়ী ঠিক করে নিবেন
import BdFlag from "../../assets/BdFlag.png";
import Logo from "../../assets/divinoLogo.svg";
import FinlandFlag from "../../assets/finlandFlag.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5 isolate">
      {/* --- FAQ কার্ডের মতো Moving Blob Background --- */}
      <div className="absolute inset-0 bg-[#060B12] -z-20" />{" "}
      {/* Base Dark Color */}
      <div className="absolute inset-0 -z-10 opacity-40">
        {" "}
        {/* Blobs Container */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#1E3A8A] blur-[120px] rounded-full animate-blob-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-[#0B2B4C] blur-[100px] rounded-full animate-blob-slow reverse" />
      </div>
      {/* অ্যানিমেশন স্টাইল ইনজেকশন */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blob-slow {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob-slow {
          animation: blob-slow 15s ease-in-out infinite;
        }
        .reverse {
          animation-direction: reverse;
          animation-duration: 18s;
        }
      `,
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="logo"
                className="invert w-[200px] object-contain"
              />
            </div>
            <div className="space-y-5">
              <p className="text-white text-sm font-semibold tracking-[0.1em]">
                Finnish Roots. Global Reach.
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                Empowering brands with Nordic strategy and global creativity. We
                turn complex visions into clear results through specialized IT
                engineering and visual systems.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h4 className="font-bold tracking-[0.1em] text-zinc-200">
              Exploration
            </h4>
            <ul className="space-y-4">
              {[
                "Our Work",
                "Services",
                "Methodology",
                "About Us",
                "Case Studies",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-zinc-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-8">
            <h4 className="font-bold tracking-[0.1em] text-zinc-200">
              Connect
            </h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={18} />, label: "LinkedIn" },
                  { icon: <Instagram size={18} />, label: "Instagram" },
                  { icon: <Facebook size={18} />, label: "Facebook" },
                  { icon: <Figma size={18} />, label: "Behance" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-zinc-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-500 shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <span className="font-bold tracking-[0.1em] text-zinc-200 block">
                  Direct Inquiry
                </span>
                <a
                  href="mailto:helo@divino.com"
                  className="group flex items-center gap-2 text-lg font-bold text-white hover:text-emerald-500 transition-colors"
                >
                  helo@divino.com
                  <Mail
                    size={16}
                    className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Our Presence */}
          <div className="space-y-10">
            <h4 className="font-semibold tracking-[0.1em] text-zinc-200">
              Global Presence
            </h4>
            <div className="space-y-10">
              {/* Finland Hub */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-zinc-200 capitalize tracking-widest">
                    Headquarters
                  </span>
                </div>
                <div className="flex gap-3">
                  <img
                    src={FinlandFlag}
                    alt="Finnish flag"
                    className="rounded-full w-10 h-10 object-cover object-left"
                  />
                  <p className="text-xs font-bold text-zinc-300 leading-relaxed">
                    Auringonkatu 2 C 12
                    <br />
                    02210 Espoo, Finland
                  </p>
                </div>
              </div>

              {/* Bangladesh Hub */}
              <div className="group space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-zinc-200 capitalize tracking-widest">
                    Creative Studio
                  </span>
                </div>
                <div className="flex gap-3">
                  <img
                    src={BdFlag}
                    alt="Bangladeshi flag"
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <p className="text-xs font-bold text-zinc-300 leading-relaxed">
                    Jane-Shaba Housing
                    <br />
                    Jamil Nagar, Bogura-5800
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between lg:items-center gap-8">
          <p className="text-zinc-300 text-sm font-bold tracking-tight">
            © 2026 Divino Marketing Agency. All Rights Reserved.
          </p>

          <div className="flex gap-5 sm:gap-10 text-sm font-semibold capitalize text-zinc-300 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
