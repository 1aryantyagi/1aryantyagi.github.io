import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";

function Radar({ values }: { values: { label: string; value: number }[] }) {
  const cx = 160;
  const cy = 150;
  const rMax = 100;
  const n = values.length;
  const pts = values.map((v, i) => {
    const angle = (-Math.PI / 2 + (2 * Math.PI * i) / n) as number;
    const rr = (v.value / 100) * rMax;
    return { x: cx + rr * Math.cos(angle), y: cy + rr * Math.sin(angle), label: v.label };
  });
  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  const grid = [0.25, 0.5, 0.75, 1].map((g) => {
    const ring = values.map((_, i) => {
      const angle = (-Math.PI / 2 + (2 * Math.PI * i) / n) as number;
      const rr = rMax * g;
      return { x: cx + rr * Math.cos(angle), y: cy + rr * Math.sin(angle) };
    });
    const d = ring.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
    return <path key={g} d={d} fill="none" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />;
  });

  return (
    <svg viewBox="0 0 320 300" className="mx-auto w-full max-w-md" aria-hidden>
      {grid}
      {values.map((_, i) => {
        const angle = (-Math.PI / 2 + (2 * Math.PI * i) / n) as number;
        const x2 = cx + rMax * Math.cos(angle);
        const y2 = cy + rMax * Math.sin(angle);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x2}
            y2={y2}
            stroke="rgba(148,163,184,0.25)"
            strokeWidth="1"
          />
        );
      })}
      <path
        d={pathD}
        fill="rgba(34,211,238,0.15)"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      {values.map((v, i) => {
        const angle = (-Math.PI / 2 + (2 * Math.PI * i) / n) as number;
        const lx = cx + (rMax + 22) * Math.cos(angle);
        const ly = cy + (rMax + 22) * Math.sin(angle);
        return (
          <text
            key={v.label}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#e2e8f0"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
          >
            {v.label}
          </text>
        );
      })}
    </svg>
  );
}

export function SkillsVisualization() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);
  const radarData = skillCategories.map((c) => ({ label: c.label, value: c.proficiency }));

  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          Capability map
        </motion.p>
        <p className="mt-3 max-w-2xl text-slate-400">
          Proficiency is directional (not exam scores) — optimized for recruiters scanning depth across AI/ML, agents, and backend.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 backdrop-blur-xl">
            <Radar values={radarData} />
          </div>
          <div className="space-y-4">
            {skillCategories.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                onMouseEnter={() => setHover(c.id)}
                onMouseLeave={() => setHover(null)}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-white">{c.label}</span>
                  <span className="font-mono text-xs text-neon-cyan">{c.proficiency}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                    initial={reduced ? false : { width: 0 }}
                    whileInView={{ width: `${c.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <ul
                  className={`mt-3 flex flex-wrap gap-2 transition ${hover === c.id ? "opacity-100" : "opacity-80"}`}
                >
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
