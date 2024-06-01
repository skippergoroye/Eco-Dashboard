import NavLogo from "../assets/nav-logo.svg";
import { ChevronDown } from "lucide-react";
import Avater from "../assets/Avatar-Image.svg"

export default function Navbar() {
  return (
    <section className="py-6 mb-10 ">
      <div className="fixed w-full px-8 lg:px-16 bg-white">
        <div className="flex items-center gap-1 lg:gap-4 shadow-2xl px-2 lg:px-4 rounded-xl">
          <img src={NavLogo} alt="header" />
          <div className="flex">
            <p className="text-base lg:text-md">Eco</p>
            <span>
              <ChevronDown />
            </span>
          </div>

          <div className="text-sm lg:text-md flex gap-2">
            <p>PALs</p>
            <p>iPALs</p>
            <p>Innovation</p>
          </div>
          <div className="ml-[450px] hidden lg:flex bg-[#f1fdf5] p-9  rounded-r-lg">
            <div className="flex gap-4 w-[300px]">
              <p>Problem 24</p>
              <p>Project 24</p>
              <div className="border-r border-black"></div>
              <div className="flex items-center gap-1">
              <img src={Avater} alt="" />
              <ChevronDown />

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
