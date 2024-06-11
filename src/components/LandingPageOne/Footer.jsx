import React from "react";
import Logo from "../../assets/nav-logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="px-8 lg:px-16 py-12 lg:py-24 bg-[#263238] mt-14">
      <div>
        <div>
          <img src={Logo} alt="" />
          <div></div>
        </div>
      </div>
      <p className="text-center text-white">
        &copy; {currentYear} Eco Africa. All rights reserved.{" "}
      </p>
    </section>
  );
}
