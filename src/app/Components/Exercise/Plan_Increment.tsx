"use client";
import { ExContext } from "@/Context/ExerciseContext";
import { useContext } from "react";

const PlanIncrement = () => {
  const { todayplan } = useContext(ExContext);
  return (
    <>
      <h1 className="border rounded-full w-6 h-6 flex justify-center items-center bg-[#C2F800] text-[#000000] text-sm">
        {todayplan.length}
      </h1>
    </>
  );
};

export default PlanIncrement;
