"use client";

import Image from "next/image";
import EnquiryModal from "@/components/EnquiryModal";

export default function CustomTshirtSection() {
  return (
    <>
      <section
        id="new-trends"
        className="
          hidden md:flex
          w-full
          h-screen
          relative
          overflow-hidden
          flex-row
          items-center
          bg-[#dac5ac]
          px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
          py-12 md:py-0
        "
      >
        <div>
          <Image
            width={900}
            height={900}
            src="/a.png"
            alt="Background"
            className="absolute z-20 w-[80vw] max-w-[700px] right-[-1%] top-1/2 -translate-y-1/2"
          />
        </div>

        {/* "NEW TRENDS" Behind Person */}
        <h1
          className="
            absolute top-[5%] right-20
            text-[7rem]
            font-bold text-[#d1a679]
            opacity-60 z-10 leading-none select-none
          "
        >
          NEW TRENDS
        </h1>

        {/* Left Text Content */}
        <div className="w-1/2 z-30 text-left">
          <p className="text-3xl text-[#1c1c57] font-semibold mb-4">
            CUSTOMISED PRINTED
            <br /> T-SHIRTS
          </p>

          <div className="mb-6 space-y-2">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-snug whitespace-nowrap">
              WEAR YOUR STORY
            </h1>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-snug whitespace-nowrap">
              PRINT YOUR VIBE
            </h1>
          </div>

          <EnquiryModal
            trigger={
              <button className="mt-4 w-80 h-18 px-6 py-3 bg-[#1c1c57] text-2xl text-white font-semibold rounded-none">
                ENQUIRE NOW
              </button>
            }
          />
        </div>
      </section>

      {/* Mobile Section */}
      <section
        id="new-trends"
        className="
          block md:hidden
          w-full
          relative
          overflow-hidden
          bg-[#dac5ac]
          px-4
          py-12
          min-h-[320px]
        "
      >
        {/* "NEW TRENDS" behind text */}
        <h1
          className="
            absolute
            top-12
            right-4
            text-2xl
            font-bold
            text-[#d1a679]
            opacity-60
            z-0
            leading-none
            select-none
            pointer-events-none
          "
        >
          NEW TRENDS
        </h1>

        <div className="flex flex-row items-center justify-between gap-4 z-10 relative">
          {/* Left - Text content */}
          <div className="flex-1 text-left">
            <p className="text-xl text-[#1c1c57] font-semibold mb-3 whitespace-nowrap">
              CUSTOMISED 
              <br/>
              PRINTED T-SHIRTS
            </p>
            <h1 className="text-xl font-bold text-white leading-tight mb-2 whitespace-nowrap">
              WEAR YOUR STORY
            </h1>
            <h1 className="text-xl font-bold text-white leading-tight mb-6 whitespace-nowrap">
              PRINT YOUR VIBE
            </h1>

            <EnquiryModal
              trigger={
                <button className="
                  w-[180px]
                  sm:w-45
                  px-5
                  py-3
                  bg-[#1c1c57]
                  text-white
                  text-base
                  font-semibold
                  rounded-none
                ">
                  ENQUIRE NOW
                </button>
              }
            />
          </div>

          <div className="flex-shrink-0 w-55 relative -top-4 -left-14 h-40">
            <Image
              src="/a.png"
              width={1000}
              height={1000}
              alt="Custom T-shirt"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}