import HeroSection from "@/components/HeroSection";
import { BentoDemo } from "@/components/ui/BentoGrid/BentoGrid";

export default function Home() {
  return (
    <section className="max-w-sm md:max-w-[90%] 2xl:max-w-7xl  mx-auto">
      <HeroSection/>
      <BentoDemo />
    </section>
  );
}
