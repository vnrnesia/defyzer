import HeroSection from "@/components/HeroSection";
import { BentoDemo } from "@/components/ui/BentoGrid/BentoGrid";
import { Crown } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-sm md:max-w-[90%] 2xl:max-w-7xl  mx-auto">
      <HeroSection />
      <div className="pt-24">
       <div className="flex mx-auto justify-center pb-16">
         <div className=" gap-2 border-1 inline-flex p-1 px-3 rounded-full">
          <Crown /> Our Services
        </div>
       </div>
        <BentoDemo />
      </div>
    </section>
  );
}
