import React from "react";
import PartnersImg from "../../assets/partners.svg";

export default function Partners() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-24">
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[850px] text-[#041E0E]">
          Join us to build social and sustainable innovation from early stage
          ambassadors to expert partners.
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-xl max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[750px] text-[#606060]">
          We have trusted PALs with great experience and professional skills
          that can help you work on your ideas and help you bring them into
          reality.
        </p>
        <img src={PartnersImg} alt="Partners image" className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[850px]" />
      </div>
    </section>
  );
}

