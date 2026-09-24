'use client'
import { ExContext } from "@/Context/ExerciseContext";
import React, { useContext } from "react";

const SaveIncrement = () => {
  const { saveplan } = useContext(ExContext);
  return (
    <h1 className="border rounded-full w-6 h-6 flex justify-center items-center  text-[#D1D5DB] text-sm">
      {saveplan.length}
    </h1>
  );
};

export default SaveIncrement;
