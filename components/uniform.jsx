"use client";

import Image from "next/image";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function UniformsSection({ activeCategory }) {
  const [activeCard, setActiveCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const sections = {
    "Corporate Uniforms": [
      {
        title: "Blazers",
        img: "/blazers.jpg",
        info: ["Custom‑fit, Durable", "Tailored, Comfortable", "GET A QUOTE"],
      },
      {
        title: "Shirts",
        img: "/shirt.jpg",
        info: ["Elegant Styles", "Perfect Fit", "GET A QUOTE"],
      },
      {
        title: "Trousers",
        img: "/Trousers.webp",
        info: ["Formal Look", "Long-Lasting", "GET A QUOTE"],
      },
      {
        title: "Polo T-Shirts",
        img: "/polo.jpg",
        info: ["Stylish Casual", "Breathable Fabric", "GET A QUOTE"],
      },
      {
        title: "Jeans",
        img: "/jeans.jpg",
        info: ["Stretchable Fit", "Everyday Wear", "GET A QUOTE"],
      },
    ],
    "Industrial Safety": [
      {
        title: "F.R. Suit",
        img: "/frboiler_suits.jpg",
        info: ["Flame Resistant", "Safe & Comfortable", "GET A QUOTE"],
      },
      {
        title: "Aluminised Fire Proximity Suit",
        img: "/aluminised-fire-proximity-suits.jpg",
        info: ["Heat Protection", "Reflective Layer", "GET A QUOTE"],
      },
      {
        title: "Helmets",
        img: "/helmet.jpg",
        info: ["Impact Resistant", "Lightweight Design", "GET A QUOTE"],
      },
      {
        title: "Safety Shoes",
        img: "/safety_shooes.jpg",
        info: ["Anti-Slip Sole", "Toe Protection", "GET A QUOTE"],
      },
      {
        title: "Safety Eyewear",
        img: "/eye_wear.webp",
        info: ["Scratch Resistant", "UV Protection", "GET A QUOTE"],
      },
      {
        title: "Safety Jacket",
        img: "/safety_jackets.jpg",
        info: ["High Visibility", "Weather Resistant", "GET A QUOTE"],
      },
    ],
    Sportswear: [
      {
        title: "Dryfit T-Shirts",
        img: "/Dryfit T-Shirts1.jpg",
        info: ["Moisture Wicking", "Quick Dry", "GET A QUOTE"],
      },
      {
        title: "Sweatshirts",
        img: "/sweatshirt_sportwear.jpg",
        info: ["Warm & Soft", "Athletic Fit", "GET A QUOTE"],
      },
      {
        title: "Jackets",
        img: "/jackets.jpg",
        info: ["Windproof", "Sporty Design", "GET A QUOTE"],
      },
      {
        title: "Track Pants",
        img: "/track_pants.webp",
        info: ["Stretch Fit", "Breathable Fabric", "GET A QUOTE"],
      },
      {
        title: "Caps",
        img: "/caps.jpg",
        info: ["Adjustable Fit", "Sun Protection", "GET A QUOTE"],
      },
    ],
    Sustainables: [
      {
        title: " Organic cotton mens T-Shirts",
        img: "/Organic cotton mens T-Shirts.webp",
        info: ["Eco Friendly", "Modern Fit", "GET A QUOTE"],
      },
      {
        title: "Organic Cotton T-Shirts",
        img: "/Organic _cottontshirts.jpg",
        info: ["Chemical-Free", "Natural Comfort", "GET A QUOTE"],
      },
      {
        title: "Sweatshirts",
        img: "/sweatshirts.jpg",
        info: ["Recycled Materials", "Sustainable Style", "GET A QUOTE"],
      },
      {
        title: "Mens Polo T-shirt",
        img: "/sustainables_polo.jpg",
        info: ["Classic Fit", "Breathable Fabric", "GET A QUOTE"],
      },
      {
        title: "Mens Round Neck T-shirt",
        img: "/mens_roundneck_tshirt.webp",
        info: ["Soft Cotton Blend", "Everyday Comfort", "GET A QUOTE"],
      },
      {
        title: "Hoodies",
        img: "/hoodie.jpg",
        info: ["Warm & Cozy", "Perfect for All Seasons", "GET A QUOTE"],
      },
    ],
  };

  const cards = sections[activeCategory] || [];

  return (
    <section
      id={activeCategory.replace(/\s+/g, '-')}
      className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-20"
    >
      {/* Left-aligned heading and subheading */}
      <div className="text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#28275b]">
          {activeCategory}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          {activeCategory === "Corporate Uniforms"
            ? "We specialize in creating custom corporate uniforms tailored to your exact needs and preferences."
            : activeCategory === "Industrial Safety"
            ? "Explore our industrial safety collection designed for quality and style."
            : activeCategory === "Sportswear"
            ? "Explore our sportswear collection designed for quality and style."
            : activeCategory === "Sustainables"
            ? "Explore our sustainables collection designed for quality and style."
            : `Explore our ${activeCategory.toLowerCase()} collection designed for quality and style.`}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
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

                {/* Left-aligned card info */}
                <div
                  className={`absolute bottom-0 ${
                    showOverlay ? "translate-y-0" : "translate-y-[90%]"
                  } transition-all duration-150 left-0 w-full p-4 bg-[#28275b] text-white text-sm flex flex-col items-start gap-1`}
                >
                  {card.info.slice(0, -1).map((line) => (
                    <span key={line} className="text-left">
                      {line}
                    </span>
                  ))}
                  <EnquiryModal
                    trigger={
                      <button
                        className="underline font-medium text-white text-left"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {card.info.at(-1)}
                      </button>
                    }
                  />
                </div>
              </div>

              {/* Left-aligned card title and category */}
              <div className="mt-6 text-left">
                <h3 className="text-xl font-extrabold text-[#28275b]">
                  {card.title}
                </h3>
                <span className="text-[#28275b]/70 tracking-wide">
                  {activeCategory}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-left mt-10">
        <EnquiryModal
          open={enquiryModalOpen}
          onOpenChange={setEnquiryModalOpen}
          trigger={
            <button className="px-12 py-4 bg-[#28275b] text-white text-lg font-semibold hover:opacity-90">
              ENQUIRE NOW
            </button>
          }
        />
      </div>

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