import { motion } from "framer-motion";
import { education } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function EducationSection() {
  const reduced = useReducedMotion();
  return (
    <section id="education" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl sm:p-8"
        >
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">
            Education
          </h2>
          <p className="mt-2 text-xl font-semibold text-white">{education.degree}</p>
          <p className="mt-1 text-sm text-slate-400">{education.school} · {education.end}</p>
          <p className="mt-4 text-sm text-slate-300">
            Selected coursework: {education.coursework.join(", ")}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
