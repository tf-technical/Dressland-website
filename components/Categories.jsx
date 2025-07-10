"use client";

import { useState } from "react";
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
    { name: "Uniforms", iconType: "image", iconSrc: "/icon1.png" },
    { name: "Industrial Safety", iconType: "image", iconSrc: "/icon2.png" },
    { name: "Sustainables", iconType: "image", iconSrc: "/icon3.png" },
    { name: "Sportswear", iconType: "image", iconSrc: "/icon4.png" },
  ];

  return (
    <>
      <section className=" md:grid h-[250px] grid-cols-4 bg-[#4A505F] text-white px-4 md:px-12 lg:px-20 xl:px-32 hidden ">
        {categories.map(({ name, iconType, Icon, iconSrc }, idx) => (
          <button
            key={name}
            onClick={() => setActive(idx)}
            className={`
            flex flex-col items-center justify-center gap-3 py-10 h-[250px]
            transition-colors
            ${active === idx ? "bg-[#323741]" : "hover:bg-[#3d4350]"}
          `}
          >
            {iconType === "image" ? (
              <Image src={iconSrc} alt={name} width={200} height={200} />
            ) : (
              <Icon size={48} />
            )}
            <span className="font-extrabold text-2xl tracking-wide">
              {name.toUpperCase()}
            </span>
          </button>
        ))}
      </section>
      <section className="block md:hidden bg-[#4A505F] text-white mt-6 p-4">
  <h2 className="text-lg font-bold mb-3">Select a Category</h2>
  <Select
    onValueChange={(value) => {
      const idx = categories.findIndex(cat => cat.name === value);
      if (idx !== -1) setActive(idx);
    }}
  >
    <SelectTrigger className="w-full bg-[#323741] border border-[#5A5F70] text-white rounded-lg py-3 text-lg font-semibold hover:bg-[#3d4350] focus:ring-2 focus:ring-[#6C7A99]">
      <SelectValue placeholder="Select Category" />
    </SelectTrigger>
    <SelectContent className="bg-[#3d4350] text-white rounded-lg shadow-lg">
      {categories.map(({ name }) => (
        <SelectItem
          key={name}
          value={name}
          className="hover:bg-[#50576b] cursor-pointer text-base px-4 py-2"
        >
          {name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</section>

    </>
  );
}
