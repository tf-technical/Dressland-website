"use client";
import Image from "next/image";
import EnquiryModal from "./EnquiryModal";


export default function OurStorySection() {
  return (
    <section id="about-us" className="bg-white py-20 px-4 md:px-10 lg:px-20">

      {/* Centered Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1c1c57] uppercase tracking-wide">
          Our Story
        </h2>
      </div>

      {/* Content Grid */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Image - Left (smaller, no shadow) */}
        <div className="relative w-full h-[400px] md:h-[450px] rounded-lg overflow-hidden">
          <Image
            src="/ABOUT_US.jpg"
            alt="Our Story"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Text - Right (no card style) */}
        <div>
          <h4 className="text-[#c07c41] text-sm font-semibold tracking-widest mb-2 uppercase">
            About Us
          </h4>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#1c1c57] mb-6 leading-tight">
            Building a Legacy of Trust and Craftsmanship
          </h3>
          <p className="text-gray-700 mb-4 text-base leading-relaxed">
            Founded in 1965 by Mr. Chunilal Satra, Dressland set out with a bold vision:
            to transform uniforms into proud reflections of identity and craftsmanship.
            Today, under the leadership of his son, Mr. Piyush Satra, we continue to uphold
            that legacy, firmly rooted in Kolhapur’s oldest and most trusted uniform brand.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            We believe that uniforms should be more than garments—they should be
            experiences. With decades of expertise, we’ve perfected a harmonious blend of
            style, comfort.
          </p>

         <div className="mt-6">
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

        </div>
      </div>
    </section>
  );
}
