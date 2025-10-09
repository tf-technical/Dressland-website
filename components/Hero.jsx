"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import EnquiryModal from "./EnquiryModal";

export default function HeroSlider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      image: "/hero-background5.png",
      title: "INDUSTRIAL SAFETY",
      subtitle:
        "Premium safety wear engineered for durability and maximum protection in tough work environments.",
    },
    {
      image: "/hero-background1.png",
      title: "SPORTSWEAR",
      subtitle:
        "High-performance sportswear designed for flexibility, comfort, and team identity.",
      customClass: "lg:!mr-3",
    },
    {
      image: "/hero-background2.png",
      title: "CORPORATE UNIFORMS",
      subtitle:
        "Smart and professional uniforms tailored to enhance your corporate presence.",
    },
    {
      image: "/hero-background3.png",
      title: "SUSTAINABLE WEAR",
      subtitle:
        "Eco-friendly apparel crafted from sustainable materials without compromising on style.",
    },
  ];

  return (
    <div className="px-8 relative w-full h-[60vh] sm:h-[100dvh] bg-[#dfd4c7] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 7000 }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full w-full pt-6 sm:pt-8 md:pt-12 px-4 md:px-8 lg:px-24">

              {/* Image Content - Top on mobile */}
              <div
                className={`relative w-full h-64 sm:h-72 md:w-1/2 md:h-full flex justify-center md:justify-end order-1 md:order-2 ${slide.customClass || ""}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain md:object-right transition-transform duration-500"
                  priority
                />
              </div>

              {/* Text Content - Below image on mobile */}
              <div className="z-20 text-center md:text-left w-full md:max-w-lg mt-4 sm:mt-6 md:mt-0 order-2 md:order-1">
                <h2 className="text-white text-sm sm:text-lg md:text-xl font-medium mb-3 sm:mb-4 drop-shadow-md">
                  {slide.subtitle}
                </h2>

                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-md mb-4 sm:mb-6 leading-tight">
                  {slide.title}
                </h1>

                <EnquiryModal
                  trigger={
                    <button className="px-5 py-3 bg-[#f0f0f0d6] text-[#2B2961] text-sm sm:text-base font-semibold hover:bg-[#e0e0e0] transition rounded">
                      ENQUIRE NOW
                    </button>
                  }
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-2 sm:left-6 flex items-center z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
          className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition"
        >
          <FiChevronLeft size={28} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 sm:right-6 flex items-center z-10">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
          className="text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition"
        >
          <FiChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
