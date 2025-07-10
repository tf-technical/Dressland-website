"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import EnquiryModal from "./EnquiryModal";

export default function HeroSlider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      image: "/hero-background.jpg",
      title: (
        <>
          INDUSTRIAL
          <br />
          SAFETY
        </>
      ),
      subtitle:
        "Safety wear with performance and style for demanding work environments.",
    },
    {
      image: "/hero-background.jpg",
      title: "SPORTSWEAR",
      subtitle:
        "Dynamic sportswear that empowers your team spirit and comfort.",
    },
    {
      image: "/hero-background.jpg",
      title: "UNIFORMS",
      subtitle:
        "Tailored uniforms that reflect your identity with style and precision.",
    },
  ];

  return (
    <div className="relative w-full h-[50vh] sm:h-[100dvh] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={
                  typeof slide.title === "string" ? slide.title : "Hero Slide"
                }
                fill
                className="object-cover object-center"
                priority
              />

              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
                <div className="text-center max-w-[1000px]">
                  {/* Subtitle */}
                  <h2
                    className="
                      text-white
                      text-xs
                      sm:text-lg
                      md:text-2xl
                      lg:text-3xl
                      font-medium
                      mb-2
                      sm:mb-4
                      drop-shadow-md
                    "
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Title */}
                  <h1
                    className="
                      text-white
                      text-2xl
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                      font-bold
                      drop-shadow-md
                      mb-4
                      sm:mb-6
                      leading-tight
                      sm:leading-snug
                    "
                  >
                    {slide.title}
                  </h1>

                  <EnquiryModal
                    trigger={
                      <button
                        className="
                          px-4
                          py-2
                          sm:px-6
                          sm:py-3
                          bg-[#f0f0f0d6]
                          text-[#2B2961]
                          text-xs
                          sm:text-base
                          font-semibold
                          hover:bg-[#e0e0e0]
                          transition
                          rounded
                        "
                      >
                        ENQUIRE NOW
                      </button>
                    }
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
          className="
            text-white
            text-xs
            sm:text-sm
            md:text-base
            font-semibold
            underline
            hover:text-gray-300
            transition
          "
        >
          PREV
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute inset-y-0 right-0 flex items-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
          className="
            text-white
            text-xs
            sm:text-sm
            md:text-base
            font-semibold
            underline
            hover:text-gray-300
            transition
          "
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
