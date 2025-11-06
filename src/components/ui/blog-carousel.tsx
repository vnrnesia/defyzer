import React, { RefObject } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pointer } from "./pointer";

interface Blog {
  src: string;
  title: string;
  readTime: string;
  description: string;
}

interface BlogCarouselProps {
  blogs: Blog[];
  carouselRef: RefObject<HTMLDivElement>;
  onScroll: () => void;
}

export const BlogCarousel = ({ blogs, carouselRef, onScroll }: BlogCarouselProps) => {
  return (
    <div className="relative w-full">
      {/* SCROLL ALANI */}
      <div
        ref={carouselRef}
        onScroll={onScroll}
        className="
          flex gap-8 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory
          max-w-2xl 2xl:max-w-4xl
          scrollbar-hide
          [scrollbar-width:none]
          [-ms-overflow-style:none]
        "
      >
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex-shrink-0 w-[20rem] md:w-[28rem] snap-start relative group"
          >
            {/* Blog kartı */}
            <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white group">
              <Image
                src={blog.src}
                alt={blog.title}
                width={600}
                height={400}
                className="object-cover w-full h-56 md:h-64 transition-transform duration-500 group-hover:scale-105"
              />
              {/* Özel Pointer */}
              <Pointer text="Read More" textColor="text-lime-400" />
            </div>

            {/* Metin alanı */}
            <div>
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">• {blog.readTime}</p>
              </div>
              <h3 className="text-xl text-black md:text-2xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {blog.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
