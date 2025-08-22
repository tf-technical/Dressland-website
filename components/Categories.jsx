// "use client";

// import React from "react";
// import Image from "next/image";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Categories({ active, setActive }) {
//   const categories = [
//     {
//       value: "Corporate Uniforms",
//       display: <>CORPORATE UNIFORMS</>,
//       iconSrc: "/icon1.png",
//     },
//     {
//       value: "Industrial Safety",
//       display: "INDUSTRIAL SAFETY",
//       iconSrc: "/icon2.png",
//     },
//     {
//       value: "Sustainables",
//       display: "SUSTAINABLES",
//       iconSrc: "/icon3.png",
//     },
//     {
//       value: "Sportswear",
//       display: "SPORTSWEAR",
//       iconSrc: "/icon4.png",
//     },
//   ];

//   return (
//     <>
//       {/* Desktop */}
//       <section
//         id="collection"
//         className="md:grid h-[200px] grid-cols-4 bg-[#4A505F] text-white px-4 md:px-12 lg:px-20 xl:px-32 hidden"
//       >
//         {categories.map(({ value, display, iconSrc }, index) => (
//         <button
//   key={value}
//   onClick={() => setActive(index)}
//   className={`
//     flex flex-col items-center justify-center
//     h-[200px] w-full px-2
//     transition-colors
//     ${active === index ? "bg-[#323741]" : "hover:bg-[#3d4350]"}
//   `}
// >
//   <Image
//     src={iconSrc}
//     alt={value}
//     width={190}
//     height={190}
//     className="object-contain mb-2"  // <-- small space between icon and text
//   />
//   <span className="font-extrabold text-sm text-center leading-tight">
//     {display}
//   </span>
// </button>


//         ))}
//       </section>

//       {/* Mobile */}
//       <section
//        id="collection"
//        className="block md:hidden bg-[#4A505F] text-white mt-6 p-4">
//         <h2 className="text-lg font-bold mb-3">Select a Category</h2>
//         <Select
//   value={categories[active].value}
//   onValueChange={(value) => {
//     const index = categories.findIndex((c) => c.value === value);
//     setActive(index);
//   }}
// >

//           <SelectTrigger className="w-full bg-[#323741] border border-[#5A5F70] text-white rounded-lg py-3 text-lg font-semibold hover:bg-[#3d4350] focus:ring-2 focus:ring-[#6C7A99]">
//             <SelectValue placeholder="Select Category" />
//           </SelectTrigger>
//           <SelectContent className="bg-[#3d4350] text-white rounded-lg shadow-lg">
//             {categories.map(({ value }) => (
//               <SelectItem
//                 key={value}
//                 value={value}
//                 className="hover:bg-[#50576b] cursor-pointer text-base px-4 py-2"
//               >
//                 {value}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </section>
//     </>
//   );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Categories({ active, setActive }) {
  const categories = [
    {
      value: "Corporate Uniforms",
      display: "CORPORATE UNIFORMS",
      iconSrc: "/icon1.png",
    },
    {
      value: "Industrial Safety",
      display: "INDUSTRIAL SAFETY",
      iconSrc: "/icon2.png",
    },
    {
      value: "Sustainables",
      display: "SUSTAINABLES",
      iconSrc: "/icon3.png",
    },
    {
      value: "Sportswear",
      display: "SPORTSWEAR",
      iconSrc: "/icon4.png",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-open dropdown on mobile when user comes from footer
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("collection");
      if (
        section &&
        window.innerWidth < 768 &&
        section.getBoundingClientRect().top < 100
      ) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <section
        id="collection-desktop"
        className="md:grid h-[200px] grid-cols-4 bg-[#4A505F] text-white px-4 md:px-12 lg:px-20 xl:px-32 hidden"
      >
        {categories.map(({ value, display, iconSrc }, index) => (
          <button
            key={value}
            onClick={() => setActive(index)}
            className={`
              flex flex-col items-center justify-center
              h-[200px] w-full px-2
              transition-colors
              ${active === index ? "bg-[#323741]" : "hover:bg-[#3d4350]"}
            `}
          >
            <Image
              src={iconSrc}
              alt={value}
              width={190}
              height={190}
              className="object-contain mb-2"
            />
            <span className="font-extrabold text-sm text-center leading-tight">
              {display}
            </span>
          </button>
        ))}
      </section>

      {/* Mobile */}
      <section
        id="collection-mobile"
        className="block md:hidden bg-[#4A505F] text-white mt-6 p-4"
      >
        <h2 className="text-lg font-bold mb-3">Select a Category</h2>
        
        {/* Custom dropdown implementation */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="w-full bg-[#323741] border border-[#5A5F70] text-white rounded-lg py-3 text-lg font-semibold hover:bg-[#3d4350] focus:ring-2 focus:ring-[#6C7A99] flex justify-between items-center px-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{categories[active].display}</span>
            <ChevronDown 
              className={`h-5 w-5 text-white flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-[#3d4350] text-white rounded-lg shadow-lg border border-[#5A5F70]">
              {categories.map(({ value, display }, index) => (
                <button
                  key={value}
                  className={`w-full text-left hover:bg-[#50576b] cursor-pointer text-base px-4 py-2 focus:bg-[#50576b] ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${
                    index === categories.length - 1 ? 'rounded-b-lg' : ''
                  } ${
                    active === index ? 'bg-[#50576b]' : ''
                  }`}
                  onClick={() => {
                    setActive(index);
                    setIsOpen(false);
                  }}
                >
                  {display}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}