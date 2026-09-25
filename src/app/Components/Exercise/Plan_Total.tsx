// "use client";
// import { ExContext } from "@/Context/ExerciseContext";
// import React, { useContext } from "react";

// const PlanTotal = ({ type }: { type: "plan" | "save" }) => {
//   const { todayplan, saveplan } = useContext(ExContext);

//   const source = type === "plan" ? todayplan : saveplan;

//   const Exercise = source.length;
//   const Minutes = source.reduce(
//     (total: number, item: any) => total + item.duration,
//     0,
//   );
//   const Calories = source.reduce(
//     (total: number, item: any) => total + item.caloriesBurned,
//     0,
//   );

//   return (
//     <>
//       <div className="flex flex-col items-center justify-between p-4">
//         <div>
//           <h1 className="text-[#8A92A0] font-bold text-3xl">Exercise</h1>
//         </div>
//         <div>
//           <h1 className="text-[#CCFF00] [var(--font-oswald)] font-bold text-2xl">
//             {Exercise}
//           </h1>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-between p-4">
//         <div>
//           <h1 className="text-[#8A92A0] font-bold text-3xl">Minutes</h1>
//         </div>
//         <div>
//           <h1 className="[var(--font-oswald)] font-bold text-2xl">{Minutes}</h1>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-between p-4">
//         <div>
//           <h1 className="text-[#8A92A0] font-bold text-3xl">Calories</h1>
//         </div>
//         <div>
//           <h1 className="[var(--font-oswald)] font-bold text-2xl">
//             {Calories}
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PlanTotal;

// Every Code After Responsive
"use client";
import { ExContext } from "@/Context/ExerciseContext";
import React, { useContext } from "react";

const PlanTotal = ({ type }: { type: "plan" | "save" }) => {
  const { todayplan, saveplan } = useContext(ExContext);

  const source = type === "plan" ? todayplan : saveplan;

  const Exercise = source.length;
  const Minutes = source.reduce(
    (total: number, item: any) => total + item.duration,
    0,
  );
  const Calories = source.reduce(
    (total: number, item: any) => total + item.caloriesBurned,
    0,
  );

  return (
    <>
      <div className="flex flex-col items-center justify-between p-2 sm:p-4">
        <h1 className="text-[#8A92A0] font-bold text-lg sm:text-2xl md:text-3xl">
          Exercise
        </h1>
        <h1 className="text-[#CCFF00] [var(--font-oswald)] font-bold text-lg sm:text-xl md:text-2xl">
          {Exercise}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between p-2 sm:p-4">
        <h1 className="text-[#8A92A0] font-bold text-lg sm:text-2xl md:text-3xl">
          Minutes
        </h1>
        <h1 className="[var(--font-oswald)] font-bold text-lg sm:text-xl md:text-2xl">
          {Minutes}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between p-2 sm:p-4">
        <h1 className="text-[#8A92A0] font-bold text-lg sm:text-2xl md:text-3xl">
          Calories
        </h1>
        <h1 className="[var(--font-oswald)] font-bold text-lg sm:text-xl md:text-2xl">
          {Calories}
        </h1>
      </div>
    </>
  );
};

export default PlanTotal;
