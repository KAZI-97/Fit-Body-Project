// "use client";

// import { useState } from "react";
// import PlanTotal from "../Components/Exercise/Plan_Total";
// import PlanTab from "../Components/Exercise/PlanTab";
// import SaveTab from "../Components/Exercise/SaveTab";

// const MyPlanPage = () => {
//   const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");
//   const [sortby, setsortby] = useState<"Duration" | "Calories" | "Rating">(
//     "Duration",
//   );

//   return (
//     <>
//       <section>
//         <div className="flex flex-col w-max-5xl justify-center items-center space-y-1.5 mt-3 mb-3">
//           <h1 className="[var(--font-oswald)] font-bold text-4xl">MY PLAN</h1>
//           <p className="[var(--font-inter)] font-regular text-xl text-[#8A92A0]">
//             Cap of five lifts for today. Finish them, then load more.
//           </p>
//         </div>
//       </section>

//       <section>
//         <div className="flex max-w-5xl mx-auto justify-around mt-2.5 mb-4 bg-[#232732] gap-3.5 items-center border border-[#13161D] border-box rounded-2xl">
//           <PlanTotal type={activeTab} />
//         </div>
//       </section>

//       <section className="mt-2.5">
//         <div className="tabs tabs-box bg-[#12151c] border border-white/10 rounded-xl p-1 items-center max-w-5xl mx-auto">
//           <input
//             type="radio"
//             name="my_tabs_3"
//             className="tab text-xs font-semibold [--tab-bg:#232936] checked:text-white"
//             aria-label="Today's Plan"
//             checked={activeTab === "plan"}
//             onChange={() => setActiveTab("plan")}
//           />
//           <div className="tab-content bg-base-100 border-base-300 p-6 w-max-5xl mx-auto">
//             <PlanTab sortby = {sortby}/>
//           </div>

//           <input
//             type="radio"
//             name="my_tabs_3"
//             className="tab text-xs font-semibold [--tab-bg:#232936] text-[#8A92A0]"
//             aria-label="Save"
//             checked={activeTab === "save"}
//             onChange={() => setActiveTab("save")}
//           />
//           <div className="tab-content bg-base-100 border-base-300 p-6">
//             <SaveTab sortby = {sortby}/>
//           </div>

//           <div className="ml-auto flex items-center gap-2 pr-2 min-w-[160px] justify-end">
//             <select
//               value = {sortby}
//               onChange = {(e) => setsortby(e.target.value as typeof sortby)}
//               className="select select-primary"
//             >
//               <option disabled>Select Option</option>
//               <option>Duration</option>
//               <option>Calories</option>
//               <option>Rating</option>
//             </select>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MyPlanPage;

// Every Code After Responsive
"use client";

import { useState } from "react";
import PlanTotal from "../Components/Exercise/Plan_Total";
import PlanTab from "../Components/Exercise/PlanTab";
import SaveTab from "../Components/Exercise/SaveTab";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");
  const [sortby, setsortby] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center space-y-1.5 mt-3 mb-3 px-4 text-center">
          <h1 className="[var(--font-oswald)] font-bold text-2xl sm:text-3xl md:text-4xl">
            MY PLAN
          </h1>
          <p className="[var(--font-inter)] font-regular text-sm sm:text-lg md:text-xl text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap sm:flex-nowrap justify-around mx-4 max-w-5xl lg:mx-auto mt-2.5 mb-4 bg-[#232732] gap-3.5 items-center border border-[#13161D] border-box rounded-2xl">
          <PlanTotal type={activeTab} />
        </div>
      </section>

      <section className="mt-2.5 px-4">
        <div className="tabs tabs-box bg-[#12151c] border border-white/10 rounded-xl p-1 flex flex-wrap items-center gap-2 max-w-5xl mx-auto">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xs font-semibold [--tab-bg:#232936] checked:text-white"
            aria-label="Today's Plan"
            checked={activeTab === "plan"}
            onChange={() => setActiveTab("plan")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-6 w-full">
            <PlanTab sortby={sortby} />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab text-xs font-semibold [--tab-bg:#232936] text-[#8A92A0]"
            aria-label="Save"
            checked={activeTab === "save"}
            onChange={() => setActiveTab("save")}
          />
          <div className="tab-content bg-base-100 border-base-300 p-3 sm:p-6 w-full">
            <SaveTab sortby={sortby} />
          </div>

          <div className="w-full sm:w-auto sm:ml-auto flex items-center gap-2 pr-2 sm:min-w-[160px] justify-end">
            <select
              value={sortby}
              onChange={(e) => setsortby(e.target.value as typeof sortby)}
              className="select select-primary select-sm sm:select-md w-full sm:w-auto"
            >
              <option disabled>Select Option</option>
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPlanPage;