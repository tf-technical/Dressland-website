"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "@/components/Categories";
import UniformsSection from "@/components/uniform";
import CustomTShirtSection from "@/components/CustomTShirtSection";
import OurStorySection from "@/components/OurStory";
import WhyChooseSection from "@/components/whychoose_us";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [active, setActive] = useState(0);

  const categories = [
    "Corporate Uniforms",
    "Industrial Safety",
    "Sportswear",
    "Sustainables",
  ];

  return (
    <>
      <Header />
      <Hero />
      <Categories active={active} setActive={setActive} />
      <UniformsSection activeCategory={categories[active]} />
      <CustomTShirtSection />
      <OurStorySection />
      <WhyChooseSection/>
      <TestimonialSection />
      <Footer setActiveCategoryIndex={setActive} />
    </>
  );
}