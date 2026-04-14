import { useCallback, useRef, useState } from "react";

/** Tiny UI blip — only when enabled via user toggle */
export function useSound(enabled: boolean) {
  const ctxRef = useRef<AudioContext | null>(null);
  const [ready, setReady] = useState(false);

  const playClick = useCallback(() => {
    if (!enabled) return;
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!ctxRef.current) ctxRef.current = new Ctx();
      const ctx = ctxRef.current;
      if (ctx.state === "suspended") void ctx.resume();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.value = 0.04;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.04);
      setReady(true);
    } catch {
      /* ignore */
    }
  }, [enabled]);

  return { playClick, ready };
}
