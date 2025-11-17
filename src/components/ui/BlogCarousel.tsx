"use client";

import React, { useRef, useState, useEffect } from "react";
import { BlogCarousel } from "./blog-carousel";
import { Newspaper } from "lucide-react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { InteractiveHoverButton } from "./HoverButton";

export const BlogSection = () => {
  const blogs = [
    {
      src: "/images/blog1.jpg",
      title: "lorem3",
      readTime: "3 min read",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
      src: "/images/blog2.jpg",
      title: "lorem3",
      readTime: "5 min read",
      description:
        "Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.",
    },
    {
      src: "/images/blog3.jpg",
      title: "lorem3",
      readTime: "8 min read",
      description:
        "Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollLeft = () =>
    carouselRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    carouselRef.current?.scrollBy({ left: 400, behavior: "smooth" });

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  return (
    <section className="w-full  text-white py-20 D ">
      <div className="mx-auto flex flex-col md:flex-row md:items-start md:gap-20 re max-w-7xl">
        {/* SOL TARAF */}
        <div className="md:w-[400px] mb-10 md:mb-0">
        
          <h2 className="text-4xl md:text-5xl text-black font-semibold mb-6 leading-tight">
            Lorem, ipsum dolor.
          </h2>
          <InteractiveHoverButton className="!bg-green-500 !text-black  !over:!bg-lime-500">
            Explore
          </InteractiveHoverButton>

          {/* Navigasyon butonları */}
          <div className="flex justify-start gap-3 mt-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-transform hover:scale-105 hover:bg-green-500 hover:text-black disabled:opacity-30"
            >
              <IconArrowNarrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center transition-transform hover:scale-105 hover:bg-green-500 hover:text-black disabled:opacity-30"
            >
              <IconArrowNarrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {carouselRef && (
          <BlogCarousel
            blogs={blogs}
            carouselRef={carouselRef as React.RefObject<HTMLDivElement>}
            onScroll={checkScrollability}
          />
        )}
      </div>
    </section>
  );
};
