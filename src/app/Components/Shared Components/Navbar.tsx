// Every Code After Making Responsive
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import WorkoutBtn from "../Exercise/WorkoutBtn";
import PlanBtn from "../Exercise/PlanBtn";
import PlanIncrement from "../Exercise/Plan_Increment";
import SaveIncrement from "../Exercise/Save_Increment";
import MobileMenu from "../Mobile_Menu";

const Navbar = () => {
  return (
    <nav className="mb-8">
      <div className="flex justify-between items-center max-w-5xl mx-auto mt-2 p-3">
        {/* Logo */}
        <div className="flex gap-2.5 items-center">
          <Image src={Logo} alt="Logo Image" width={28} height={28} />
          <h1 className="[var(--font-oswald)] text-[#FFFFFF] text-sm sm:text-base">
            FITLOG
          </h1>
        </div>

        {/* Desktop middle nav — hidden on mobile */}
        <div className="[var(--font-inter)] hidden md:flex gap-10">
          <div>
            <WorkoutBtn />
          </div>
          <div>
            <PlanBtn />
          </div>
        </div>

        {/* Right side: Plan/Save + hamburger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-2 items-center">
              <Link href="/My_Plan">
                <button className="text-[#D1D5DB] cursor-pointer text-xs sm:text-sm">
                  Plan
                </button>
              </Link>
              <PlanIncrement />
            </div>
            <div className="flex gap-2 items-center">
              <Link href="/My_Plan">
                <button className="text-[#D1D5DB] cursor-pointer text-xs sm:text-sm">
                  Save
                </button>
              </Link>
              <SaveIncrement />
            </div>
          </div>

          <MobileMenu>
            <WorkoutBtn />
            <PlanBtn />
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
