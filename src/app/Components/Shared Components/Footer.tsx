import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="flex justify-between items-center max-w-5xl mx-auto mt-2 p-3">
          <div className="flex gap-2.5">
            <Image src={logo} alt="Logo Image" width={28} height={28}></Image>
            <h1 className={`[var(--font-oswald)] text-[#FFFFFF]`}>FITLOG</h1>
          </div>
        </div>
        <div>
            <h1 className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
