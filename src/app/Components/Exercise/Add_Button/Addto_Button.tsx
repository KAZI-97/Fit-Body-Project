"use client";
import { ExContext } from "@/Context/ExerciseContext";
import { IExercise } from "@/Type/type";
import React, { useContext, useState } from "react";
import { IoMdAdd, IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const AddtoButton = ({ cart_details }: { cart_details: IExercise }) => {
  const { todayplan, settodayplan,planincrement,setplanincrement } = useContext(ExContext);
  const [btnstatus, setbtnstatus] = useState<boolean>(false);

  const HandleAddButton = () => {
    settodayplan([...todayplan, cart_details]);
    toast.success("Exercise has been added to your plan successfully");
    setbtnstatus(true);
  };

  return (
    <button
      onClick={HandleAddButton}
      disabled={btnstatus}
      className={
        !btnstatus
          ? "flex items-center gap-2 rounded-full bg-[#c8f902] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95"
          : "flex items-center gap-2 rounded-full bg-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-400 cursor-not-allowed"
      }
    >
      {!btnstatus ? (
        <>
          <IoMdAdd className="text-lg" />
          Add to Today's Plan
        </>
      ) : (
        <>
          <IoMdCheckmark className="text-lg" />
          Already Added to Plan
        </>
      )}
    </button>
  );
};

export default AddtoButton;
