"use client";
import React from "react";
import { InteractiveHoverButton } from "./HoverButton";
import { HeroParallax } from "../components/ui/HeroParallax";

const HeroSection = () => {
  const products = [
    { title: "AI Dashboard", link: "#", thumbnail: "/ben.jpg" },
    { title: "Creative Studio", link: "#", thumbnail: "/ben.jpg" },
    { title: "E-Commerce UI", link: "#", thumbnail: "/ben.jpg" },
    { title: "Portfolio Site", link: "#", thumbnail: "/ben.jpg" },
    { title: "3D Visualizer", link: "#", thumbnail: "/ben.jpg" },
    { title: "Startup Landing", link: "#", thumbnail: "/ben.jpg" },
    { title: "Mobile App", link: "#", thumbnail: "/ben.jpg" },
    { title: "Design System", link: "#", thumbnail: "/ben.jpg" },
    { title: "Analytics Tool", link: "#", thumbnail: "/ben.jpg" },
    { title: "Motion UI", link: "#", thumbnail: "/ben.jpg" },
    { title: "AI Tool", link: "#", thumbnail: "/ben.jpg" },
    { title: "SaaS Platform", link: "#", thumbnail: "/ben.jpg" },
    { title: "Creative Portfolio", link: "#", thumbnail: "/ben.jpg" },
    { title: "Next.js Website", link: "#", thumbnail: "/ben.jpg" },
    { title: "Web App", link: "#", thumbnail: "/ben.jpg" },
  ];

  return (
    <section className="relative flex min-h-screen ">
      <div className="w-1/2 pt-44 flex-col justify-center   z-10">
        <h1 className="text-7xl font-bold text-gray-900 leading-tight">
          Lorem ipsum dolor, <span className="text-[#87e64b]">consectetur</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-md">
          We build delightful digital experiences using cutting-edge technology
          and creative design.
        </p>

        <div className="pt-10 flex gap-4">
          <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
          <InteractiveHoverButton>Explore Projects</InteractiveHoverButton>
        </div>
        <div className="relative h-[800px] mt-20">
          <div className="sticky top-60 bg-white text-5xl ">
            Başlık <br /> <p className="pt-4 text-2xl">Burası CTA veya Yazı kısmı olacak</p>
          </div>
        </div>
      </div>

      <div className="mt-26 rounded-xl right-0 top-0 w-1/2 bg-gray-100  ">
        <HeroParallax products={products} />
      </div>
    </section>
  );
};

export default HeroSection;
