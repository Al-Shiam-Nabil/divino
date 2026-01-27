import { Menu, Plus } from "lucide-react";

import Logo from "../../assets/divinoLogo.svg";

import Container from "../UI/Container";
export default function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 h-[91px] w-full flex items-center">
      <Container>
        <div className="flex items-center justify-between  ">
          {/* logo */}
          <div>
            <img
              src={Logo}
              alt="logo"
              className="w-30 lg:w-40 object-contain"
            />
          </div>

          {/* navlink */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-8 ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* button */}

          <button className=" hidden  border-b-2 border-black bg pb-3 lg:flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white  px-3 pt-3">
            <Plus /> Get Started
          </button>

          {/* small devive menu */}
          <div className=" lg:hidden cursor-pointer bg-gradient-to-tr from-[#FDF6E1] to-[#E9F8FD] rounded-lg p-3">
            <Menu />
          </div>
        </div>
      </Container>
    </div>
  );
}
