import NavLogo from "../../assets/nav-logo.svg";
import { ChevronDown } from "lucide-react";
import Avater from "../../assets/Avatar-Image.svg";

export default function Navbar() {
  return (
    <section className="py-10 mb-10 cursor-pointer z-50 bg-white">
      <div className="fixed w-full px-8 lg:px-16 bg-white">
        <div className="flex items-center gap-1 lg:gap-4 shadow-lg px-2 lg:px-4 rounded-xl">
          <img src={NavLogo} alt="header" /> 
          <div className="flex">
            <p className="text-base lg:text-md text-[#ACB2B0]">Eco</p>
            <span>
              <ChevronDown color="#ACB2B0" />
            </span>
          </div>

          <div className="text-sm lg:text-md flex gap-2 lg:gap-6 text-[#ACB2B0]">
            <p>PALs</p>
            <p>iPALs</p>
            <p>Innovation</p>
          </div>
          <div className="ml-[560px] hidden lg:flex bg-[#f1fdf5] p-9  rounded-r-lg border-l shadow-l-4xl">
            <div className="flex gap-4">
                <button className="border-2 border-green-500 px-8 py-2 text-green-500 rounded-lg">Login</button>
                <button className="border-2 border-green-500 px-8 py-2 text-base text-white bg-green-500 rounded-lg">CreateAccount</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
