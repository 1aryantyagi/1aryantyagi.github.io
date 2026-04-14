import { motion } from "framer-motion";
import { caseStudies } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function CaseStudies() {
  const reduced = useReducedMotion();

  return (
    <section id="cases" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          Case studies
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          Deep dives
        </motion.p>
        <p className="mt-3 text-slate-400">
          Architecture, constraints, and outcomes — the way senior engineers communicate impact.
        </p>

        <div className="mt-12 space-y-10">
          {caseStudies.map((cs, idx) => (
            <motion.article
              key={cs.id}
              id={`case-${cs.id}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-3xl border border-white/10 bg-surface/90 p-6 backdrop-blur-xl sm:p-8"
            >
              <h3 className="text-xl font-bold text-white">{cs.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{cs.context}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-amber-400/90">
                    Challenges
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-400">
                    {cs.challenges.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-neon-cyan">
                    Architecture
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-400">
                    {cs.architecture.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-emerald-400/90">
                    Results
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-400">
                    {cs.results.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
