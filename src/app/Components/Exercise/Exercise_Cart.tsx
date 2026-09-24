import { IExercise } from "@/Type/type";
import Image from "next/image";
import Link from "next/link";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

interface props {
  exercise_data: IExercise;
}

const Exercise_Cart = ({ exercise_data }: props) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = exercise_data;

  return (
    <>
      <Link src=''>
        <div className="w-[300px] overflow-hidden rounded-xl border border-[#2A2D35] bg-[#17191F] shadow-sm">
          {/* Image */}
          <div>
            <Image
              src={image}
              alt="exercise Image"
              width={300}
              height={150}
              className="h-[150px] w-full object-cover"
            ></Image>
          </div>

          {/* Card Content */}
          <div className="p-4">
            {/* Muscle Groups */}
            <div
              className={`[var(--font-inter)] flex flex-wrap gap-2 font-bold text-[#000000]`}
            >
              {muscleGroups.map((type: string) => (
                <>
                  {
                    <h1
                      className="rounded-2xl border border-box bg-[#C2F800] px-3 py-1 text-[10px] uppercase"
                      key={type}
                    >
                      {type}
                    </h1>
                  }
                </>
              ))}
            </div>

            {/* Exercise Name */}
            <div className="mt-3 text-[15px] font-bold uppercase text-white">
              {name}
            </div>

            {/* Equipment */}
            <div className="mt-1 text-[11px] text-[#8C9099]">{equipment}</div>

            {/* Divider */}
            <div className="mt-4 w-full border-t border-[#292D35]"></div>

            {/* Exercise Information */}
            <div className="mt-3 flex items-center gap-4 text-[#9296A0]">
              <div className="flex items-center justify-center gap-1.5">
                <IoMdTime className="text-[14px]" />
                <h1 className="text-[10px]">{duration}</h1>
              </div>

              <div className="flex items-center justify-center gap-1.5">
                <FaBurn className="text-[12px]" />
                <h1 className="text-[10px]">{caloriesBurned}</h1>
              </div>

              <div className="flex items-center justify-center gap-1.5">
                <FaRegStar className="text-[12px]" />
                <h1 className="text-[10px]">{rating}</h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Exercise_Cart;
