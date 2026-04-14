import { motion } from "framer-motion";
import { site } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useSound } from "../hooks/useSound";
import { TypingSkills } from "./TypingSkills";

type Props = { soundOn: boolean };

export function Hero({ soundOn }: Props) {
  const reduced = useReducedMotion();
  const { playClick } = useSound(soundOn);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center px-4 pb-24 pt-28 sm:px-6"
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-neon-cyan/90">
          AI Engineer · LLM Engineer · Machine Learning Engineer
        </p>
        <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Hi, I&apos;m {site.name} — AI Engineer building intelligent systems
        </h1>
        <div className="mx-auto mt-8 flex min-h-[2.5rem] max-w-2xl items-center justify-center font-mono text-sm text-neon-violet sm:text-base">
          <TypingSkills reduced={reduced} />
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={playClick}
            className="rounded-xl bg-gradient-to-r from-neon-cyan/90 to-cyan-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:brightness-110"
          >
            View work
          </a>
          <a
            href="/Aryan_CV.pdf"
            download
            onClick={playClick}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-neon-cyan/40"
          >
            Download resume
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onClick={playClick}
            className="rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:text-white"
          >
            GitHub →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
