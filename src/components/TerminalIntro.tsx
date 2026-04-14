import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const LINES = [
  { cmd: "whoami", out: "aryan_tyagi — AI Engineer" },
  { cmd: "cat ./focus.txt", out: "LLMs · Agents · RAG · Production ML" },
  { cmd: "open --github", out: "github.com/1aryantyagi" },
];

const STORAGE_KEY = "terminal_intro_seen_v1";

export function TerminalIntro() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduced) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    setOpen(true);
  }, [reduced]);

  useEffect(() => {
    if (!open || reduced) return;
    const full = `$ ${LINES[line].cmd}`;
    if (typed.length < full.length) {
      const t = window.setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 28);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      if (line < LINES.length - 1) {
        setLine((l) => l + 1);
        setTyped("");
      } else {
        window.setTimeout(() => setOpen(false), 900);
      }
    }, 420);
    return () => window.clearTimeout(t);
  }, [open, typed, line, reduced]);

  useEffect(() => {
    if (!open && !reduced) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, [open, reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 font-mono text-sm shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-amber-500/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2">zsh — portfolio</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-auto text-slate-400 hover:text-white"
              >
                Skip
              </button>
            </div>
            <div className="space-y-3 p-5 text-left text-slate-200">
              {LINES.slice(0, line + 1).map((l, i) => (
                <div key={l.cmd}>
                  {i === line ? (
                    <>
                      <div className="text-neon-cyan">{typed}</div>
                      {typed.length >= `$ ${l.cmd}`.length && (
                        <div className="mt-1 text-slate-400">{l.out}</div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-neon-cyan">$ {l.cmd}</div>
                      <div className="mt-1 text-slate-400">{l.out}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
