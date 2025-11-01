"use client";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";

type Props = {
  animationData: object;
  className?: string;
  triggerSecond?: number; // default: 0.5s
};

export default function HoverControlledLottie({
  animationData,
  className,
  triggerSecond = 0.5,
}: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [finished, setFinished] = useState(false);
  const stopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completeHandlerRef = useRef<(() => void) | null>(null);

  const getAnim = (): AnimationItem | null =>
    (lottieRef.current?.animationItem as AnimationItem | undefined) ?? null;

  useEffect(() => {
    getAnim()?.stop();
    return () => {
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
      const anim = getAnim();
      if (anim && completeHandlerRef.current) {
        anim.removeEventListener("complete", completeHandlerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = () => {
    if (finished) return;
    const anim = getAnim();
    if (!anim) return;

    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }
    if (completeHandlerRef.current) {
      anim.removeEventListener("complete", completeHandlerRef.current);
      completeHandlerRef.current = null;
    }

    const fps = anim.frameRate || 30;
    const stopFrame = Math.round(triggerSecond * fps);

    anim.goToAndPlay(0, true);
    stopTimeoutRef.current = setTimeout(() => {
      anim.goToAndStop(stopFrame, true);
      stopTimeoutRef.current = null;
    }, triggerSecond * 1000);
  };

  const handleLeave = () => {
    if (finished) return;
    const anim = getAnim();
    if (!anim) return;

    if (stopTimeoutRef.current) {
      clearTimeout(stopTimeoutRef.current);
      stopTimeoutRef.current = null;
    }

    const fps = anim.frameRate || 30;
    const stopFrame = Math.round(triggerSecond * fps);

    anim.goToAndPlay(stopFrame, true);

    const onComplete = () => {
      setFinished(true);
      anim.removeEventListener("complete", onComplete);
      completeHandlerRef.current = null;
    };
    if (completeHandlerRef.current) {
      anim.removeEventListener("complete", completeHandlerRef.current);
    }
    completeHandlerRef.current = onComplete;
    anim.addEventListener("complete", onComplete);
  };

  return (
    <div
      className={className} // <- absolute burada yok
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
      />
    </div>
  );
}
