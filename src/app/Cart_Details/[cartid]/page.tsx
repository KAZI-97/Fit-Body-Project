// import AddtoButton from "@/app/Components/Exercise/Add_Button/Addto_Button";
// import SavetoButton from "@/app/Components/Exercise/Save_Button/Saveto_Button";
// import Image from "next/image";
// import React from "react";
// interface IExerciseDetails {
//   params: Promise<{
//     cartid: string;
//   }>;
// }

// const CartDetailsPage = async ({ params }: IExerciseDetails) => {
//   const { cartid } = await params;
//   const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cartid}`);
//   const cart_details = await res.json();
//   return (
//     <>
//       <div className="grid grid-cols-1 gap-8 rounded-2xl bg-black p-6 text-white md:grid-cols-2 md:p-8">
//         {/* Image */}
//         <div className="relative aspect-square w-full overflow-hidden rounded-xl">
//           <Image
//             src={cart_details.image}
//             alt={cart_details.name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Details */}
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
//             {cart_details.name}
//           </h1>
//           <p className="mt-3 text-sm leading-relaxed text-neutral-400">
//             {cart_details.description}
//           </p>

//           {/* Muscle group tags */}
//           <div className="mt-4 flex flex-wrap gap-2">
//             {cart_details.muscleGroups.map((group) => (
//               <span
//                 key={group}
//                 className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
//               >
//                 {group}
//               </span>
//             ))}
//           </div>

//           {/* Stats table */}
//           <div className="mt-6 overflow-hidden rounded-xl border border-neutral-800">
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Equipment</span>
//               <span className="font-medium">{cart_details.equipment}</span>
//             </div>
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Difficulty</span>
//               <span className="font-medium">{cart_details.difficulty}</span>
//             </div>
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Sets</span>
//               <span className="font-medium">{cart_details.sets}</span>
//             </div>
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Reps</span>
//               <span className="font-medium">{cart_details.reps}</span>
//             </div>
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Duration</span>
//               <span className="font-medium">{cart_details.duration} min</span>
//             </div>
//             <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Calories</span>
//               <span className="font-medium">
//                 {cart_details.caloriesBurned} kcal
//               </span>
//             </div>
//             <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 text-sm">
//               <span className="text-neutral-400">Rating</span>
//               <span className="font-medium">{cart_details.rating}</span>
//             </div>
//           </div>

//           {/* Instructions */}
//           <div className="mt-6">
//             <h2 className="text-base font-bold">Instructions</h2>
//             <ol className="mt-3 space-y-2">
//               {cart_details.instructions.map((step:string, i:number) => (
//                 <li key={i} className="flex gap-3 text-sm text-neutral-300">
//                   <span className="text-neutral-500">{i + 1}.</span>
//                   <span>{step}</span>
//                 </li>
//               ))}
//             </ol>
//           </div>

//           {/* Actions */}
//           <div className="mt-6 flex flex-wrap gap-3">
//             <AddtoButton cart_details={cart_details}></AddtoButton>
//             <SavetoButton cart_details={cart_details}></SavetoButton>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartDetailsPage;
// Every Code After Responsive
import AddtoButton from "@/app/Components/Exercise/Add_Button/Addto_Button";
import SavetoButton from "@/app/Components/Exercise/Save_Button/Saveto_Button";
import Image from "next/image";
import React from "react";

interface IExerciseDetails {
  params: Promise<{
    cartid: string;
  }>;
}

const CartDetailsPage = async ({ params }: IExerciseDetails) => {
  const { cartid } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${cartid}`);
  const cart_details = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 md:gap-8 rounded-2xl bg-black p-4 sm:p-6 md:p-8 text-white md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={cart_details.image}
            alt={cart_details.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            {cart_details.name}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {cart_details.description}
          </p>

          {/* Muscle group tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {cart_details.muscleGroups.map((group: string) => (
              <span
                key={group}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Stats table */}
          <div className="mt-6 overflow-hidden rounded-xl border border-neutral-800">
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Equipment</span>
              <span className="font-medium text-right">
                {cart_details.equipment}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Difficulty</span>
              <span className="font-medium">{cart_details.difficulty}</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Sets</span>
              <span className="font-medium">{cart_details.sets}</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Reps</span>
              <span className="font-medium">{cart_details.reps}</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Duration</span>
              <span className="font-medium">{cart_details.duration} min</span>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Calories</span>
              <span className="font-medium">
                {cart_details.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex items-center justify-between bg-neutral-900 px-3 sm:px-4 py-3 text-sm">
              <span className="text-neutral-400">Rating</span>
              <span className="font-medium">{cart_details.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-base font-bold">Instructions</h2>
            <ol className="mt-3 space-y-2">
              {cart_details.instructions.map((step: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm text-neutral-300">
                  <span className="text-neutral-500">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <AddtoButton cart_details={cart_details} />
            <SavetoButton cart_details={cart_details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailsPage;
