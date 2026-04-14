import { site } from "../data/resume";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-slate-400">{site.title}</p>
          <p className="mt-4 max-w-md text-sm text-slate-500">
            AI Engineer and LLM Engineer — multi-agent systems, RAG, and production machine learning.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a className="text-slate-300 hover:text-neon-cyan" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="text-slate-300 hover:text-neon-cyan"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-slate-300 hover:text-neon-cyan"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-300 hover:text-neon-cyan"
            href={site.kaggle}
            target="_blank"
            rel="noreferrer"
          >
            Kaggle
          </a>
          <a
            href="/Aryan_CV.pdf"
            download
            className="mt-2 inline-flex w-fit rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-white hover:border-neon-cyan/40"
          >
            Download resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-center text-[11px] text-slate-600">
        © {new Date().getFullYear()} {site.name}. Built with React, Tailwind CSS, and Framer Motion.
      </p>
    </footer>
  );
}
