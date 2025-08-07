"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Akhil Baheti",
    title: "Akhil Time Management Coach",
    content: `We always hear about Walk The Talk, but very few times we mean it. But, I know a person, Mr. Piyush Satra, who always talks about Uniforms, but maintains his own decorum in the same way. In every Meeting or Training he dressed up in such a way that, person must get impressed. Hence, I decided to do 121 with him to understand how he can help me in my dressing styles. I was amazed with his knowledge and get perfect guidance from him. Now, I look better in my Trainings and Workshops. I recommend Uniforms from Dressland i.e. Mr. Piyush Satra.`,
    image: "https://ui-avatars.com/api/?name=Akhil+Baheti",
  },
  {
    name: "Madhura Gune",
    title: "Nityam Dipakam Pharmaceuticals Pvt. Ltd.",
    content: `I am writing to express my utmost satisfaction and appreciation for the outstanding services provided by Dressland. The fabrics used are durable, comfortable, and maintain their integrity even after repeated wear and laundering.`,
    image: "https://ui-avatars.com/api/?name=Madhura+Gune",
  },
  {
    name: "Mahesh Patil",
    title: "Greensmith Technologies Pvt. Ltd.",
    content: `We at Greensmith Technologies Private Limited are extremely satisfied with the uniform services provided by Piyush Satra of Dressland. The quality of the uniforms is excellent and the delivery was timely. Piyush was very helpful and professional throughout the process.`,
    image: "https://ui-avatars.com/api/?name=Mahesh+Patil",
  },
  {
    name: "Padamsingh Dewal",
    title: "Kuber Packaging",
    content: `Piyush Satra provides uniforms according to requirements. Very recently we had ordered a blazer from him. We appreciate the quality of the material & quick delivery.`,
    image: "https://ui-avatars.com/api/?name=Padamsingh+Dewal",
  },
  {
    name: "Aakash Korgaonkar",
    title: "Ruggedian Fitness Hub",
    content: `He is a very prompt person when it comes to work. He has tremendously supported us during our Kolhapur Run event by giving a huge number of race t-shirts.`,
    image: "https://ui-avatars.com/api/?name=Aakash+Korgaonkar",
  },
];

export default function TestimonialSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const truncate = (text, limit = 2) => {
    const sentences = text.split(".");
    if (sentences.length <= limit + 1) return text;
    return sentences.slice(0, limit).join(".") + ".";
  };

  return (
    <section className="bg-[#dac5ac] py-20 px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto text-center">
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

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => {
            const isLong = testimonial.content.split(".").length > 3;
            return (
              <SwiperSlide key={idx}>
<motion.div className="bg-white p-6 rounded-2xl min-h-[280px] flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 italic">
                      "{isLong
                        ? truncate(testimonial.content)
                        : testimonial.content}"
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setSelectedTestimonial(testimonial)}
                        className="mt-4 text-blue-600 underline text-sm hover:text-blue-800"
                      >
                        Read More
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-4">
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
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Dots */}
        <div className="custom-swiper-pagination flex justify-center mt-8" />

        {/* Modal for full testimonial */}
        <AnimatePresence>
          {selectedTestimonial && (
            <motion.div
              className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
            >
              <motion.div
                className="bg-white max-w-xl w-full rounded-lg p-6 relative z-60"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
                  onClick={() => setSelectedTestimonial(null)}
                >
                  &times;
                </button>
                <p className="text-gray-700 mb-4">
                  "{selectedTestimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover w-12 h-12"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">
                      {selectedTestimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {selectedTestimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
