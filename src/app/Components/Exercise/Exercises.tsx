// // import React from 'react';

// import { IExercise } from "@/Type/type";
// import Exercise_Cart from "./Exercise_Cart";

// const getPromise = async():Promise<IExercise[]> =>{
//     const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
//     return res.json()
// }

// const Exercises = async() => {
//     const data = await getPromise()
//     return (
//         <>
//             <div id='cart-page' className="mt-4 p-2.5 flex flex-col items-center justify-center space-y-2">
//                 <h1 className={`[var(--font-oswald)] text-[#FFFFFF] text-4xl font-extrabold`}>THE LIBRARY</h1>
//                 <p className={`[var(--font-inter)] text-[#9CA3AF] font-normal`}>Twelve lifts covering every major muscle group.</p>
//             </div>
//             <div className="grid grid-cols-3 gap-8 w-max-5xl mx-auto mt-5 mb-5">
//                 {
//                     data.map((exercise_data) =><Exercise_Cart key={exercise_data.id} exercise_data={exercise_data}></Exercise_Cart> )
//                 }
//             </div>

//         </>
//     );
// };

// export default Exercises;
// import { IExercise } from "@/Type/type";
// import Exercise_Cart from "./Exercise_Cart";

// const getPromise = async (): Promise<IExercise[]> => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
//   return res.json();
// };

// const Exercises = async () => {
//   const data = await getPromise();
//   return (
//     <>
//       <div
//         id="library"
//         className="mt-4 p-2.5 flex flex-col items-center justify-center space-y-2 text-center"
//       >
//         <h1 className="[var(--font-oswald)] text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-extrabold">
//           THE LIBRARY
//         </h1>
//         <p className="[var(--font-inter)] text-[#9CA3AF] font-normal text-sm sm:text-base">
//           Twelve lifts covering every major muscle group.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto mt-5 mb-5 px-4">
//         {data.map((exercise_data) => (
//           <Exercise_Cart key={exercise_data.id} exercise_data={exercise_data} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default Exercises;

// Responsive idea
import { IExercise } from "@/Type/type";
import Exercise_Cart from "./Exercise_Cart";

const getPromise = async (): Promise<IExercise[]> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  return res.json();
};

const Exercises = async () => {
  const data = await getPromise();
  return (
    <>
      <div
        id="library"
        className="mt-4 p-2.5 flex flex-col items-center justify-center space-y-2 text-center"
      >
        <h1 className="[var(--font-oswald)] text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-extrabold">
          THE LIBRARY
        </h1>
        <p className="[var(--font-inter)] text-[#9CA3AF] font-normal text-sm sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-5 mb-5 px-4 sm:px-6 lg:px-8">
        {data.map((exercise_data) => (
          <Exercise_Cart key={exercise_data.id} exercise_data={exercise_data} />
        ))}
      </div>
    </>
  );
};

export default Exercises;