import { useReducedMotion } from "../hooks/useReducedMotion";
import { NeuralCanvas } from "./NeuralCanvas";

export function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(167,139,250,0.12),transparent)]"
        aria-hidden
      />
      <div
        className={`absolute inset-0 bg-grid-pattern bg-[length:48px_48px] ${reduced ? "" : "animate-grid-pan"}`}
        aria-hidden
      />
      {!reduced && <NeuralCanvas />}
    </div>
  );
}
