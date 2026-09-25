"use client";

import { useState } from "react";

const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl cursor-pointer"
      >
        ☰
      </button>

      {open && (
        <div className="flex flex-col gap-4 px-3 pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;