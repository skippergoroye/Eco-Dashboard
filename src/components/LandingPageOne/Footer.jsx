import React from "react";
import Logo from "../../assets/nav-logo.svg";
import FooterArrow from "../../assets/footer-arrow.svg"
import { FooterCountry, FooterLinks } from "../../constants";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-[#263238] mt-10 text-white">
      <div className="flex max-md:flex-col flex-wrap justify-start gap-5 lg:gap-40 sm:px-16 px-8 py-10">
        <div>
          <img src={Logo} alt="footer-logo" />
        </div>

        <div className="lg:mt-4 w-full flex flex-col flex-1 md:justify-end flex-wrap">
          {FooterCountry.map((item) => (
            <div className="flex flex-col mb-8">
              <h3 className="font-bold">{item.country}</h3>
              <p className="text-[#C5C5C5] w-[200px] mb-6">{item.address}</p>
              <p className="">{item.phone}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-10 lg:gap-40">
          {FooterLinks.map((link) => (
            <div>
              {link.links.map((item) => (
                <div className="mb-3 text-[#C5C5C5]">{item.title}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="-mt-4">
        <img src={FooterArrow} alt="" />
        </div>


        
      </div>

      <p className="text-center #text-[#C5C5C5] mb-16 lg:mb-5 lg:ml-[460px]">
          &copy; {currentYear} Eco Africa. All rights reserved.
        </p>
    </footer>
  );
}
