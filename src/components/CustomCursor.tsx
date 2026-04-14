import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    if (reduced) return;
    const prefersCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (prefersCoarse) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);

  if (reduced) return null;
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)
    return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-screen md:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        aria-hidden
      >
        <div className="h-4 w-4 rounded-full border border-neon-cyan/80 bg-neon-cyan/20 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        aria-hidden
      >
        <div className="h-8 w-8 rounded-full border border-white/10" />
      </motion.div>
    </>
  );
}
