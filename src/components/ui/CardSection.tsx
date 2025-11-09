"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card) => {
      if (!card) return;
      const content = card.querySelector(".content") as HTMLElement;
      if (!content) return;

      // Her kart için scale & opacity scroll animasyonu
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
          markers: false,
        },
      });

      tl.to(content, {
        scale: 0.7,
        opacity: 0,
        ease: "none",
      });

      triggers.push(tl.scrollTrigger!);

      // Hafif yüzen (floating) hareket
      gsap.to(content, {
        y: "+=6",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: gsap.utils.random(1.5, 2.5),
      });
    });

    // Cleanup
    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const cards = [
    { id: 1, title: "Card One", color: "bg-red-500" },
    { id: 2, title: "Card Two", color: "bg-green-500" },
    { id: 3, title: "Card Three", color: "bg-blue-500" },
    { id: 4, title: "Card Four", color: "bg-purple-500" },
    { id: 5, title: "Card Five", color: "bg-orange-500" },
  ];

  return (
    <div className="cards flex flex-col gap-20 px-6 py-40">
      {cards.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          className={`card${card.id} relative rounded-2xl shadow-xl ${card.color} h-[60vh] w-full lg:w-[60vw] mx-auto sticky top-[15vh]`}
        >
          <div className="content flex h-full w-full items-center justify-center text-5xl font-bold text-white rounded-2xl">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
}
