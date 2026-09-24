'use client'
import { IExercise } from "@/Type/type";
import React, { createContext, useState } from "react";

export const ExContext = createContext<any>(null);
const ExerciseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [todayplan, settodayplan] = useState<IExercise[]>([]);
  const [saveplan, setsaveplan] = useState<IExercise[]>([]);
  const val = {
    todayplan,
    settodayplan,
    saveplan,
    setsaveplan,
  };
  return (
    <>
      <ExContext.Provider value={val}>{children}</ExContext.Provider>
    </>
  );
};

export default ExerciseContextProvider;
