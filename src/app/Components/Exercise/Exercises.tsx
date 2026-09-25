// import React from 'react';

import { IExercise } from "@/Type/type";
import Exercise_Cart from "./Exercise_Cart";

const getPromise = async():Promise<IExercise[]> =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}

const Exercises = async() => {
    const data = await getPromise()
    return (
        <>
            <div id='cart-page' className="mt-4 p-2.5 flex flex-col items-center justify-center space-y-2">
                <h1 className={`[var(--font-oswald)] text-[#FFFFFF] text-4xl font-extrabold`}>THE LIBRARY</h1>
                <p className={`[var(--font-inter)] text-[#9CA3AF] font-normal`}>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 w-max-5xl mx-auto mt-5 mb-5">
                {
                    data.map((exercise_data) =><Exercise_Cart key={exercise_data.id} exercise_data={exercise_data}></Exercise_Cart> )
                }
            </div>

        </>
    );
};

export default Exercises;