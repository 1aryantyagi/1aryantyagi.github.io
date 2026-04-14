import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { matchChatQuery } from "../lib/chatMatch";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Msg = { role: "user" | "assistant"; text: string; sources?: string[] };

export function ChatWidget() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Ask about Aryan’s work — IntelERA & Home Depot, medical LLMs, PizzaOnCall, agents, or stack.",
    },
  ]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    const { answer, sources } = matchChatQuery(q);
    setMsgs((m) => [
      ...m,
      { role: "user", text: q },
      { role: "assistant", text: answer, sources },
    ]);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-[1500] flex h-14 w-14 items-center justify-center rounded-2xl border border-neon-cyan/40 bg-slate-950/90 text-neon-cyan shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur transition hover:scale-105"
        aria-expanded={open}
        aria-label="Open Ask about Aryan chat"
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={reduced ? { duration: 0 } : undefined}
            className="fixed bottom-24 right-6 z-[1500] flex h-[min(420px,70vh)] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Ask about Aryan</p>
                <p className="text-[10px] text-slate-500">Resume-grounded · no API keys</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-8 rounded-xl bg-neon-cyan/15 px-3 py-2 text-slate-100"
                      : "mr-4 rounded-xl bg-white/5 px-3 py-2 text-slate-300"
                  }
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  {m.sources && m.sources.length > 0 && (
                    <p className="mt-2 text-[10px] text-slate-500">
                      Sources: {m.sources.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="e.g. What is PizzaOnCall?"
                  className="flex-1 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-600 focus:border-neon-cyan/50 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={send}
                  className="rounded-xl bg-neon-cyan/90 px-4 py-2 text-sm font-semibold text-slate-950"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
