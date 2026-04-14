import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[1001] h-0.5 origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
