import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-5 p-5">
      <div className="flex max-w-5xl mx-auto justify-between items-center bg-[#090A0D] p-4 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-2.5">
            <Image src={logo} alt="Logo Image" width={28} height={28}></Image>
            <h1 className={`[var(--font-oswald)] text-[#FFFFFF] text-2xl`}>FITLOG</h1>
          </div>
        </div>
        <div>
            <h1 className="text-[#6B7280] font-bold text-2xl">© 2026 FitLog — Workout Library. Train hard, log honest.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
