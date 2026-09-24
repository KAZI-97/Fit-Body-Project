"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaBurn, FaRegStar } from "react-icons/fa";
import { IoMdClose, IoMdTime } from "react-icons/io";
import { ExContext } from "@/Context/ExerciseContext";

const SaveTab = () => {
  const { saveplan, setsaveplan } = useContext(ExContext);

  const HandleDeleteSave = (id: number) => {
    const UpdateSave = saveplan.filter((splan) => splan.id != id);
    setsaveplan(UpdateSave);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        {saveplan.length === 0 ? (
          // Empty State
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 pb-10">
            <h1 className="text-4xl font-bold text-white [var(--font-oswald)]">
              Nothing's Here Yet.
            </h1>

            <p className="text-3xl text-[#A1A1AA] [var(--font-inter)]">
              Browse the library and save a lift for later.
            </p>

            <Link href="/">
              <button className="rounded-full bg-[#c8f902] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-95">
                Browse Workouts
              </button>
            </Link>
          </div>
        ) : (
          saveplan.map((splan) => (
            <div
              key={splan.id}
              className="mx-auto flex w-max-5xl items-center gap-4 rounded-2xl border border-white/5 bg-[#12151c] p-3"
            >
              {/* Image */}
              <div className="shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={splan.image}
                  alt={splan.name}
                  width={108}
                  height={76}
                  className="h-[76px] w-[108px] object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-base font-bold uppercase text-white">
                  {splan.name}
                </h1>

                <h1 className="text-xs text-[#9296A0]">{splan.equipment}</h1>

                <div className="mt-3 flex items-center gap-4 text-[#9296A0]">
                  {/* Duration */}
                  <div className="flex items-center gap-1.5">
                    <IoMdTime className="text-[14px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{splan.duration}</h1>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-1.5">
                    <FaBurn className="text-[12px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{splan.caloriesBurned}</h1>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <FaRegStar className="text-[12px] text-[#c8f902]" />
                    <h1 className="text-[10px]">{splan.rating}</h1>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <Link href={`/Cart_Details/${splan.id}`}>
                  <button className="rounded-full border border-white/15 px-4 py-2 text-xs text-white transition hover:bg-white/10">
                    View Details
                  </button>
                </Link>

                <button
                  onClick={() => HandleDeleteSave(splan.id)}
                  className="cursor-pointer rounded-full p-1 text-[#9296A0] transition hover:bg-red-500 hover:text-white"
                >
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

export default SaveTab;
