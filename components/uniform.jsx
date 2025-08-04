"use client";

import Image from "next/image";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function UniformsSection({ activeCategory }) {
  const [activeCard, setActiveCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const sections = {
    Uniforms: [
      {
        title: "Blazers",
        img: "/blazers.jpg",
        info: ["Custom‑fit, Durable", "Tailored, Comfortable", "GET A QUOTE"],
      },
      {
        title: "Shirts",
        img: "/shirts.jpg",
        info: ["Elegant Styles", "Perfect Fit", "GET A QUOTE"],
      },
      {
        title: "Trousers",
        img: "/Trousers.webp",
        info: ["Formal Look", "Long-Lasting", "GET A QUOTE"],
      },
      {
        title: "Polo T-Shirts",
        img: "/polo _tshirt.webp",
        info: ["Stylish Casual", "Breathable Fabric", "GET A QUOTE"],
      },
      {
        title: "Jeans",
        img: "/corporate_jeans.jpg",
        info: ["Stretchable Fit", "Everyday Wear", "GET A QUOTE"],
      },
    ],
    "Industrial Safety": [
      {
        title: "Boiler Suits",
        img: "/boiler_suits.jpg",
        info: ["Full Coverage", "Durable Material", "GET A QUOTE"],
      },
      {
        title: "F.R. Boiler Suits",
        img: "/frboiler_suits.jpg",
        info: ["Flame Resistant", "Safe & Comfortable", "GET A QUOTE"],
      },
      {
        title: "Shirts",
        img: "/industrial_shirts.jpg",
        info: ["Functional Fit", "Tough Fabric", "GET A QUOTE"],
      },
      {
        title: "Trousers",
        img: "/industrialunifrom_trousers.webp",
        info: ["Reinforced Stitching", "All-day Comfort", "GET A QUOTE"],
      },
    ],
    Sustainables: [
      {
        title: "T-Shirts",
        img: "/SustainableT.shirts.webp",
        info: ["Eco Friendly", "Modern Fit", "GET A QUOTE"],
      },
      {
        title: "Organic Cotton T-Shirts",
        img: "/Organic _cottontshirt.webp",
        info: ["Chemical-Free", "Natural Comfort", "GET A QUOTE"],
      },
      {
        title: "Sweatshirts",
        img: "/Sweatshirts.webp",
        info: ["Recycled Materials", "Sustainable Style", "GET A QUOTE"],
      },
    ],
    Sportswear: [
      {
        title: "Dryfit T-Shirts",
        img: "/dry fit shirt.webp",
        info: ["Moisture Wicking", "Quick Dry", "GET A QUOTE"],
      },
      {
        title: "Sweatshirts",
        img: "/sweatshirt.jpg",
        info: ["Warm & Soft", "Athletic Fit", "GET A QUOTE"],
      },
      {
        title: "Jackets",
        img: "/jackets.webp",
        info: ["Windproof", "Sporty Design", "GET A QUOTE"],
      },
      {
        title: "Track Pants",
        img: "/track_pants.jpg",
        info: ["Stretch Fit", "Breathable Fabric", "GET A QUOTE"],
      },
      {
        title: "Caps",
        img: "/caps.jpg",
        info: ["Adjustable Fit", "Sun Protection", "GET A QUOTE"],
      },
    ],
  };

  const cards = sections[activeCategory] || [];

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#28275b]">
        {activeCategory}
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
        {activeCategory === "Uniforms"
          ? "We specialize in creating custom uniforms tailored to your exact needs and preferences."
          : `Explore our ${activeCategory.toLowerCase()} collection designed for quality and style.`}
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 place-items-center">
        {cards.map((card, index) => {
          const cardId = `${activeCategory}-${index}`;
          const showOverlay = hoverCard === cardId || activeCard === cardId;

          return (
            <div
              key={cardId}
              className="w-40 sm:w-44 md:w-48 lg:w-56 cursor-pointer group relative"
              onMouseEnter={() => setHoverCard(cardId)}
              onMouseLeave={() => setHoverCard(null)}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setActiveCard(cardId);
                  setTimeout(() => {
                    setActiveCard(null);
                  }, 400);
                }
              }}
            >
              <div className="relative w-full aspect-[3/4] bg-[#e7ecf6] overflow-hidden group">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className={`object-cover object-top transition-opacity duration-150 ${
                    showOverlay ? "opacity-40" : "group-hover:opacity-80"
                  }`}
                  sizes="224px"
                />

                <div
                  className={`absolute bottom-0 ${
                    showOverlay ? "translate-y-0" : "translate-y-[90%]"
                  } transition-all duration-150 left-0 w-full p-4 bg-[#28275b] text-white text-sm flex flex-col items-center gap-1`}
                >
                  {card.info.slice(0, -1).map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                  <EnquiryModal
                    trigger={
                      <button
                        className="underline font-medium text-white"
                        onClick={(e) => e.stopPropagation()} // prevent parent click
                      >
                        {card.info.at(-1)}
                      </button>
                    }
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#28275b]">
                {card.title}
              </h3>
              <span className="text-[#28275b]/70 tracking-wide">
                {activeCategory}
              </span>
            </div>
          );
        })}
      </div>

      <EnquiryModal
        open={enquiryModalOpen}
        onOpenChange={setEnquiryModalOpen}
        trigger={
          <button className="mt-10 px-12 py-4 bg-[#28275b] text-white text-lg font-semibold hover:opacity-90">
            ENQUIRE NOW
          </button>
        }
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
