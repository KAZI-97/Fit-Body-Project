"use client";
import { ExContext } from "@/Context/ExerciseContext";
import React, { useContext } from "react";
const SaveTotal = () => {
  const { saveplan } = useContext(ExContext);
  const Exercise = saveplan.length;
  const Minutes = saveplan.reduce((total, times) => total + times.duration, 0);
  const Calories = saveplan.reduce(
    (total, calori) => total + calori.caloriesBurned,
    0,
  );
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        <div>
          <h1 className="text-[#8A92A0] font-bold text-3xl">Exercise</h1>
        </div>
        <div>
          <h1 className="text-[#CCFF00] [var(--font-oswald)] font-bold text-2xl">
            {Exercise}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-4">
        <div>
          <h1 className="text-[#8A92A0] font-bold text-3xl">Minutes</h1>
        </div>
        <div>
          <h1 className="[var(--font-oswald)] font-bold text-2xl">{Minutes}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-4">
        <div>
          <h1 className="text-[#8A92A0] font-bold text-3xl">Calories</h1>
        </div>
        <div>
          <h1 className="[var(--font-oswald)] font-bold text-2xl">
            {Calories}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SaveTotal;
