"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Pointer({
  className,
  style,
  text = "Read More",
  textColor = "text-white",
  ...props
}: HTMLMotionProps<"div"> & { text?: string; textColor?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      parent.style.cursor = "none";

      const handleMove = (e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
      };
      const handleEnter = (e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
        setIsActive(true);
      };
      const handleLeave = () => setIsActive(false);

      parent.addEventListener("mousemove", handleMove);
      parent.addEventListener("mouseenter", handleEnter);
      parent.addEventListener("mouseleave", handleLeave);

      return () => {
        parent.style.cursor = "";
        parent.removeEventListener("mousemove", handleMove);
        parent.removeEventListener("mouseenter", handleEnter);
        parent.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, [x, y]);

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            <motion.div
              className={cn("relative flex items-center justify-center", className)}
            >
              {/* Ana daire */}
              <motion.div className="w-5 h-5 rounded-full bg-white mix-blend-difference" />

              {/* Sağ üstte yazı */}
              <motion.span
                initial={{ opacity: 0, y: -5, x: 10 }}
                animate={{ opacity: 1, y: -20, x: 20 }}
                exit={{ opacity: 0, y: -5, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "absolute text-xs bg-white rounded-full p-2 ml-10 font-semibold whitespace-nowrap select-none",
                  textColor
                )}
              >
                {text}
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
