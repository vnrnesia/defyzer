import HeroSection from "@/components/HeroSection";
import { BentoDemo } from "@/components/ui/BentoGrid/BentoGrid";
import { BlogSection } from "@/components/ui/BlogCarousel";
import CardSection from "@/components/ui/CardSection";
import CtaSection from "@/components/ui/CtaSection";
import Faq3 from "@/components/ui/Faq";
import Revenue from "@/components/ui/Revenue";
import { Crown, Newspaper } from "lucide-react";

export default function Home() {
  return (
    <section className="max-w-sm md:max-w-[90%] 2xl:max-w-7xl  mx-auto">
      <HeroSection />
      <div className="pt-24">
       <div className="flex mx-auto justify-center pb-16">
         
       </div>
        <BentoDemo />
         
        <BlogSection/>
         
        <CardSection/>
        <Faq3/>
        <Revenue/>
        <CtaSection/>
      </div>
    </section>
  );
}
