"use client";
import React from "react";
import { InteractiveHoverButton } from "./ui/HoverButton";
import { HeroParallax } from "../components/ui/HeroParallax";
import HeroCaseStudies from "./ui/HeroCaseStudies";
import CtaMain from "./ui/CtaMain";

const HeroSection = () => {
  const products = [
    { title: "AI Dashboard", link: "#", thumbnail: "/a.png" },
    { title: "Creative Studio", link: "#", thumbnail: "/a.png" },
    { title: "E-Commerce UI", link: "#", thumbnail: "/a.png" },
    { title: "Portfolio Site", link: "#", thumbnail: "/a.png" },
    { title: "3D Visualizer", link: "#", thumbnail: "/a.png" },
    { title: "Startup Landing", link: "#", thumbnail: "/a.png" },
    { title: "Mobile App", link: "#", thumbnail: "/a.png" },
    { title: "Design System", link: "#", thumbnail: "/a.png" },
    { title: "Analytics Tool", link: "#", thumbnail: "/a.png" },
    { title: "Motion UI", link: "#", thumbnail: "/a.png" },
    { title: "AI Tool", link: "#", thumbnail: "/a.png" },
    { title: "SaaS Platform", link: "#", thumbnail: "/a.png" },
    { title: "Creative Portfolio", link: "#", thumbnail: "/a.png" },
    { title: "Next.js Website", link: "#", thumbnail: "/a.png" },
    { title: "Web App", link: "#", thumbnail: "/a.png" },
  ];

  return (
    <section className="relative flex min-h-screen ">
      <div className="w-1/2 pt-36 flex-col justify-center   z-10">
        <HeroCaseStudies />
        <h1 className="text-7xl font-bold text-gray-900 leading-tight">
          Lorem ipsum dolor, <br/>
          <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            consectetur
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-md">
          We build delightful digital experiences using cutting-edge technology
          and creative design.
        </p>

        <div className="pt-10 flex gap-4">
          <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
          <InteractiveHoverButton>Explore Projects</InteractiveHoverButton>
        </div>
        <div className="relative h-[1400px] mt-20">
          <div className="sticky top-60 bg-white text-5xl ">
            <CtaMain />
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
