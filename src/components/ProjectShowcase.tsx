import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useSound } from "../hooks/useSound";
import { ProjectArchitecture } from "./ProjectArchitecture";

type Props = { soundOn: boolean };

export function ProjectShowcase({ soundOn }: Props) {
  const reduced = useReducedMotion();
  const { playClick } = useSound(soundOn);
  const [modes, setModes] = useState<Record<string, "product" | "architecture">>({});

  const setMode = (id: string, m: "product" | "architecture") => {
    playClick();
    setModes((s) => ({ ...s, [id]: m }));
  };

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          Product showcase
        </motion.p>
        <p className="mt-3 max-w-2xl text-slate-400">
          Problem → solution → impact. Toggle architecture view for system diagrams.
        </p>

        <div className="mt-14 flex flex-col gap-14">
          {projects.map((p, idx) => {
            const mode = modes[p.id] ?? "product";
            return (
              <motion.article
                key={p.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.06 }}
                className={`overflow-hidden rounded-3xl border bg-surface/90 backdrop-blur-xl ${
                  p.featured ? "border-neon-cyan/30 shadow-[0_0_60px_rgba(34,211,238,0.06)]" : "border-white/10"
                }`}
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative min-h-[240px] border-b border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 lg:border-b-0 lg:border-r">
                    {p.featured && (
                      <span className="absolute right-4 top-4 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neon-cyan">
                        Featured
                      </span>
                    )}
                    <h3 className="pr-24 text-2xl font-bold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-neon-violet">{p.tagline}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          onClick={playClick}
                          className={
                            l.primary
                              ? "rounded-xl bg-neon-cyan/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-neon-cyan"
                              : "rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-neon-cyan/40"
                          }
                        >
                          {l.label}
                          {p.demoIsMock && l.label.toLowerCase().includes("demo") && (
                            <span className="ml-1 text-[10px] text-slate-500">(concept)</span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col p-6">
                    <div className="mb-4 flex rounded-xl border border-white/10 bg-slate-950/50 p-1">
                      <button
                        type="button"
                        onClick={() => setMode(p.id, "product")}
                        className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition ${
                          mode === "product"
                            ? "bg-white/10 text-white"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Product story
                      </button>
                      <button
                        type="button"
                        onClick={() => setMode(p.id, "architecture")}
                        className={`flex-1 rounded-lg px-3 py-2 text-xs font-medium transition ${
                          mode === "architecture"
                            ? "bg-white/10 text-white"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        AI architecture
                      </button>
                    </div>
                    {mode === "product" ? (
                      <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neon-cyan">
                            Problem
                          </span>
                          <p className="mt-1">{p.problem}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-neon-violet">
                            Solution
                          </span>
                          <p className="mt-1">{p.solution}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                            Impact
                          </span>
                          <p className="mt-1">{p.impact}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                        <ProjectArchitecture projectId={p.id} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
