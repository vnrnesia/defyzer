"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card) => {
      if (!card) return;
      const cardInner = card.querySelector(".content") as HTMLElement;
      if (!cardInner) return;

      const rotation = gsap.utils.random(-7, 7, true);

      // Başlangıç durumları
      gsap.set(cardInner, { scale: 1, rotation });

      // Scroll'a bağlı scale ve rotation animasyonu
      ScrollTrigger.create({
        trigger: card,
        start: "top 100%",
        end: "top 25%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(cardInner, {
            scale: gsap.utils.interpolate(1.1, 0.9, progress),
            rotation,
            overwrite: false,
          });
        },
      });

      // Sonsuz "floating" animasyonu (yavaş yukarı-aşağı)
      gsap.to(cardInner, {
        y: "+=5",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: gsap.utils.random(1, 2),
        overwrite: false,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const cards = [
    { id: 1, title: "Card One", color: "bg-red-500" },
    { id: 2, title: "Card Two", color: "bg-green-500" },
    { id: 3, title: "Card Three", color: "bg-blue-500" },
  ];

  return (
    <div className="cards flex flex-col gap-10 px-6 py-20">
      {cards.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`card relative rounded-2xl shadow-xl ${card.color}`}
        >
          <div className="content flex h-full w-full items-center justify-center text-5xl font-bold text-white rounded-2xl">
            {card.title}
          </div>
        </div>
      ))}
    </div>
  );
}
