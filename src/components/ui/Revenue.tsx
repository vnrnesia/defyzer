"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Ortalama ROAS", value: 6.4, suffix: "x" },
  { label: "Dönüşüm Artışı", value: 172, suffix: "%" },
  { label: "Reklam Maliyeti Düşüşü", value: 32, suffix: "%" },
  { label: "Yıllık Yönetilen Bütçe", value: 1.2, suffix: "M$" },
];

function useCountUp(target: number, start: boolean) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const rounded = useTransform(springValue, (latest) =>
    target >= 10 ? Math.round(latest) : latest.toFixed(1)
  );

  useEffect(() => {
    if (start) motionValue.set(target);
  }, [start, motionValue, target]);

  return rounded;
}

export default function RoasResultSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
            Müşterilerimizin Elde Ettiği Sonuçlar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veri odaklı optimizasyonla ROAS ve kârlılığı sürdürülebilir şekilde artırıyoruz.
          </p>
        </div>

        {/* İstatistikler */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          {stats.map((stat, i) => {
            const animatedValue = useCountUp(stat.value, inView);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="p-6 rounded-xl bg-card/50 border border-border shadow-sm"
              >
                <motion.div className="text-4xl font-bold text-green-500">
                  <motion.span>{animatedValue}</motion.span>
                  {stat.suffix}
                </motion.div>

                <p className="text-sm mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full transition">
            Aynı Sonuçları Siz de Alın
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}
