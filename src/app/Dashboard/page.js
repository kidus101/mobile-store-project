// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

// const slides = [
//   "http://localhost:3000/_next/image?url=https%3A%2F%2Fdvd6ljcj7w3pj.cloudfront.net%2Fstatic%2Fmain_banner%2F1707875671502-%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_PC_%EC%84%BC%ED%84%B0_%EC%9D%8C%ED%96%A5%EA%B8%B0%EA%B8%B0%EB%B9%85%EC%84%B8%EC%9D%BC.png&w=1080&q=75",
//   "http://localhost:3000/_next/image?url=https%3A%2F%2Fdvd6ljcj7w3pj.cloudfront.net%2Fstatic%2Fmain_banner%2F1707875671502-%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_PC_%EC%84%BC%ED%84%B0_%EC%9D%8C%ED%96%A5%EA%B8%B0%EA%B8%B0%EB%B9%85%EC%84%B8%EC%9D%BC.png&w=1080&q=75",
//   "http://localhost:3000/_next/image?url=https%3A%2F%2Fdvd6ljcj7w3pj.cloudfront.net%2Fstatic%2Fmain_banner%2F1707875671502-%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_PC_%EC%84%BC%ED%84%B0_%EC%9D%8C%ED%96%A5%EA%B8%B0%EA%B8%B0%EB%B9%85%EC%84%B8%EC%9D%BC.png&w=1080&q=75",

// ]

// export default function Dashboard({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const [curr, setCurr] = useState(0);

//   const prev = () =>
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   const next = () =>
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className="overflow-hidden relative max-h-[400px]">
//     <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`
//               transition-all w-3 h-3 bg-white rounded-full
//               ${curr === i ? "p-2" : "bg-opacity-50"}
//             `}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
