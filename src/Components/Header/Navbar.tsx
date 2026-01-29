import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Layers,
  Menu,
  Palette,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/divinoLogo.svg";
import Container from "../UI/Container";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    {
      title: "Web Engineering",
      desc: "High-performance React & TS ecosystems.",
      icon: Code2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tag: "Performance",
    },
    {
      title: "Brand Identity",
      desc: "Defining visual narratives for modern labels.",
      icon: Palette,
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      tag: "Creative",
    },
    {
      title: "UX Architecture",
      desc: "Data-backed human interaction design.",
      icon: Layers,
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
      tag: "Strategic",
    },
    {
      title: "Scale & Support",
      desc: "Long-term infrastructure and IT strategy.",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tag: "Reliable",
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) ${scrolled ? "pt-4" : "pt-8"}`}
      >
        <Container>
          <div className="w-full mx-auto ">
            <div
              className={`flex items-center justify-between px-8 py-2 transition-all duration-500 rounded-full ${
                scrolled
                  ? "bg-white/50 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] "
                  : "bg-transparent"
              }`}
            >
              {/* BRAND */}
              <a href="#" className="flex items-center gap-3 group">
                <img src={Logo} alt="" className="w-30 object-contain" />
              </a>

              {/* NAVIGATION */}
              <nav className="hidden lg:flex items-center gap-10">
                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Home
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Pricing
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                {/* REFINED MODERN DROPDOWN */}
                <div className="relative group">
                  <button className="flex items-center gap-1.5 py-4 text-[10px] font-black text-slate-400 group-hover:text-slate-900 transition-all  cursor-pointer outline-none">
                    <div className="relative group py-2">
                      <span className="text-base capitalize font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                        Services
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                    </div>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-500 group-hover:rotate-180"
                    />
                  </button>

                  {/* DROPDOWN PANEL */}
                  <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
                    <div className="w-[880px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.2)] overflow-hidden flex h-[520px]">
                      {/* LEFT SIDE: Selection List */}
                      <div className="w-[45%] bg-white p-10 border-r border-slate-50 flex flex-col justify-between relative">
                        <div className="relative z-10">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-6 px-4">
                            Expertise Portal
                          </span>

                          <div className="relative">
                            {/* Pixel-Perfect Sliding Highlight */}
                            <div
                              className="absolute left-0 right-0 h-[72px] bg-slate-50 border border-slate-100 rounded-2xl transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) pointer-events-none z-0"
                              style={{
                                transform: `translateY(${activeTab * 72}px)`,
                              }}
                            ></div>

                            {serviceItems.map((item, index) => (
                              <button
                                key={item.title}
                                onMouseEnter={() => setActiveTab(index)}
                                className={`w-full h-[72px] text-left px-5 rounded-xl transition-all duration-300 flex items-center gap-5 group/item relative z-10 cursor-pointer ${
                                  activeTab === index
                                    ? "opacity-100"
                                    : "opacity-90 hover:opacity-100"
                                }`}
                              >
                                <div
                                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                                    activeTab === index
                                      ? "bg-slate-900 text-white rotate-6 scale-110"
                                      : "bg-slate-100 text-slate-600"
                                  }`}
                                >
                                  <item.icon size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col justify-center ">
                                  <span
                                    className={`block text-[13px] font-black uppercase tracking-wider transition-colors duration-300 ${
                                      activeTab === index
                                        ? "text-slate-900"
                                        : "text-slate-800"
                                    }`}
                                  >
                                    {item.title}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-8 mt-4 border-t border-slate-50 px-2">
                          <a
                            href="#"
                            className="flex items-center justify-between group/link"
                          >
                            <div className="space-y-1">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/link:text-indigo-600 transition-colors">
                                Launch a collaboration
                              </span>
                              <p className="text-[10px] font-bold text-slate-300">
                                Detailed roadmap available
                              </p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover/link:bg-indigo-600 group-hover/link:text-white group-hover/link:border-indigo-600 group-hover/link:rotate-45 transition-all duration-500">
                              <ArrowUpRight size={16} />
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* RIGHT SIDE: Immersive Visual Area */}
                      <div className="w-[55%] bg-slate-900 relative overflow-hidden">
                        {serviceItems.map((item, index) => (
                          <div
                            key={`bg-${index}`}
                            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
                              activeTab === index
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-4 scale-105"
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale-[10%] brightness-[0.8]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                            {/* Content Overlay */}
                            <div
                              className={`absolute bottom-12 left-12 right-12 transition-all duration-1000 delay-200 ${
                                activeTab === index
                                  ? "translate-y-0 opacity-100"
                                  : "translate-y-8 opacity-0"
                              }`}
                            >
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white mb-6">
                                <Sparkles
                                  size={10}
                                  className="text-amber-400"
                                />
                                {item.tag}
                              </div>
                              <h4 className="text-4xl font-[900] text-white tracking-tight uppercase mb-4 leading-none">
                                {item.title}
                              </h4>
                              <p className="text-white/60 text-base font-medium leading-relaxed max-w-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Abstract Corner Element */}
                        <div className="absolute top-12 right-12">
                          <div className="w-14 h-14 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center text-white/50 animate-pulse">
                            <Zap size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Careers
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    About Us
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Contact Us
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              </nav>

              {/* CALL TO ACTION */}
              <div className="hidden lg:block">
                <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold  tracking-[0.1em] overflow-hidden transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/20 active:scale-95">
                  <span className="relative z-10 flex items-center gap-3">
                    Start Project
                    <ArrowUpRight
                      size={14}
                      className="group-hover:rotate-45 transition-transform duration-500"
                    />
                  </span>
                  <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>
                </button>
              </div>

              {/* MOBILE TRIGGER */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-slate-900"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* MOBILE OVERLAY - Eased Entry */}
      <div
        className={`fixed inset-0 z-[110] bg-white transition-all duration-[0.8s] cubic-bezier(0.16, 1, 0.3, 1) lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-full flex flex-col p-10">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-[900] uppercase tracking-tighter">
              Divino.
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-5 bg-slate-50 rounded-2xl transition-transform active:scale-90"
            >
              <X size={28} />
            </button>
          </div>
          <div className="space-y-8">
            <a
              href="#"
              className="block text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none"
            >
              Work
            </a>
            <div className="py-6 space-y-6">
              <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
                Expertise
              </span>
              {serviceItems.map((item, i) => (
                <a
                  key={item.title}
                  href="#"
                  className="flex items-center gap-5 text-3xl font-black text-slate-900 tracking-tight uppercase transition-all active:translate-x-2"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                    <item.icon size={20} />
                  </div>
                  {item.title}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="block text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none"
            >
              Studio
            </a>
            <a
              href="#"
              className="block text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none"
            >
              Contact
            </a>
          </div>
          <div className="mt-auto">
            <button className="w-full py-8 bg-slate-900 text-white text-xl font-black rounded-3xl uppercase tracking-[0.4em] shadow-2xl shadow-slate-900/20 active:scale-95 transition-transform">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// import {
//   ArrowUpRight,
//   Code2,
//   Layers,
//   Menu,
//   Palette,
//   ShieldCheck,
//   X,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import Logo from "../../assets/divinoLogo.svg";
// import Container from "../UI/Container";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Pricing", href: "#" },
//     { name: "Careers", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Contact Us", href: "#" },
//   ];

//   const serviceItems = [
//     {
//       title: "Web Engineering",
//       desc: "High-performance React & TS ecosystems.",
//       icon: Code2,
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
//       tag: "Performance",
//     },
//     {
//       title: "Brand Identity",
//       desc: "Defining visual narratives for modern labels.",
//       icon: Palette,
//       image:
//         "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
//       tag: "Creative",
//     },
//     {
//       title: "UX Architecture",
//       desc: "Data-backed human interaction design.",
//       icon: Layers,
//       image:
//         "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
//       tag: "Strategic",
//     },
//     {
//       title: "Scale & Support",
//       desc: "Long-term infrastructure and IT strategy.",
//       icon: ShieldCheck,
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
//       tag: "Reliable",
//     },
//   ];

//   return (
//     <>
//       <div
//         className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500  ${
//           scrolled ? "py-4 px-4 sm:px-8" : "py-8 px-6 sm:px-12"
//         }`}
//       >
//         <Container>
//           <div
//             className={`max-w-[95rem] mx-auto transition-all duration-500 ${
//               scrolled
//                 ? "bg-white/50 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]  px-8 py-3"
//                 : "bg-transparent px-0"
//             }`}
//           >
//             <nav className="flex justify-between items-center">
//               <div className="flex-1 flex items-center">
//                 <a href="#" className="w-30  flex items-center gap-2.5 group">
//                   <img
//                     src={Logo}
//                     alt="logo"
//                     className="w-full h-full object-contain"
//                   />
//                 </a>
//               </div>

//               <div className="hidden lg:flex items-center justify-center gap-10">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="relative group py-2"
//                   >
//                     <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
//                       {link.name}
//                     </span>
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
//                   </a>
//                 ))}
//               </div>

//               <div className="flex-1 flex items-center justify-end">
//                 <div className="hidden sm:block">
//                   <button className="px-7 py-3.5 bg-slate-900 text-white rounded-full font-bold text-base transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 flex items-center gap-2">
//                     Start a Project
//                     <ArrowUpRight size={16} />
//                   </button>
//                 </div>

//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
//                 >
//                   {isOpen ? <X size={20} /> : <Menu size={20} />}
//                 </button>
//               </div>
//             </nav>
//           </div>
//         </Container>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed inset-0 z-[110] bg-white transition-transform duration-500 ease-in-out lg:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full p-8">
//           <div className="flex justify-between items-center mb-12">
//             <span className="text-xl font-black tracking-tighter text-slate-900">
//               DIVINO<span className="text-indigo-600">.</span>
//             </span>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
//             >
//               <X size={20} />
//             </button>
//           </div>
//           <div className="space-y-6">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block text-4xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//           <div className="mt-auto">
//             <button className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-100">
//               Let's Talk
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
