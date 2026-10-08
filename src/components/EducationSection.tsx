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
          <div className="mt-2 divide-y divide-white/10">
            {education.map((e) => (
              <div key={e.degree} className="py-4 first:pt-0 last:pb-0">
                <p className="text-xl font-semibold text-white">{e.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{e.school} · {e.end}</p>
                {e.coursework.length > 0 && (
                  <p className="mt-3 text-sm text-slate-300">
                    Selected coursework: {e.coursework.join(", ")}.
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
