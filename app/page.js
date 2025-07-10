
"use client" 
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "@/components/Categories";
import UniformsSection from "@/components/uniform";
import CustomTShirtSection from "@/components/CustomTShirtSection";
import OurStorySection from "@/components/OurStory";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [active, setActive] = useState(0);

  const categories = [
    "Uniforms",
    "Industrial Safety",
    "Sustainables",
    "Sportswear",
  ];

  return (
    <>
      <Header />
      <Hero />
      <Categories active={active} setActive={setActive} />
      <UniformsSection activeCategory={categories[active]} />
      <CustomTShirtSection />
      <OurStorySection />
      <TestimonialSection />
      <Footer />
    </>
  );
}
