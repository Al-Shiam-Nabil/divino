import { Plus } from "lucide-react";
import Logo from "../../assets/Logo.svg";
export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between bg-white border-b border-gray-200 py-5">
        {/* logo */}
        <div>
          <img src={Logo} alt="logo" />
        </div>

        {/* navlink */}
        <div>
          <ul className="flex items-center gap-5 ">
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* button */}
        <div>
          <button className="border-b-2 border-black pb-2 flex items-center gap-2 bg-red-300 px-3 pt-2">
            <Plus /> Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
