"use client";
import { ExContext } from "@/Context/ExerciseContext";
import { IExercise } from "@/Type/type";
import React, { useContext, useState } from "react";
import { IoMdAdd, IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const SavetoButton = ({ cart_details }: { cart_details: IExercise }) => {
  const { saveplan, setsaveplan } = useContext(ExContext);
  const [savebtnstatus, setsavebtnstatus] = useState<boolean>(false);

  const HandleAddtoSaveButton = () => {
    setsaveplan([...saveplan, cart_details]);
    toast.success("Exercise has been added to your save tab successfully");
    setsavebtnstatus(true);
  };

  return (
    <button
      onClick={HandleAddtoSaveButton}
      disabled={savebtnstatus}
      className={
        !savebtnstatus
          ? "flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-white"
          : "flex items-center gap-2 rounded-full bg-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-400 cursor-not-allowed"
      }
    >
      {!savebtnstatus ? (
        <>
          <IoMdAdd size={20} />
          Save for Later
        </>
      ) : (
        <>
          <IoMdCheckmark className="text-lg" />
          Already Added to Save Later
        </>
      )}
    </button>
  );
};

export default SavetoButton;
