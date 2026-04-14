import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { experience, type ExperienceItem } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useSound } from "../hooks/useSound";

function CompanyMark({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent font-mono text-xs font-bold text-neon-cyan">
      {initials.slice(0, 3)}
    </div>
  );
}

function Badge({ b }: { b: NonNullable<ExperienceItem["impactBadges"]>[0] }) {
  const cls =
    b.variant === "cyan"
      ? "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan"
      : b.variant === "success"
        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
        : "border-neon-violet/40 bg-neon-violet/10 text-neon-violet";
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${cls}`}>
      {b.label}
    </span>
  );
}

type Props = { soundOn: boolean };

export function ExperienceTimeline({ soundOn }: Props) {
  const reduced = useReducedMotion();
  const { playClick } = useSound(soundOn);
  const [openId, setOpenId] = useState<string | null>("intelera-dev");

  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          Where I shipped AI in production
        </motion.p>
        <p className="mt-3 max-w-2xl text-slate-400">
          Interactive timeline — expand each role for tools, impact, and highlights.
        </p>

        <div className="relative mt-14 border-l border-white/10 pl-8 md:pl-10">
          {experience.map((job, idx) => {
            const open = openId === job.id;
            return (
              <div key={job.id} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-slate-950 bg-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)] md:-left-[11px]" />
                <motion.article
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: idx * 0.05 }}
                  className={`rounded-2xl border bg-surface/80 p-5 backdrop-blur-xl ${
                    job.accent === "primary"
                      ? "border-neon-cyan/25 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <CompanyMark name={job.company} />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                        <span className="text-sm text-slate-500">{job.company}</span>
                      </div>
                      <p className="mt-1 text-sm text-slate-400">
                        {job.start} — {job.end} · {job.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{job.summary}</p>
                      {job.impactBadges && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.impactBadges.map((b) => (
                            <Badge key={b.label} b={b} />
                          ))}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          playClick();
                          setOpenId(open ? null : job.id);
                        }}
                        className="mt-4 text-sm font-medium text-neon-cyan hover:underline"
                      >
                        {open ? "Collapse details" : "Expand details"}
                      </button>
                      <AnimatePresence>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                              {job.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {job.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
