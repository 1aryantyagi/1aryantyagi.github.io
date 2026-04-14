import { useEffect, useState } from "react";

const PHRASES = [
  "LLMs",
  "Multi-Agent Systems",
  "Computer Vision",
  "AI Automation",
];

type Props = { reduced: boolean };

export function TypingSkills({ reduced }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setDisplay(PHRASES.join(" · "));
      return;
    }
    const full = PHRASES[phraseIndex];
    const speed = deleting ? 32 : 55;
    const t = window.setTimeout(() => {
      if (!deleting) {
        if (display.length < full.length) {
          setDisplay(full.slice(0, display.length + 1));
        } else {
          window.setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        if (display.length > 0) {
          setDisplay(full.slice(0, display.length - 1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => window.clearTimeout(t);
  }, [display, deleting, phraseIndex, reduced]);

  if (reduced) {
    return <span className="text-slate-300">{display}</span>;
  }

  return (
    <span className="text-neon-violet">
      <span className="mr-2 text-slate-500">Building with</span>
      {display}
      <span className="ml-0.5 inline-block animate-pulse text-neon-cyan">|</span>
    </span>
  );
}
