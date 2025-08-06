"use client";

import Image from "next/image";

export default function WhyChooseSection() {
  const features = [
    {
      title: "Legacy You Can Trust",
      desc: "Over six decades of consistent excellence and quality standards.",
      icon: "🏆",
    },
    {
      title: "Thoughtful Craftsmanship",
      desc: "Clean lines, superior tailoring, and attention to every stitch.",
      icon: "🧵",
    },
    {
      title: "Comfort Meets Functionality",
      desc: "Breathable, stylish fabrics crafted to endure daily wear.",
      icon: "🧥",
    },
    {
      title: "Elevated Brand Expression",
      desc: "Helping organizations reflect identity through uniforms.",
      icon: "🎨",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-[#1c1c57] mb-10 uppercase">
        Why Choose Dressland?
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn opacity-0 animate-delay"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-[#1c1c57] mb-2">
              {item.title}
            </h4>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-delay:nth-child(1) {
          animation-delay: 0.1s;
        }
        .animate-delay:nth-child(2) {
          animation-delay: 0.2s;
        }
        .animate-delay:nth-child(3) {
          animation-delay: 0.3s;
        }
        .animate-delay:nth-child(4) {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
