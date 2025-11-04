import { ArrowRight } from "lucide-react";
import { AnimatedShinyText } from "./animated-shiny-text";

export default function HeroCaseStudies() {
  return (
    <div className="rounded-xl px-3 py-1 inline-flex items-center justify-center bg-gray-100">
      <a href="">
        <AnimatedShinyText className="text-xl font-bold flex items-center gap-2 whitespace-nowrap group">
          BankBooker raise $12.7M
          <div className="h-px w-3 bg-gray-900 opacity-50" />
          <span className="inline-flex items-center gap-1 rounded-full transition-transform duration-300 group-hover:translate-x-1">
            View Case
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </AnimatedShinyText>
      </a>
    </div>
  );
}
