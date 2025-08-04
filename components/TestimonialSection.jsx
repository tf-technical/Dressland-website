"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    title: "HR Manager, ABC Corp",
    content:
      "Dressland has been our go-to for custom uniforms. The quality, fit, and service are unmatched.",
    image: "https://ui-avatars.com/api/?name=Amit+Sharma",
  },
  {
    name: "Pooja Desai",
    title: "Founder, FitnessPro",
    content:
      "Their sportswear line is both stylish and durable. We’ve been thrilled with their attention to detail.",
    image: "https://ui-avatars.com/api/?name=Pooja+Desai",
  },
  {
    name: "Ravi Kulkarni",
    title: "School Administrator",
    content:
      "Comfortable, neat uniforms that the kids love. Delivery was fast and hassle-free.",
    image: "https://ui-avatars.com/api/?name=Ravi+Kulkarni",
  },
  {
    name: "Nisha Patel",
    title: "Manager, LuxeSpa",
    content:
      "Our team feels professional and confident in Dressland’s uniforms. Highly recommended.",
    image: "https://ui-avatars.com/api/?name=Nisha+Patel",
  },
  {
    name: "Siddharth Mehta",
    title: "Principal, Green Valley School",
    content:
      "The kids love the fabric and fit. We’ve had an excellent experience with Dressland.",
    image: "https://ui-avatars.com/api/?name=Siddharth+Mehta",
  },
  {
    name: "Farah Khan",
    title: "Owner, Cafe Bliss",
    content:
      "The aprons and chef coats are stylish and easy to maintain. Great quality and value.",
    image: "https://ui-avatars.com/api/?name=Farah+Khan",
  },
];

export default function TestimonialSection() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-[#dac5ac] py-20 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#1c1c57] mb-4"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-black mb-12 max-w-2xl mx-auto"
        >
          Hear from our satisfied customers who trust Dressland for comfort,
          quality, and style.
        </motion.p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          autoplay={{ delay: 5000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="bg-white p-6 rounded-2xl h-full flex flex-col justify-between"
              >
                <div>
                  <div className="text-yellow-400 mb-2 text-sm">★★★★★</div>
                  <p className="text-gray-700 italic mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Below Cards */}
        <div className="custom-swiper-pagination mt-8 flex justify-center gap-3" />

        {/* Custom Bullet Styles */}
        <style jsx global>{`
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #c4c4c4;
            opacity: 1;
            margin: 0 5px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }

          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background-color: #007aff;
          }
        `}</style>
      </div>
    </section>
  );
}
