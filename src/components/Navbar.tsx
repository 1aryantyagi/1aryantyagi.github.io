import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "../data/resume";
import { useSound } from "../hooks/useSound";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#systems", label: "AI Systems" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#cases", label: "Case Studies" },
  { href: "#contact", label: "Contact" },
];

type Props = { soundOn: boolean };

export function Navbar({ soundOn }: Props) {
  const { playClick } = useSound(soundOn);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = () => {
    playClick();
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-[1000] border-b border-white/5 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          onClick={navigate}
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          <span className="text-neon-cyan">AT</span>
          <span className="text-slate-400">.dev</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={playClick}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onClick={playClick}
            className="hidden rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-neon-cyan/40 hover:text-neon-cyan sm:inline-block"
          >
            GitHub
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => {
              playClick();
              setMobileOpen((o) => !o);
            }}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-slate-950/95 lg:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={navigate}
                  className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                onClick={navigate}
                className="mt-2 rounded-lg border border-white/10 px-3 py-3 text-center text-sm text-neon-cyan"
              >
                GitHub
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
