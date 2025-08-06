"use client";

import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Categories({ active, setActive }) {
  const categories = [
    { value:     "Corporate Uniforms", display: <>CORPORATE <br /> UNIFORMS</>, iconSrc: "/icon1.png" },
    { value: "Industrial Safety", display: "INDUSTRIAL SAFETY", iconSrc: "/icon2.png" },
    { value: "Sustainables", display: "SUSTAINABLES", iconSrc: "/icon3.png" },
    { value: "Sportswear", display: "SPORTSWEAR", iconSrc: "/icon4.png" },
  ];

  return (
    <>
      {/* Desktop */}
      <section
        id="collection"
        className="md:grid h-[250px] grid-cols-4 bg-[#4A505F] text-white px-4 md:px-12 lg:px-20 xl:px-32 hidden"
      >
        {categories.map(({ value, display, iconSrc }, index) => (
          <button
            key={value}
            onClick={() => setActive(index)}
            className={`
              flex flex-col items-center justify-center gap-3 py-10 h-[250px]
              transition-colors
              ${active === index ? "bg-[#323741]" : "hover:bg-[#3d4350]"}
            `}
          >
            <Image src={iconSrc} alt={value} width={200} height={200} />
            <span className="font-extrabold text-2xl tracking-wide text-center">
              {display}
            </span>
          </button>
        ))}
      </section>

      {/* Mobile */}
      <section className="block md:hidden bg-[#4A505F] text-white mt-6 p-4">
        <h2 className="text-lg font-bold mb-3">Select a Category</h2>
        <Select
          defaultValue={categories[active].value}
          onValueChange={(value) => {
            const index = categories.findIndex((c) => c.value === value);
            setActive(index);
          }}
        >
          <SelectTrigger className="w-full bg-[#323741] border border-[#5A5F70] text-white rounded-lg py-3 text-lg font-semibold hover:bg-[#3d4350] focus:ring-2 focus:ring-[#6C7A99]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-[#3d4350] text-white rounded-lg shadow-lg">
            {categories.map(({ value }) => (
              <SelectItem
                key={value}
                value={value}
                className="hover:bg-[#50576b] cursor-pointer text-base px-4 py-2"
              >
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </section>
    </>
  );
}
