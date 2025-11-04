"use client";

import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface HoverReverseLottieProps {
  animationData: any;
  className?: string;
  speed?: number; // animasyon hızı
}

export default function HoverReverseLottie({
  animationData,
  className,
  speed = 1,
}: HoverReverseLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Hover başlayınca ileri oynat
  const handleMouseEnter = () => {
    setIsHovered(true);
    lottieRef.current?.setDirection(1); // ileri
    lottieRef.current?.setSpeed(speed);
    lottieRef.current?.play();
  };

  // Hover bitince geri sar
  const handleMouseLeave = () => {
    setIsHovered(false);
    lottieRef.current?.setDirection(-1); // geri
    lottieRef.current?.setSpeed(speed);
    lottieRef.current?.play();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false} // otomatik loop olmasın
        autoplay={false} // sayfa açıldığında oynamasın
      />
    </div>
  );
}
