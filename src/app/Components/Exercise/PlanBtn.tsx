'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

const PlanBtn = () => {
    const pathname = usePathname()
    return (
        <>
             <Link href="/My_Plan"  className={pathname == "/My_Plan"? "text-[#9CA3AF]  bg-[#1A2312] px-5 py-2 rounded-2xl shadow-sm":""}>My Plan</Link>
        </>
    );
};

export default PlanBtn;
// text-[#9CA3AF]