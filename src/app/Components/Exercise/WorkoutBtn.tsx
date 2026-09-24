'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const WorkoutBtn = () => {
    const pathname = usePathname()
    return (
       <>
            <Link href="/"  className={pathname == "/"?"text-[#c2f800]  bg-[#1A2312] px-6 py-3 rounded-2xl shadow-sm":""}>Workouts</Link>
       
       </>
    );
};

export default WorkoutBtn;