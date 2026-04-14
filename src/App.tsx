import { lazy, Suspense, useState } from "react";
import { AISystemsGrid } from "./components/AISystemsGrid";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { CaseStudies } from "./components/CaseStudies";
import { ChatWidget } from "./components/ChatWidget";
import { CustomCursor } from "./components/CustomCursor";
import { EducationSection } from "./components/EducationSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ScrollProgress } from "./components/ScrollProgress";
import { Seo } from "./components/Seo";
import { SkillsVisualization } from "./components/SkillsVisualization";
import { TerminalIntro } from "./components/TerminalIntro";

const GitHubSection = lazy(() =>
  import("./components/GitHubSection").then((m) => ({ default: m.GitHubSection }))
);

function GitHubFallback() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-40 animate-pulse rounded-2xl bg-white/5" />
      </div>
    </section>
  );
}

export default function App() {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <>
      <Seo />
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <TerminalIntro />
      <Navbar soundOn={soundOn} />
      <button
        type="button"
        onClick={() => setSoundOn((s) => !s)}
        className="fixed bottom-6 left-6 z-[1500] rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2 text-[10px] font-medium text-slate-400 backdrop-blur hover:text-white"
        aria-pressed={soundOn}
      >
        Sound {soundOn ? "on" : "off"}
      </button>
      <main className="relative min-h-screen">
        <Hero soundOn={soundOn} />
        <AISystemsGrid />
        <ExperienceTimeline soundOn={soundOn} />
        <ProjectShowcase soundOn={soundOn} />
        <Suspense fallback={<GitHubFallback />}>
          <GitHubSection />
        </Suspense>
        <SkillsVisualization />
        <EducationSection />
        <CaseStudies />
        <Footer />
      </main>
      <ChatWidget />
    </>
  );
}
