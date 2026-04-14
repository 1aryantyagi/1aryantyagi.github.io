import { motion } from "framer-motion";
import { aiKeywords } from "../data/resume";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { useReducedMotion } from "../hooks/useReducedMotion";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}

function techHint(r: {
  name: string;
  description: string | null;
  language: string | null;
  topics: string[];
  homepage: string | null;
}) {
  const bits = [r.language, ...r.topics, r.description ?? "", r.name]
    .filter(Boolean)
    .join(" ");
  const tags = new Set<string>();
  if (r.language) tags.add(r.language);
  const lower = bits.toLowerCase();
  const map: [RegExp, string][] = [
    [/langchain|openai|gpt|llm/i, "LLM"],
    [/pytorch|tensorflow|keras/i, "ML"],
    [/react|vue|svelte/i, "Frontend"],
    [/fastapi|flask|django/i, "Python API"],
    [/docker|kubernetes/i, "Infra"],
  ];
  for (const [re, label] of map) {
    if (re.test(lower)) tags.add(label);
  }
  if (aiKeywords.test(bits)) tags.add("AI");
  return [...tags].slice(0, 5);
}

export function GitHubSection() {
  const reduced = useReducedMotion();
  const { repos, loading, error, reload } = useGitHubRepos("1aryantyagi");
  const top = repos?.slice(0, 12) ?? [];

  return (
    <section id="github" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan"
        >
          Open source
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-white"
        >
          GitHub activity
        </motion.p>
        <p className="mt-3 max-w-2xl text-slate-400">
          Live data from the GitHub API — stars, languages, and recent pushes. AI-heavy repos surface first.
        </p>

        {loading && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-36 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}
        {error && (
          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
            {error}.{" "}
            <button type="button" onClick={() => reload()} className="underline">
                Retry
              </button>
          </div>
        )}
        {!loading && !error && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {top.map((r, idx) => (
              <motion.a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-surface/80 p-4 backdrop-blur transition hover:border-neon-cyan/35 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-white group-hover:text-neon-cyan">
                    {r.name}
                  </h3>
                  <span className="shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">
                    ★ {r.stargazers_count}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-slate-400">
                  {r.description || "—"}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {techHint(r).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/10 bg-slate-950/50 px-1.5 py-0.5 text-[10px] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-3 text-[10px] text-slate-500">
                  Last push {formatDate(r.pushed_at)}
                </p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
