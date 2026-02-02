import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Layers,
  Menu,
  Palette,
  ShieldCheck,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/divinoLogo.svg";
import Container from "../UI/Container";

const Navbar: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  // const [activeTab, setActiveTab] = useState(0);
  // const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Smart visibility states
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we are past the top
      setHasScrolled(currentScrollY > 20);

      // Smart visibility: Show if scrolling up or at the very top, hide if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    {
      title: "Case Studies",
      path: "",
    },
    {
      title: "Pricing",
      path: "",
    },
    {
      title: "Services",
      dropdown: [
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
      ],
    },
    {
      title: "Careers",
      path: "",
    },
    {
      title: "About Us",
      path: "",
    },
  ];

  //  const serviceItems = [
  //   {
  //     title: "Web Engineering",
  //     desc: "High-performance React & TS ecosystems.",
  //     icon: Code2,
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  //     tag: "Performance",
  //   },
  //   {
  //     title: "Brand Identity",
  //     desc: "Defining visual narratives for modern labels.",
  //     icon: Palette,
  //     image:
  //       "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  //     tag: "Creative",
  //   },
  //   {
  //     title: "UX Architecture",
  //     desc: "Data-backed human interaction design.",
  //     icon: Layers,
  //     image:
  //       "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
  //     tag: "Strategic",
  //   },
  //   {
  //     title: "Scale & Support",
  //     desc: "Long-term infrastructure and IT strategy.",
  //     icon: ShieldCheck,
  //     image:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  //     tag: "Reliable",
  //   },
  // ];

  return (
    <>
      {/* <div
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) ${scrolled ? "pt-4" : "pt-8"}`}
      >
        <Container>
          <div className="w-full mx-auto ">
            <div
              className={`flex items-center justify-between ${scrolled ? "px-4" : "px-0"} md:px-8 lg:pr-6 py-3 md:py-2 transition-all duration-500 rounded-full ${
                scrolled
                  ? "bg-white/50 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] "
                  : "bg-transparent"
              }`}
            >
              <a href="#" className="flex items-center gap-3 group">
                <img
                  src={Logo}
                  alt=""
                  className="md:w-30 w-28 object-contain"
                />
              </a>

              <nav className="hidden lg:flex items-center gap-10">
                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Case Studies
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                <a href="" className="relative group py-2">
                  <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                    Pricing
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>

                <div className="relative group">
                  <button className="flex items-center gap-1.5 py-4 text-[10px] font-black text-slate-400 group-hover:text-slate-900 transition-all  cursor-pointer outline-none">
                    <div className="relative group py-2">
                      <span className="text-base capitalize font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                        Services
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                    </div>
                    <ChevronDown
                      size={20}
                      className="transition-transform duration-500 group-hover:rotate-180"
                    />
                  </button>

                  <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
                    <div className="w-[880px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.2)] overflow-hidden flex h-[520px]">
                     
                      <div className="w-[45%] bg-white p-10 border-r border-slate-50 flex flex-col justify-between relative">
                        <div className="relative z-10">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 block mb-6 px-4">
                            Expertise Portal
                          </span>

                          <div className="relative">
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
              </nav>

              <div className="hidden xl:block">
                <button className="group relative overflow-hidden px-10 py-4 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 cursor-pointer isolate">
                  <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[liquid-flow_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>

                  <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>

                  <div className="absolute inset-0 z-15 opacity-30 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  <div className="relative z-20 flex items-center gap-1">
                    <span className="text-base font-semibold tracking-[0.1em]">
                      Contact Us
                    </span>

                    <div className="relative w-5 h-5 overflow-hidden">
                      <div className="relative w-full h-full flex flex-col transition-all group-hover:[animation:icon-loop_0.5s_linear_infinite]">
                        <div className="absolute inset-0 flex items-center justify-center shrink-0">
                          <ArrowUpRight size={20} strokeWidth={2.5} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center shrink-0 translate-y-full -translate-x-full">
                          <ArrowUpRight size={20} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                  @keyframes liquid-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  @keyframes icon-loop {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(100%, -100%); }
                  }
                `,
                    }}
                  />
                </button>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="xl:hidden md:p-2 text-slate-900"
              >
                <Menu />
              </button>
            </div>
          </div>
        </Container>
      </div> */}

      <div
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-xl py-4 lg:py-6"
            : "bg-transparent py-4 lg:py-6"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* BRAND */}

            <a href="#" className="flex items-center gap-3 group">
              <img src={Logo} alt="" className="md:w-30 w-28 object-contain" />
            </a>

            {/* NAVIGATION - DESKTOP */}

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, idx) =>
                link.dropdown ? (
                  <div key={idx} className="relative group">
                    <button className="flex items-center gap-1.5 py-4  text-base font-medium capitalize  text-slate-800 group-hover:text-slate-600 transition-all cursor-pointer">
                      {link.title}

                      <ChevronDown
                        size={14}
                        className="transition-transform duration-500 group-hover:rotate-180"
                      />
                    </button>

                    {/* MEGA DROPDOWN PANEL */}

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)">
                      <div className="w-[880px] bg-white border border-slate-100 rounded-[2rem] shadow-[0_60px_150px_-30px_rgba(0,0,0,0.15)] overflow-hidden flex h-[500px]">
                        {/* Left: List */}

                        <div className="w-[45%] bg-white p-10 border-r border-slate-50 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-black tracking-wider text-slate-300 block mb-6">
                              Expertise Portal
                            </span>

                            <div className="relative">
                              {link.dropdown.map((item, index) => (
                                <button
                                  key={item.title}
                                  onMouseEnter={() => setActiveTab(index)}
                                  className={`w-full h-[64px] text-left px-5 rounded-xl transition-all duration-300 flex items-center gap-5 relative z-10 cursor-pointer ${activeTab === index ? "bg-slate-50" : "hover:bg-slate-50/50"}`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${activeTab === index ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}
                                  >
                                    <item.icon size={16} />
                                  </div>

                                  <span
                                    className={`text-[13px] font-black tracking-tight ${activeTab === index ? "text-slate-900" : "text-slate-500"}`}
                                  >
                                    {item.title}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right: Showcase */}

                        <div className="w-[55%] bg-slate-900 relative overflow-hidden">
                          {link.dropdown.map((item, index) => (
                            <div
                              key={index}
                              className={`absolute inset-0 transition-all duration-1000 ${activeTab === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                            >
                              <img
                                src={item.image}
                                className="w-full h-full object-cover brightness-[0.6]"
                                alt=""
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>

                              <div className="absolute bottom-10 left-10 right-10">
                                <span className="inline-block px-3 py-1 bg-indigo-600 rounded-lg text-[10px] font-black tracking-wide text-white mb-4">
                                  {item.tag}
                                </span>

                                <h4 className="text-3xl font-black text-white capitalize tracking-tight mb-2">
                                  {item.title}
                                </h4>

                                <p className="text-white/60 text-xs font-medium leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={idx}
                    href={link.path}
                    className="text-base font-medium  capitalize  text-slate-800 hover:text-slate-600 transition-colors py-4"
                  >
                    {link.title}
                  </a>
                ),
              )}
            </nav>

            {/*  */}

            {/* ACTIONS */}

            <div className="flex items-center gap-6">
              <div className="hidden lg:block">
                {/* <button className="group relative overflow-hidden px-8 py-3.5 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 isolate">

                  <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[moving-liquid_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>

                  <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>

                  <div className="relative z-20 flex items-center gap-2">

                    <span className="text-[11px] font-black capitalize tracking-wider">

                      Contact Us

                    </span>

                    <ArrowUpRight size={16} />

                  </div>

                </button> */}

                <button className="group relative overflow-hidden px-10 py-4 bg-black text-white rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 active:scale-95 cursor-pointer isolate">
                  <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-[liquid-flow_6s_ease-in-out_infinite] bg-gradient-to-br from-[#050a14] via-[#0B2B4C] via-[#1e3a8a] to-[#050a14]"></div>

                  <div className="absolute inset-0 z-10 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"></div>

                  <div className="absolute inset-0 z-15 opacity-30 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  <div className="relative z-20 flex items-center gap-1">
                    <span className="text-base font-semibold tracking-[0.1em]">
                      Contact Us
                    </span>

                    <div className="relative w-5 h-5 overflow-hidden">
                      <div className="relative w-full h-full flex flex-col transition-all group-hover:[animation:icon-loop_0.5s_linear_infinite]">
                        <div className="absolute inset-0 flex items-center justify-center shrink-0">
                          <ArrowUpRight size={20} strokeWidth={2.5} />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center shrink-0 translate-y-full -translate-x-full">
                          <ArrowUpRight size={20} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <style
                    dangerouslySetInnerHTML={{
                      __html: `

                  @keyframes liquid-flow {

                    0% { background-position: 0% 50%; }

                    50% { background-position: 100% 50%; }

                    100% { background-position: 0% 50%; }

                  }

                  @keyframes icon-loop {

                    0% { transform: translate(0, 0); }

                    100% { transform: translate(100%, -100%); }

                  }

                `,
                    }}
                  />
                </button>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-black hover:bg-black/5 rounded-full transition-all"
              >
                <Menu size={26} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* MOBILE OVERLAY - Optimized for Mobile UX */}
      <div
        className={`fixed inset-y-0 left-0 z-[110] w-full sm:w-[400px] bg-white transition-transform  cubic-bezier(0.16, 1, 0.3, 1) xl:hidden ${
          isOpen
            ? "translate-x-0 shadow-2xl duration-[0.5s]"
            : "-translate-x-full duration-[0.5s]"
        }`}
        style={{ height: "100%", minHeight: "-webkit-fill-available" }}
      >
        {/* [@media(min-height:500px)]:flex-col ensure korbe boro screen e flex thakbe,



            chhoto screen e flex layout kaaj korbe na jate scroll smoothly kaaj kore */}

        <div className="h-full flex flex-col [@media(max-height:500px)]:block overflow-y-auto overflow-x-hidden no-scrollbar relative">
          {/* 1. Header Section */}

          <div className="p-8 flex justify-between items-center border-b border-slate-50 shrink-0 bg-white sticky top-0 z-20">
            <img src={Logo} alt="Logo" className="w-40  object-contain" />

            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-slate-50 text-slate-900 rounded-full active:scale-90 transition-all border border-slate-100"
            >
              <X size={24} />
            </button>
          </div>

          {/* 2. Navigation Area */}

          <div className="[@media(min-height:500px)]:flex-1 px-5 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full">
                  <div
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === index ? null : index))
                    }
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl cursor-pointer transition-all duration-400



                    ${
                      openDropdown === index
                        ? "bg-linear-45 to-[#0B2B4C] from-[#0A111B] text-white shadow-lg"
                        : "bg-transparent text-slate-700 active:bg-slate-50"
                    }`}
                  >
                    <span className="text-[28px] font-bold tracking-tight capitalize">
                      {link.title}
                    </span>

                    {link.dropdown && (
                      <div
                        className={`transition-transform duration-500 ${openDropdown === index ? "rotate-180" : ""}`}
                      >
                        <ChevronDown
                          size={24}
                          className={
                            openDropdown === index
                              ? "text-white"
                              : "text-slate-400"
                          }
                        />
                      </div>
                    )}
                  </div>

                  {link.dropdown && (
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        openDropdown === index
                          ? "max-h-[1000px] opacity-100 mt-2 mb-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className=" px-5 mt-1  ml-2">
                        {link.dropdown.map((sub, i) => (
                          <div
                            key={i}
                            className="p-4 border-b border-slate-200  transition-all flex items-center gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <h4 className="text-2xl  font-bold text-slate-900 leading-tight">
                                {sub.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Footer Area - Conditional Positioning */}

          {/* [@media(min-height:500px)]:shrink-0 ensure korbe boro screen e footer fixed/shrink thakbe,



              chhoto screen e eta nav-link er por ashbe */}

          <div className="p-6  border-t border-slate-100 [@media(min-height:500px)]:shrink-0 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <div className="flex flex-col gap-4">
              <button className="group relative w-full h-[72px] flex items-center justify-between py-2 pl-6 pr-4 overflow-hidden text-white rounded-full font-bold text-[22px] capitalize active:scale-[0.98] transition-all shadow-xl shadow-slate-950/20 ">
                {/* ১. মেইন বাটন ব্যাকগ্রাউন্ড অ্যানিমেশন (ডার্ক মুভিং) */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#0A111B,#0B2B4C,#1E3A8A,#0A111B)] bg-[length:300%_300%] animate-gradient-move"></div>

                {/* ২. বাটন টেক্সট */}
                <span className="relative z-10">Contact Us</span>

                {/* ৩. আইকন সার্কেল (যেখানে হোয়াইটিশ অ্যানিমেশন হবে) */}
                <div className="relative z-10 w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-sm">
                  {/* ৪. সার্কেলের ভেতরের হোয়াইটিশ/সিলভার মুভিং অ্যানিমেশন */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,#f8fafc,#cbd5e1,#ffffff,#e2e8f0,#f8fafc)] bg-[length:250%_250%] animate-whitish-move"></div>

                  {/* ৫. আইকন (স্থির) */}
                  <ArrowUpRight
                    size={28}
                    className="relative z-10 text-slate-900"
                  />
                </div>

                {/* সিএসএস অ্যানিমেশন */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
          /* মেইন ডার্ক ব্যাকগ্রাউন্ড মুভমেন্ট */
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            animation: gradient-move 6s ease infinite;
          }

          /* হোয়াইটিশ সার্কেল ব্যাকগ্রাউন্ড মুভমেন্ট */
          @keyframes whitish-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-whitish-move {
            animation: whitish-move 3s linear infinite;
          }
        `,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
