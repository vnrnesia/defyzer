import React from "react";
import { InteractiveHoverButton } from "./HoverButton";
import HeroCaseStudies from "./ui/HeroCaseStudies";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="pt-36">
        <HeroCaseStudies />
        <h3 className=" w-1/2 text-8xl font-extrabold text-gray-900   ">
          Lorem ipsum dolor,
          <p className="text-[#87e64b]"> consectetur</p>
        </h3>
      </div>

      <div className="pt-6 flex gap-4 ">
        <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
         <InteractiveHoverButton>Explore Projects</InteractiveHoverButton>
      </div>
    </section>
  );
};

export default HeroSection;
