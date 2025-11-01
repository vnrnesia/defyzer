import React from "react";
import { InteractiveHoverButton } from "./HoverButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <h3 className="pt-36 w-1/2 text-8xl font-extrabold text-gray-800   ">
        Lorem ipsum dolor,
      <p className="text-green-400">  consectetur</p>
   
      </h3>
         <div className="">
         <InteractiveHoverButton>Book a Call</InteractiveHoverButton>
      </div>
     
    </section>
  );
};

export default HeroSection;
