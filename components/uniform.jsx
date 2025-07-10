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
        title: "SCHOOL",
        img: "/school.jpg",
        info: ["Custom‑fit, Durable", "Tailored, Comfortable", "GET A QUOTE"],
      },
      {
        title: "CORPORATE",
        img: "/cheerful-brunette-business-women-student-white-button-up-shirt-smiling-confident-cheerful (1).jpg",
        info: ["Elegant Styles", "Perfect Fit", "GET A QUOTE"],
      },
      {
        title: "HORECA",
        img: "/horeca.jpg",
        info: ["Chef Coats", "Aprons, Breathable", "GET A QUOTE"],
      },
      {
        title: "HOUSE KEEPING",
        img: "/housekeeping.jpg",
        info: ["Easy Maintenance", "Functional Design", "GET A QUOTE"],
      },
    ],
    "Industrial Safety": [
      {
        title: "SAFETY HELMETS",
        img: "/school.jpg",
        info: ["High Impact Resistance", "Comfortable Fit", "GET A QUOTE"],
      },
      {
        title: "SAFETY GLOVES",
        img: "/cheerful-brunette-business-women-student-white-button-up-shirt-smiling-confident-cheerful (1).jpg",
        info: ["Heat Resistant", "Durable Grip", "GET A QUOTE"],
      },
      {
        title: "SAFETY SHOES",
        img: "/horeca.jpg",
        info: ["Steel Toe", "Anti-Slip", "GET A QUOTE"],
      },
      {
        title: "REFLECTIVE JACKETS",
        img: "/housekeeping.jpg",
        info: ["High Visibility", "Breathable Fabric", "GET A QUOTE"],
      },
    ],
    Sustainables: [
      {
        title: "ORGANIC COTTON",
        img: "/school.jpg",
        info: ["Eco-Friendly", "Soft Texture", "GET A QUOTE"],
      },
      {
        title: "RECYCLED POLYESTER",
        img: "/cheerful-brunette-business-women-student-white-button-up-shirt-smiling-confident-cheerful (1).jpg",
        info: ["Sustainable", "Durable", "GET A QUOTE"],
      },
      {
        title: "BAMBOO FABRIC",
        img: "/horeca.jpg",
        info: ["Antibacterial", "Breathable", "GET A QUOTE"],
      },
      {
        title: "HEMP FABRIC",
        img: "/housekeeping.jpg",
        info: ["Strong Fibers", "Environment Friendly", "GET A QUOTE"],
      },
    ],
    Sportswear: [
      {
        title: "TRACKSUITS",
        img: "/school.jpg",
        info: ["Flexible Fabric", "Comfortable Fit", "GET A QUOTE"],
      },
      {
        title: "JERSEYS",
        img: "/cheerful-brunette-business-women-student-white-button-up-shirt-smiling-confident-cheerful (1).jpg",
        info: ["Breathable", "Vibrant Colors", "GET A QUOTE"],
      },
      {
        title: "SHORTS",
        img: "/horeca.jpg",
        info: ["Lightweight", "Quick Dry", "GET A QUOTE"],
      },
      {
        title: "SPORTS TEES",
        img: "/housekeeping.jpg",
        info: ["Moisture Wicking", "Soft Touch", "GET A QUOTE"],
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
                // Mobile tap behavior
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
                    showOverlay
                      ? "translate-y-0"
                      : "translate-y-[90%]"
                  } transition-all duration-150 left-0 w-full p-4 bg-[#28275b] text-white text-sm flex flex-col items-center gap-1`}
                >
                  {card.info.slice(0, -1).map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                  <button
                    className="underline font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEnquiryModalOpen(true);
                    }}
                  >
                    {card.info.at(-1)}
                  </button>
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

      {/* Enquire Now button below the cards */}
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
