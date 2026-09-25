// Every Code After Responsiveness
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-5 p-3 sm:p-5">
      <div className="flex flex-col sm:flex-row max-w-5xl mx-auto justify-between items-center gap-3 sm:gap-0 bg-[#090A0D] p-4 rounded-xl text-center sm:text-left">
        <div className="flex gap-2.5 items-center">
          <Image src={logo} alt="Logo Image" width={28} height={28} />
          <h1 className="[var(--font-oswald)] text-[#FFFFFF] text-sm sm:text-base">
            FITLOG
          </h1>
        </div>

        <h1 className="text-[#6B7280] font-bold text-xs sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;