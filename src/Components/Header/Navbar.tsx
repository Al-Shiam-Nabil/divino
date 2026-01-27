import { Plus } from "lucide-react";
import Logo from "../../assets/Logo.svg";
import Container from "../UI/Container";
export default function Navbar() {
  return (
    <div className="bg-white border-b border-gray-200 py-5">
      <Container>
        <div className="flex items-center justify-between ">
          {/* logo */}
          <div>
            <img src={Logo} alt="logo" />
          </div>

          {/* navlink */}
          <div>
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

          <button className="border-b-2 border-black bg pb-3 flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white  px-3 pt-3">
            <Plus /> Get Started
          </button>
        </div>
      </Container>
    </div>
  );
}
