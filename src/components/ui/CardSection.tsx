"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Newspaper } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── WHY US Content (English) ──────────────────────────────────────────────

const cards = [
  {
    id: 1,
    image: "/whyus/1.webp",
    smallTitle: "Strategy",
    title: "Everything Begins With Strategy and Ends With Growth.",
    subtext:
      "We turn growth into a systematic process through data-driven planning and analysis.",
    items: [
      "Goal-oriented strategic roadmaps",
      "Data-driven decision-making",
    ],
  },
  {
    id: 2,
    image: "/whyus/2.webp",
    smallTitle: "Technology",
    title: "Modern Technology for Maximum Performance.",
    subtext:
      "We build fast and reliable web experiences using React, Next.js, and Webflow.",
    items: [
      "Fast, secure, and SEO-friendly infrastructure",
      "Next-gen UI and seamless user experience",
    ],
  },
  {
    id: 3,
    image: "/whyus/3.webp",
    smallTitle: "Performance",
    title: "Every Click Matters.",
    subtext:
      "From campaigns to automation, we strengthen every touchpoint to boost ROI.",
    items: [
      "ROI-optimized advertising management",
      "Refined customer conversion processes",
    ],
  },
  {
    id: 4,
    image: "/whyus/4.webp",
    smallTitle: "Creativity",
    title: "Simple Ideas Create Big Impact.",
    subtext:
      "We tell your brand’s story through a clean and effective visual strategy.",
    items: [
      "Creative & minimal design approach",
      "Content that reflects your brand value",
    ],
  },
  {
    id: 5,
    image: "/whyus/5.webp",
    smallTitle: "Partnership",
    title: "More Than an Agency — We Are Your Growth Partner.",
    subtext:
      "Defyzer builds long-term, trust-based partnerships focused on sustainable growth.",
    items: [
      "Transparent communication and regular reporting",
      "A long-term, growth-driven mindset",
    ],
  },
];

// ─── Component ───────────────────────────────────────────────────────────

export default function CardSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card) => {
      if (!card) return;
      const content = card.querySelector(".content") as HTMLElement;
      if (!content) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(content, {
        scale: 0.7,
        opacity: 0,
        transformOrigin: "center center",
        ease: "none",
        force3D: true,
      });

      triggers.push(tl.scrollTrigger!);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const commonColor =
    "bg-[url('/backgrounds/cards_bg2.webp')] bg-cover bg-center";

  return (
    <div>
      {/* TOP SECTION TITLE */}
      <div className="mx-auto mb-14 max-w-xl text-center">
        <div className="gap-2 border-1 inline-flex p-1 px-3 rounded-full mb-4">
          <Award /> Why Us?
        </div>

        <h2 className="from-primary mb-3 bg-gradient-to-r to-green-500 bg-clip-text text-5xl md:text-6xl font-bold text-transparent leading-[1.15]">
          Why Brands Choose Us
        </h2>

        <p className="text-muted-foreground text-sm">
          A clear view of what makes our approach effective.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="cards flex flex-col gap-20 md:px-6 pb-26">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className={`
              card${card.id}
              relative rounded-2xl shadow-xl ${commonColor}
              h-auto lg:h-[65vh]
              w-full lg:max-w-7xl mx-auto
              sticky top-[15vh]
              transform-gpu will-change-transform
            `}
          >
            <div
              className="content h-full w-full rounded-2xl p-6 lg:p-10 
                          flex flex-col lg:flex-row gap-10 lg:gap-14"
            >
              {/* LEFT IMAGE */}
              <div className="left w-full lg:w-1/2 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.smallTitle}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="right w-full lg:w-1/2 flex flex-col justify-center text-black lg:pl-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime-200"></div>
                  <p className="text-lime-200 font-medium">{card.smallTitle}</p>
                </div>

                <h2 className="text-2xl lg:text-4xl text-gray-100 font-bold mt-3 leading-snug">
                  {card.title}
                </h2>

                <p className="text-gray-300 text-base lg:text-lg mt-4 leading-relaxed">
                  {card.subtext}
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  {card.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center text-white justify-center">
                        <span className="text-md lg:text-lg">✔</span>
                      </div>
                      <p className="text-gray-300 text-base lg:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
