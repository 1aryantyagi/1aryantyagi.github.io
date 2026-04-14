import { motion } from "framer-motion";
import { aiSystemBlocks } from "../data/resume";
import { useReducedMotion } from "../hooks/useReducedMotion";

function MiniFlow({ id }: { id: string }) {
  if (id === "rag") {
    return (
      <svg viewBox="0 0 200 48" className="w-full text-[9px]" aria-hidden>
        <rect x="4" y="12" width="40" height="24" rx="4" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" />
        <text x="24" y="28" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="8">
          Docs
        </text>
        <path d="M44 24 H60" stroke="#64748b" />
        <rect x="60" y="8" width="56" height="32" rx="4" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" />
        <text x="88" y="28" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="8">
          RAG
        </text>
        <path d="M116 24 H132" stroke="#64748b" />
        <rect x="132" y="12" width="48" height="24" rx="4" fill="rgba(52,211,153,0.15)" stroke="#34d399" />
        <text x="156" y="28" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="8">
          Out
        </text>
      </svg>
    );
  }
  if (id === "agents") {
    return (
      <svg viewBox="0 0 200 56" className="w-full" aria-hidden>
        <rect x="8" y="20" width="44" height="22" rx="4" fill="rgba(34,211,238,0.12)" stroke="#22d3ee" />
        <text x="30" y="35" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="8">
          Agent A
        </text>
        <path d="M52 31 H72" stroke="#64748b" />
        <rect x="72" y="12" width="56" height="36" rx="4" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" />
        <text x="100" y="34" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="8">
          Orchestrator
        </text>
        <path d="M128 31 H148" stroke="#64748b" />
        <rect x="148" y="20" width="44" height="22" rx="4" fill="rgba(34,211,238,0.12)" stroke="#22d3ee" />
        <text x="170" y="35" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="8">
          Agent B
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 48" className="w-full" aria-hidden>
      <rect x="20" y="14" width="160" height="22" rx="4" fill="rgba(52,211,153,0.12)" stroke="#34d399" />
      <text x="100" y="29" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="8">
        Fine-tune · eval · deploy
      </text>
    </svg>
  );
}

export function AISystemsGrid() {
  const reduced = useReducedMotion();

  return (
    <section id="systems" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          AI systems I&apos;ve built
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          Pipelines, agents, and domain adaptation
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aiSystemBlocks.map((b, idx) => (
            <motion.div
              key={b.id}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">{b.title}</h3>
              <p className="mt-1 text-sm text-neon-violet">{b.subtitle}</p>
              <div className="mt-4 rounded-xl border border-white/5 bg-slate-950/50 p-3">
                <MiniFlow id={b.id} />
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {b.bullets.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
