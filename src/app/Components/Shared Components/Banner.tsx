// Every Code After Making Responsive
import Image from "next/image";
import banner from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center gap-8 max-w-5xl mx-auto mt-2 bg-[#222630] p-6 sm:p-10 rounded-2xl">
      <div className="space-y-4 mb-4 text-center lg:text-left">
        <h3 className="[var(--font-inter)] text-[#C2F800] mt-3 text-sm sm:text-base">
          WORKOUT LIBRARY
        </h3>
        <h1 className="[var(--font-oswald)] text-[#FFFFFF] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="[var(--font-inter)] text-[#9CA3AF] text-base sm:text-lg md:text-xl lg:text-2xl">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <Link href="/#library">
          <button className="[var(--font-inter)] border border-box px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-[#000000] bg-[#C2F800] font-bold text-sm sm:text-[18px] mb-6 cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </Link>
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px]">
        <Image
          src={banner}
          alt="Banner Image"
          width={450}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;