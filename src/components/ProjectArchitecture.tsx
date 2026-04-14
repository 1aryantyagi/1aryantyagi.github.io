type Props = { projectId: string };

export function ProjectArchitecture({ projectId }: Props) {
  if (projectId === "pizzaoncall") {
    return (
      <svg viewBox="0 0 520 200" className="h-auto w-full max-w-full text-[11px]" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect x="8" y="72" width="88" height="56" rx="10" fill="rgba(34,211,238,0.12)" stroke="#22d3ee" />
        <text x="52" y="104" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="12">
          User
        </text>
        <path d="M96 100 H140" stroke="url(#g1)" strokeWidth="2" />
        <rect x="140" y="64" width="100" height="72" rx="10" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" />
        <text x="190" y="96" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          Twilio
        </text>
        <text x="190" y="114" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="10">
          Voice
        </text>
        <path d="M240 100 H280" stroke="url(#g1)" strokeWidth="2" />
        <rect x="280" y="56" width="120" height="88" rx="10" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" />
        <text x="340" y="88" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          Flask + Agent
        </text>
        <text x="340" y="108" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="10">
          LangChain · GPT
        </text>
        <path d="M400 100 H432" stroke="url(#g1)" strokeWidth="2" />
        <rect x="432" y="72" width="80" height="56" rx="10" fill="rgba(52,211,153,0.12)" stroke="#34d399" />
        <text x="472" y="104" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          Pay
        </text>
        <text x="340" y="148" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono, monospace" fontSize="9">
          Menu · cart · NLU
        </text>
      </svg>
    );
  }
  if (projectId === "mindware") {
    return (
      <svg viewBox="0 0 520 220" className="h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <rect x="20" y="36" width="100" height="52" rx="10" fill="rgba(34,211,238,0.1)" stroke="#22d3ee" />
        <text x="70" y="68" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          Client UI
        </text>
        <text x="70" y="86" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="9">
          React
        </text>
        <rect x="20" y="120" width="100" height="52" rx="10" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" />
        <text x="70" y="152" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          Voice
        </text>
        <path d="M120 62 H200 M120 146 H200" stroke="url(#g2)" strokeWidth="2" />
        <rect x="200" y="72" width="140" height="76" rx="12" fill="rgba(15,23,42,0.9)" stroke="#a78bfa" strokeWidth="2" />
        <text x="270" y="104" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="12">
          Multi-agent
        </text>
        <text x="270" y="124" textAnchor="middle" fill="#94a3b8" fontFamily="JetBrains Mono, monospace" fontSize="10">
          GPT-4 orchestration
        </text>
        <path d="M340 110 H400" stroke="url(#g2)" strokeWidth="2" />
        <rect x="400" y="80" width="100" height="60" rx="10" fill="rgba(52,211,153,0.1)" stroke="#34d399" />
        <text x="450" y="114" textAnchor="middle" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace" fontSize="11">
          MySQL
        </text>
        <text x="270" y="168" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono, monospace" fontSize="9">
          Intent · recommendations · tools
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 120" className="h-auto w-full" aria-hidden>
      <text x="200" y="60" textAnchor="middle" fill="#64748b" fontFamily="JetBrains Mono, monospace" fontSize="12">
        Architecture diagram
      </text>
    </svg>
  );
}
