"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { IoMdCheckmark, IoMdClose, IoMdTime } from "react-icons/io";
import { ExContext } from "@/Context/ExerciseContext";
import { toast } from "react-toastify";

const PlanTab = () => {
  const { todayplan,settodayplan } = useContext(ExContext);
  
    const HandleDeleteplan = (id:number) =>{
        const newPlan = todayplan.filter((tplan) => tplan.id != id)
        settodayplan(newPlan)
        toast.warn("Plan has been remove!")

    }
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center p-10">
        {todayplan.length === 0 ? (
          <h1 className="text-[#9296A0]">
            Nothing's Here Yet.
          </h1>
        ) : (
          todayplan.map((plan) => (
            <div
              key={plan.id}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#12151c] p-3"
            >
              {/* Image */}
              <div className="shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  width={108}
                  height={76}
                  className="h-[76px] w-[108px] object-cover"
                />
              </div>

              {/* Info (grows to fill space) */}
              <div className="flex-1">
                <h1 className="text-base font-bold uppercase text-white">
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

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <Link href={`/Cart_Details/${plan.id}`}>
                  <button className="rounded-full border border-white/15 px-4 py-2 text-xs text-white transition hover:bg-white/10">
                    View Details
                  </button>
                </Link>

                <button className="flex items-center gap-1.5 rounded-full bg-[#c8f902] px-4 py-2 text-xs font-semibold text-black transition hover:brightness-95">
                  <IoMdCheckmark className="text-sm" />
                  Mark as Done
                </button>

                <button onClick={()=>HandleDeleteplan(plan.id)}className="p-1 text-[#9296A0] transition hover:text-white hover:bg-red-500 border-box rounded:full cursor:pointer ">
                  <IoMdClose className="text-lg" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PlanTab;
