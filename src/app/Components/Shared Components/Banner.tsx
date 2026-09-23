import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="flex justify-around items-center max-w-5xl mx-auto mt-2 bg-[#222630] p-10 rounded-2xl">
        <div className="space-y-4  mb-4">
          <h3 className={`[var(--font-inter)] text-[#C2F800] mt-3`}>WORKOUT LIBRARY</h3>
          <h1 className={`[var(--font-oswald)] text-[#FFFFFF] font-extrabold text-6xl`}>TRAIN WITH INTENT. LOG EVERY SET.</h1>
          <p className={`[var(--font-inter)] text-[#9CA3AF] text-2xl`}>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.
            
          </p>
          <button className={`[var(--font-inter)] border border-box px-10 py-4 rounded-xl text-[#000000] bg-[#C2F800] font-bold text-[18px] mb-6`}>BROWSE WORKOUTS</button>
        </div>
        <div>
          <Image
            src={banner}
            alt="Banner Image"
            width={450}
            height={300}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Banner;
