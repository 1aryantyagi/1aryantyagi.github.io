export const site = {
  name: "Aryan Tyagi",
  title: "AI Engineer · LLM Engineer",
  tagline: "Building intelligent systems — multi-agent orchestration, RAG, and production ML.",
  url: "https://1aryantyagi.github.io",
  email: "1aryantyagi@gmail.com",
  phone: "+91 9058991119",
  location: "India",
  github: "https://github.com/1aryantyagi",
  linkedin: "https://www.linkedin.com/in/aryan-tyagi-3b57101b9/",
  kaggle: "https://www.kaggle.com/aryantyagi19",
} as const;

export type ImpactBadge = { label: string; variant?: "cyan" | "violet" | "success" };

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  tech: string[];
  impactBadges?: ImpactBadge[];
  accent?: "primary" | "default";
};

export const experience: ExperienceItem[] = [
  {
    id: "intelera-dev",
    company: "IntelERA",
    role: "AI Developer",
    location: "Remote",
    start: "Mar 2026",
    end: "Present",
    accent: "primary",
    summary:
      "Partnering with a Fortune 25 retailer (The Home Depot) to optimize warehouse order sorting and lift productivity through AI-driven systems.",
    highlights: [
      "Built an ADK-based multi-agent system with business rules and RAG, integrated with Google BigQuery for scalable, data-driven decision-making.",
      "Trained a RoBERTa model on historical operational data to predict optimal sorting strategies, improving throughput and accuracy.",
    ],
    tech: ["Python", "ADK", "RAG", "BigQuery", "RoBERTa", "Multi-agent"],
    impactBadges: [
      { label: "Fortune 25 · Home Depot", variant: "cyan" },
      { label: "Throughput & accuracy", variant: "success" },
    ],
  },
  {
    id: "intelera-intern",
    company: "IntelERA",
    role: "AIML Intern",
    location: "Remote",
    start: "Sep 2025",
    end: "Mar 2026",
    accent: "primary",
    summary:
      "Medical-domain LLMs and clinical decision-support — fine-tuning, RAG, and explainable pipelines.",
    highlights: [
      "Fine-tuned medical-domain LLMs (LLaMA-3, GPT-4) on clinical data; built a RAG-based diagnostic assistant with NER and relation extraction.",
      "Developed scalable clinical decision-support systems using FastAPI, LangChain, and Azure with explainable AI techniques.",
    ],
    tech: ["LLaMA-3", "GPT-4", "LangChain", "FastAPI", "Azure", "RAG", "NER"],
    impactBadges: [{ label: "92%+ accuracy (clinical assistant)", variant: "violet" }],
  },
  {
    id: "drema",
    company: "Drema AI",
    role: "AIML Intern",
    location: "Noida",
    start: "Jan 2025",
    end: "Jun 2025",
    summary:
      "End-to-end automation for job discovery and applications using LLM tooling and browser automation.",
    highlights: [
      "Built an auto-apply system using LangChain to extract roles from resumes, search LinkedIn, MyWorkdayJobs, and Naukri, and automate applications via OpenAI, Selenium, and Playwright.",
    ],
    tech: ["LangChain", "OpenAI", "Playwright", "Selenium", "Python"],
    impactBadges: [{ label: "AI automation", variant: "cyan" }],
  },
  {
    id: "futurix",
    company: "FuturixAI & Quantum Works",
    role: "AI Developer Intern",
    location: "Remote",
    start: "Jul 2024",
    end: "Sep 2024",
    summary: "Multilingual conversational AI on Azure with LLaMA-class models.",
    highlights: [
      "Developed a Hindi chatbot using the Unsloth LLaMA 3 model with NLP, TensorFlow, FastAPI, and Azure for scalable deployment.",
    ],
    tech: ["LLaMA 3", "FastAPI", "Azure", "TensorFlow", "NLP"],
  },
  {
    id: "drdo",
    company: "INMAS, DRDO",
    role: "Research Intern",
    location: "Delhi",
    start: "Aug 2023",
    end: "Sep 2023",
    summary: "ML for cognitive neuroscience — EEG signal processing and disease classification.",
    highlights: [
      "Applied ML to EEG data with FFT feature pipelines; developed RNN/LSTM models for cognitive state classification.",
      "Built models to distinguish Parkinson’s disease patients from healthy controls using signal processing and deep learning.",
    ],
    tech: ["EEG", "FFT", "RNN", "LSTM", "Deep Learning"],
    impactBadges: [{ label: "Research · Healthcare", variant: "violet" }],
  },
];

export type ProjectItem = {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  featured?: boolean;
  links: { label: string; href: string; primary?: boolean }[];
  demoIsMock?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "pizzaoncall",
    title: "PizzaOnCall",
    tagline: "Voice + web pizza ordering with an LLM agent",
    problem:
      "Customers need natural voice and web flows to browse, customize, and pay — without a clunky IVR or static forms.",
    solution:
      "Full-stack platform with Flask and Twilio for voice; LangChain + GPT-3.5-turbo agent for NLU, menu selection, cart, and personalized responses; Razorpay for payments.",
    impact:
      "End-to-end conversational ordering: voice call or web, with secure checkout — a complete product-shaped AI system.",
    stack: ["Python", "Flask", "Twilio", "LangChain", "GPT-3.5", "Razorpay"],
    featured: true,
    links: [
      { label: "Source", href: "https://github.com/1aryantyagi/PizzaOnCall", primary: true },
      { label: "Live demo", href: "#", primary: false },
    ],
    demoIsMock: true,
  },
  {
    id: "mindware",
    title: "Mindware AI Sales Assistant",
    tagline: "Multi-agent GPT-4 sales and support",
    problem:
      "Sales teams need voice and text copilots that understand intent, recommend products, and scale support.",
    solution:
      "Advanced assistant with GPT-4 for intent and recommendations; multi-agent architecture with agentic AI; on-call voice support; Flask API, React UI, MySQL storage.",
    impact:
      "Streamlined customer interactions across modalities with a production-minded backend and data layer.",
    stack: ["GPT-4", "Multi-agent", "Flask", "React", "MySQL", "Voice"],
    featured: true,
    links: [
      { label: "Case studies", href: "#cases", primary: true },
      { label: "GitHub profile", href: "https://github.com/1aryantyagi", primary: false },
    ],
    demoIsMock: true,
  },
  {
    id: "job-apply",
    title: "Auto job apply system",
    tagline: "LangChain + browser automation",
    problem: "Applying across portals is repetitive and time-consuming.",
    solution:
      "LangChain pipeline to extract roles from resumes, search multiple job boards, and automate applications with OpenAI, Selenium, and Playwright.",
    impact: "Scalable automation reducing manual application overhead.",
    stack: ["LangChain", "Playwright", "Selenium", "OpenAI", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/1aryantyagi", primary: true }],
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  proficiency: number;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "aiml",
    label: "AI / ML",
    proficiency: 92,
    items: [
      "PyTorch-style workflows",
      "RoBERTa / transformers",
      "Computer vision basics",
      "Signal processing (EEG)",
      "scikit-learn",
    ],
  },
  {
    id: "llm",
    label: "LLMs & Agents",
    proficiency: 95,
    items: [
      "LangChain",
      "RAG",
      "Multi-agent (ADK)",
      "Fine-tuning (LLaMA, GPT-4)",
      "Prompt / tool orchestration",
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    proficiency: 88,
    items: ["FastAPI", "Flask", "Azure", "BigQuery", "MySQL", "REST APIs"],
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  challenges: string[];
  architecture: string[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "homedepot-sorting",
    title: "Agentic warehouse sorting (Fortune 25 retailer)",
    context:
      "Warehouse order sorting and productivity for a high-volume retail operation — decisions must be data-backed and scalable.",
    challenges: [
      "Orchestrating agents with business rules while grounding retrieval.",
      "Connecting operational analytics in BigQuery to live decision flows.",
      "Learning optimal strategies from historical operations via RoBERTa.",
    ],
    architecture: [
      "ADK multi-agent layer with RAG over policy and operational context.",
      "BigQuery for analytics and feature-rich historical data.",
      "RoBERTa for sorting-strategy prediction from past runs.",
    ],
    results: [
      "End-to-end pipeline from data to decision support.",
      "Improved throughput and accuracy framing per operational goals.",
    ],
  },
  {
    id: "pizzaoncall",
    title: "PizzaOnCall — voice commerce",
    context:
      "Users order by phone and web; the system must handle NLU, menu state, and payments reliably.",
    challenges: [
      "Twilio voice UX tied to a single conversational brain.",
      "Cart and payment state with LangChain + GPT-3.5-turbo.",
    ],
    architecture: [
      "Flask services + Twilio webhooks.",
      "LangChain agent for dialogue, menu, and cart.",
      "Razorpay for checkout.",
    ],
    results: [
      "Demonstrates full-stack AI product delivery: voice + web + payments.",
    ],
  },
];

export type AISystemBlock = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

export const aiSystemBlocks: AISystemBlock[] = [
  {
    id: "rag",
    title: "RAG pipelines",
    subtitle: "Retrieval + generation at scale",
    bullets: [
      "Clinical diagnostic assistant with NER and relation extraction (IntelERA).",
      "BigQuery-grounded retrieval for operational decision support.",
    ],
  },
  {
    id: "agents",
    title: "Multi-agent workflows",
    subtitle: "Orchestration & tools",
    bullets: [
      "ADK-based agents with business rules for warehouse optimization.",
      "Mindware-style multi-agent GPT-4 sales and support flows.",
    ],
  },
  {
    id: "finetune",
    title: "LLM fine-tuning",
    subtitle: "Domain adaptation",
    bullets: [
      "Medical LLMs: LLaMA-3 and GPT-4 on clinical data.",
      "RoBERTa on operational history for sorting strategy prediction.",
    ],
  },
];

export const education = {
  school: "University School of Automation and Robotics, GGSIPU Delhi",
  degree: "B.Tech in Artificial Intelligence and Machine Learning",
  end: "July 2025",
  coursework: [
    "Machine learning",
    "Software engineering",
    "Data structures & algorithms",
    "Databases",
  ],
};

/** Manual pin / priority for GitHub repo cards (by repo name) */
export const githubRepoPriority: Record<string, number> = {
  PizzaOnCall: 100,
  "1aryantyagi.github.io": 10,
};

export const aiKeywords =
  /\b(ai|ml|llm|langchain|gpt|pytorch|tensorflow|transformer|rag|agent|neural|deep learning|computer vision)\b/i;
