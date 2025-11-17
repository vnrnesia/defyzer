"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Defyzer WHY US Content ──────────────────────────────────────────────

const cards = [
  {
    id: 1,
    image: "/whyus/1.webp",
    smallTitle: "Strateji",
    title: "Stratejiyle Başlayan Her Şey, Büyümeyle Biter.",
    subtext:
      "Veriye dayalı planlama ve analizle büyümeyi sistematik hale getiriyoruz.",
    items: [
      "Hedef odaklı stratejik yol haritaları",
      "Veriye göre şekillenen karar alma süreci",
    ],
  },
  {
    id: 2,
    image: "/whyus/2.webp",
    smallTitle: "Teknoloji",
    title: "Modern Teknoloji, Maksimum Performans.",
    subtext:
      "React, Next.js ve Webflow altyapısıyla hızlı ve güvenilir web deneyimleri oluşturuyoruz.",
    items: [
      "Hızlı, güvenli ve SEO uyumlu altyapılar",
      "Yeni nesil arayüz ve kullanıcı deneyimi",
    ],
  },
  {
    id: 3,
    image: "/whyus/3.webp",
    smallTitle: "Performans",
    title: "Her Tıklama Önemlidir.",
    subtext:
      "Kampanyalardan otomasyonlara kadar her dokunuşta ROI’yi artırıyoruz.",
    items: [
      "ROI odaklı reklam yönetimi",
      "Optimize edilmiş müşteri dönüşüm süreçleri",
    ],
  },
  {
    id: 4,
    image: "/whyus/4.webp",
    smallTitle: "Yaratıcılık",
    title: "Basit Fikirler, Büyük Etki.",
    subtext:
      "Marka hikayenizi sade ama etkili bir görsel stratejiyle anlatıyoruz.",
    items: [
      "Creative & minimal tasarım anlayışı",
      "Marka değerini yansıtan içerik üretimi",
    ],
  },
  {
    id: 5,
    image: "/whyus/5.webp",
    smallTitle: "İş Ortaklığı",
    title: "Sadece Ajans Değil, İş Ortağıyız.",
    subtext: "Defyzer uzun vadeli, güvene dayalı iş ortaklıkları kurar.",
    items: [
      "Şeffaf iletişim ve düzenli raporlama",
      "Uzun vadeli büyüme odaklı yaklaşım",
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
    <div className="cards flex flex-col gap-20 md:px-6 py-40">
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
          <div className="content h-full w-full rounded-2xl p-6 lg:p-10 
                          flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* SOL TARAF — RESPONSIVE RESİM */}
            <div className="left w-full lg:w-1/2 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={card.image}
                alt={card.smallTitle}
                className="w-full h-full object-contain"
              />
            </div>

            {/* SAĞ TARAF */}
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
                    <p className="text-gray-300 text-base lg:text-lg">{item}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
