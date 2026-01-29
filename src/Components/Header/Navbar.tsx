import { ArrowUpRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/divinoLogo.svg";
import Container from "../UI/Container";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Careers", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500  ${
          scrolled ? "py-4 px-4 sm:px-8" : "py-8 px-6 sm:px-12"
        }`}
      >
        <Container>
          <div
            className={`max-w-[95rem] mx-auto transition-all duration-500 ${
              scrolled
                ? "bg-white/50 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]  px-8 py-3"
                : "bg-transparent px-0"
            }`}
          >
            <nav className="flex justify-between items-center">
              {/* 1. LEFT: BRAND IDENTITY */}
              <div className="flex-1 flex items-center">
                <a href="#" className="w-30  flex items-center gap-2.5 group">
                  <img
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              {/* 2. CENTER: MAIN NAVIGATION */}
              <div className="hidden lg:flex items-center justify-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className=" font-medium text-slate-800 transition-colors group-hover:text-slate-900">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                  </a>
                ))}
              </div>

              {/* 3. RIGHT: CALL TO ACTION */}
              <div className="flex-1 flex items-center justify-end">
                <div className="hidden sm:block">
                  <button className="px-7 py-3.5 bg-slate-900 text-white rounded-full font-bold text-base transition-all hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 flex items-center gap-2">
                    Start a Project
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </nav>
          </div>
        </Container>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[110] bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-black tracking-tighter text-slate-900">
              DIVINO<span className="text-indigo-600">.</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              <X size={20} />
            </button>
          </div>
          <div className="space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-4xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <button className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-bold text-lg shadow-xl shadow-indigo-100">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import { Menu, Plus } from "lucide-react";

// import Logo from "../../assets/divinoLogo.svg";

// import Container from "../UI/Container";
// export default function Navbar() {
//   return (
//     <div className="bg-white border-b border-gray-200 h-[91px] w-full flex items-center">
//       <Container>
//         <div className="flex items-center justify-between  ">
//           {/* logo */}
//           <div>
//             <img
//               src={Logo}
//               alt="logo"
//               className="w-30 lg:w-40 object-contain"
//             />
//           </div>

//           {/* navlink */}
//           <div className="hidden lg:flex">
//             <ul className="flex items-center gap-8 ">
//               <li className="cursor-pointer">Home</li>
//               <li className="cursor-pointer">Services</li>
//               <li className="cursor-pointer">Careers</li>
//               <li className="cursor-pointer">Pricing</li>
//               <li className="cursor-pointer">About Us</li>
//               <li className="cursor-pointer">Contact Us</li>
//             </ul>
//           </div>

//           {/* button */}

//           <button className=" hidden font-semibold  border-b-2 border-black bg pb-3 lg:flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white  px-4 pt-3">
//             <Plus /> Get Started
//           </button>

//           {/* small devive menu */}
//           <div className=" lg:hidden cursor-pointer bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD] rounded-lg p-3">
//             <Menu />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }
