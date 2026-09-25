// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext } from "react";
// import { FaBurn, FaRegStar } from "react-icons/fa";
// import { IoMdCheckmark, IoMdClose, IoMdTime } from "react-icons/io";
// import { ExContext } from "@/Context/ExerciseContext";
// import { toast } from "react-toastify";
// import { IExercise } from "@/Type/type";

// const PlanTab = ({sortby}) => {
//   const { todayplan, settodayplan } = useContext(ExContext);
//   // sorted plan
//   const sortedPlan = () => {
//     // if we apply sort here, the main  array will be modified. thats why we will spread it temporary variable
//     const temp_value = [...todayplan];
//     if (sortby === "Duration") {
//       temp_value.sort((a, b) => {
//         return a.duration - b.duration;
//       });
//     }
//     if (sortby === "Rating") {
//       temp_value.sort((a, b) => {
//         return a.rating - b.rating;
//       });
//     }
//     if (sortby === "Calories") {
//       temp_value.sort((a, b) => {
//         return a.caloriesBurned - b.caloriesBurned;
//       });
//     }
//     return temp_value;
//   };
//   const getsortedplan = sortedPlan()

//   const HandleDeleteplan = (id: number) => {
//     const newPlan = todayplan.filter((tplan) => tplan.id != id);
//     settodayplan(newPlan);
//     toast.warning("Deleted from the Plan List")
//   };
//   // Work on mark as done button
//     const HandleMarkAsDoneBtn = (id: number) => {
//       const newPlan = todayplan.filter((tplan) => tplan.id != id);
//       settodayplan(newPlan);
//       toast.success("Plan is Marked as done!");
//     };

//   return (
//     <div className="flex flex-col gap-3">
//       {todayplan.length === 0 ? (
//         // Empty State
//         <div className="flex min-h-[300px] flex-col items-center justify-center gap-4  mb-10">
//           <h1 className="text-[#FFFFFF] [var(--font-oswald)] font-bold text-4xl">
//             Nothing's Here Yet.
//           </h1>
//           <p className="text-[#A1A1AA] [var(--font-inter)]   text-3xl">
//             Browse the library and add a lift to get today moving.
//           </p>

//           <Link href="/">
//             <button className="rounded-full bg-[#c8f902] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95">
//               Browse Workouts
//             </button>
//           </Link>
//         </div>
//       ) : (
//         // Today's Plan
//         getsortedplan.map((plan) => (
//           <div
//             key={plan.id}
//             className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#12151c] p-3"
//           >
//             {/* Image */}
//             <div className="shrink-0 overflow-hidden rounded-xl">
//               <Image
//                 src={plan.image}
//                 alt={plan.name}
//                 width={108}
//                 height={76}
//                 className="h-[76px] w-[108px] object-cover"
//               />
//             </div>

//             {/* Exercise Information */}
//             <div className="flex-1">
//               <h1 className="text-base font-bold uppercase text-white">
//                 {plan.name}
//               </h1>

//               <h1 className="text-xs text-[#9296A0]">{plan.equipment}</h1>

//               <div className="mt-3 flex items-center gap-4 text-[#9296A0]">
//                 {/* Duration */}
//                 <div className="flex items-center gap-1.5">
//                   <IoMdTime className="text-[14px] text-[#c8f902]" />

//                   <h1 className="text-[10px]">{plan.duration}</h1>
//                 </div>

//                 {/* Calories */}
//                 <div className="flex items-center gap-1.5">
//                   <FaBurn className="text-[12px] text-[#c8f902]" />

//                   <h1 className="text-[10px]">{plan.caloriesBurned}</h1>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1.5">
//                   <FaRegStar className="text-[12px] text-[#c8f902]" />

//                   <h1 className="text-[10px]">{plan.rating}</h1>
//                 </div>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center gap-3">
//               {/* View Details */}
//               <Link href={`/Cart_Details/${plan.id}`}>
//                 <button className="rounded-full border border-white/15 px-4 py-2 text-xs text-white transition hover:bg-white/10">
//                   View Details
//                 </button>
//               </Link>

//               {/* Mark as Done */}
//               <button
//                 onClick={() => HandleMarkAsDoneBtn(plan.id)}
//                 className="flex items-center gap-1.5 rounded-full bg-[#c8f902] px-4 py-2 text-xs font-semibold text-black transition hover:brightness-95"
//               >
//                 <IoMdCheckmark className="text-sm" />
//                 Mark as Done
//               </button>

//               {/* Delete */}
//               <button
//                 onClick={() => HandleDeleteplan(plan.id)}
//                 className="cursor-pointer rounded-full p-1 text-[#9296A0] transition hover:bg-red-500 hover:text-white"
//               >
//                 <IoMdClose className="text-lg" />
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default PlanTab;

// Every Code After Responsive
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { IoMdCheckmark, IoMdClose, IoMdTime } from "react-icons/io";
import { ExContext } from "@/Context/ExerciseContext";
import { toast } from "react-toastify";

const PlanTab = ({ sortby }: { sortby: "Duration" | "Calories" | "Rating" }) => {
  const { todayplan, settodayplan } = useContext(ExContext);

  const sortedPlan = () => {
    const temp_value = [...todayplan];
    if (sortby === "Duration") {
      temp_value.sort((a, b) => a.duration - b.duration);
    }
    if (sortby === "Rating") {
      temp_value.sort((a, b) => a.rating - b.rating);
    }
    if (sortby === "Calories") {
      temp_value.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    }
    return temp_value;
  };
  const getsortedplan = sortedPlan();

  const HandleDeleteplan = (id: number) => {
    const newPlan = todayplan.filter((tplan: any) => tplan.id != id);
    settodayplan(newPlan);
    toast.warning("Deleted from the Plan List");
  };

  const HandleMarkAsDoneBtn = (id: number) => {
    const newPlan = todayplan.filter((tplan: any) => tplan.id != id);
    settodayplan(newPlan);
    toast.success("Plan is Marked as done!");
  };

  return (
    <div className="flex flex-col gap-3">
      {todayplan.length === 0 ? (
        <div className="flex min-h-[250px] sm:min-h-[300px] flex-col items-center justify-center gap-4 mb-10 text-center px-4">
          <h1 className="text-[#FFFFFF] [var(--font-oswald)] font-bold text-2xl sm:text-3xl md:text-4xl">
            Nothing&apos;s Here Yet.
          </h1>
          <p className="text-[#A1A1AA] [var(--font-inter)] text-base sm:text-xl md:text-3xl">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/">
            <button className="rounded-full bg-[#c8f902] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95">
              Browse Workouts
            </button>
          </Link>
        </div>
      ) : (
        getsortedplan.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-white/5 bg-[#12151c] p-3"
          >
            <div className="flex gap-4">
              <div className="shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  width={108}
                  height={76}
                  className="h-[76px] w-[108px] object-cover"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-sm sm:text-base font-bold uppercase text-white">
                  {plan.name}
                </h1>
                <h1 className="text-xs text-[#9296A0]">{plan.equipment}</h1>
                <div className="mt-3 flex items-center gap-4 text-[#9296A0]">
                  <div className="flex items-center gap-1.5">
                    <IoMdTime className="text-[14px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{plan.duration}</h1>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaBurn className="text-[12px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{plan.caloriesBurned}</h1>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaRegStar className="text-[12px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{plan.rating}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 sm:ml-auto">
              <Link href={`/Cart_Details/${plan.id}`}>
                <button className="rounded-full border border-white/15 px-3 sm:px-4 py-2 text-xs text-white transition hover:bg-white/10">
                  View Details
                </button>
              </Link>
              <button
                onClick={() => HandleMarkAsDoneBtn(plan.id)}
                className="flex items-center gap-1.5 rounded-full bg-[#c8f902] px-3 sm:px-4 py-2 text-xs font-semibold text-black transition hover:brightness-95"
              >
                <IoMdCheckmark className="text-sm" />
                Mark as Done
              </button>
              <button
                onClick={() => HandleDeleteplan(plan.id)}
                className="cursor-pointer rounded-full p-1 text-[#9296A0] transition hover:bg-red-500 hover:text-white"
              >
                <IoMdClose className="text-lg" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PlanTab;
