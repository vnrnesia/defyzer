"use client";
import React from "react";
import { InteractiveHoverButton } from "./HoverButton";
import { HeroParallax } from "../components/ui/HeroParallax";
import HeroCaseStudies from "./ui/HeroCaseStudies";

const HeroSection = () => {
  const products = [
    { title: "AI Dashboard", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Creative Studio", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "E-Commerce UI", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Portfolio Site", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "3D Visualizer", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Startup Landing", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Mobile App", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Design System", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Analytics Tool", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Motion UI", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "AI Tool", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "SaaS Platform", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Creative Portfolio", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Next.js Website", link: "#", thumbnail: "/NavbarLogo.png" },
    { title: "Web App", link: "#", thumbnail: "/NavbarLogo.png" },
  ];

  return (
    <section className="relative flex min-h-screen ">
      <div className="w-1/2 pt-36 flex-col justify-center   z-10">
      <HeroCaseStudies/>
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
        <div className="relative h-[1400px] mt-20">
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
