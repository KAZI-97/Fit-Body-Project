import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import WorkoutBtn from "../Exercise/WorkoutBtn";
import PlanBtn from "../Exercise/PlanBtn";
import PlanIncrement from "../Exercise/Plan_Increment";
import SaveIncrement from "../Exercise/Save_Increment";

const Navbar = () => {
  return (
    <nav className="mb-8">
      <div className="flex justify-between items-center max-w-5xl mx-auto mt-2 p-3">
        <div className="flex gap-2.5">
          <Image src={Logo} alt="Logo Image" width={28} height={28}></Image>
          <h1 className={`[var(--font-oswald)] text-[#FFFFFF]`}>FITLOG</h1>
        </div>
        <div className={`[var(--font-inter)] flex gap-10`}>
          <div>
            <WorkoutBtn></WorkoutBtn>
          </div>
          <div>
            <PlanBtn></PlanBtn>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <Link href="/My_Plan">
              <button className="text-[#D1D5DB] cursor-pointer">Plan</button>
            </Link>
            <PlanIncrement></PlanIncrement>
          </div>
          <div className="flex gap-2">
            <Link href="/My_Plan">
              <button className="text-[#D1D5DB] cursor-pointer">Save</button>
            </Link>
            <SaveIncrement></SaveIncrement>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
