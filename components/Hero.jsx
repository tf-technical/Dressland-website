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
      image: "/hero-background5.png",
      title: "INDUSTRIAL SAFETY",
      subtitle:
        "Safety wear with performance and style for demanding work environments.",
    },
    {
      image: "/hero-background1.png",
      title: "SPORTSWEAR",
      subtitle:
        "Dynamic sportswear that empowers your team spirit and comfort.",
    },
    {
      image: "/hero-background2.png",
      title: "CORPORATE UNIFORMS",
      subtitle:
        "Tailored uniforms that reflect your identity with style and precision.",
    },
    {
      image: "/hero-background3.png",
      title: "SUSTAINABLE WEAR",
      subtitle:
        "Tailored uniforms that reflect your identity with style and precision.",
    },
  ];

  const getMobileImageClass = (title) => {
  if (title === "SPORTSWEAR")
    return "object-contain scale-[1.0] translate-x-4";
  if (title === "CORPORATE UNIFORMS")
    return "object-contain scale-[1.0] -translate-x-4";
  if (title === "SUSTAINABLE WEAR")
    return "object-contain scale-[1.0]";
  if (title === "INDUSTRIAL SAFETY")
    return "object-contain scale-[1.0]"; // Decreased from 1.5
  return "object-contain";
};


  const getDesktopImageClass = (title) => {
    if (title === "SPORTSWEAR")
      return "object-contain sm:scale-[1.0] sm:object-center sm:translate-x-16";
    if (title === "SUSTAINABLE WEAR")
      return "object-contain sm:scale-[1.0] sm:object-center";
    if (title === "CORPORATE UNIFORMS")
      return "object-contain sm:scale-[1.0] sm:object-center sm:translate-y-6";
    return "object-contain sm:scale-[1.1] sm:object-center";
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[100dvh] bg-[#dfd4c7] overflow-hidden">
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
        {slides.map((slide, index) => {
          const titleText = slide.title;

          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-[#dac5ac]">
                {/* Desktop Image */}
                <div className="hidden sm:block">
                  <Image
                    src={slide.image}
                    alt={titleText || "Hero Slide"}
                    fill
                    className={`${getDesktopImageClass(
                      titleText
                    )} transition-transform duration-500`}
                    priority
                  />
                </div>

                {/* Mobile Image */}
                <div className="block sm:hidden">
                  <Image
                    src={slide.image}
                    alt={titleText || "Hero Slide"}
                    fill
                    className={`${getMobileImageClass(
                      titleText
                    )} transition-transform duration-500`}
                    priority
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 z-20">
                  <div className="text-center max-w-[1000px]">
                    <h2
                      className="
                        text-white
                        text-[10px]
                        sm:text-sm
                        md:text-xl
                        lg:text-2xl
                        font-medium
                        mb-2
                        sm:mb-4
                        drop-shadow-md
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                      "
                    >
                      {slide.subtitle}
                    </h2>

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
                      {slide.title === "CORPORATE UNIFORMS" ? (
                        <>
                          CORPORATE <br className="block sm:hidden" /> UNIFORMS
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>

                    <EnquiryModal
                      trigger={
                        <button
                          className="px-4 py-2 sm:px-6 sm:py-3 bg-[#f0f0f0d6] text-[#2B2961] text-xs sm:text-base font-semibold hover:bg-[#e0e0e0] transition rounded"
                        >
                          ENQUIRE NOW
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Prev Button */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
          className="text-white text-xs sm:text-sm md:text-base font-semibold underline hover:text-gray-300 transition"
        >
          PREV
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute inset-y-0 right-0 flex items-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
          className="text-white text-xs sm:text-sm md:text-base font-semibold underline hover:text-gray-300 transition"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
