export type ChatChunk = {
  id: string;
  title: string;
  body: string;
  keywords: string[];
};

export const chatChunks: ChatChunk[] = [
  {
    id: "intro",
    title: "Introduction",
    keywords: ["who", "aryan", "intro", "background", "hello", "hi", "engineer"],
    body: `Aryan Tyagi is an AI Engineer focused on LLMs, multi-agent systems, RAG, and production ML. He works on real customer problems — including warehouse optimization with a Fortune 25 retailer — and ships end-to-end systems (APIs, agents, data, evaluation).`,
  },
  {
    id: "intelera",
    title: "IntelERA & Home Depot",
    keywords: ["intelera", "homedepot", "home depot", "warehouse", "sorting", "roberta", "bigquery", "adk", "rag", "fortune"],
    body: `At IntelERA, Aryan works with The Home Depot (Fortune 25) on warehouse order sorting and productivity. He built an ADK-based multi-agent system with business rules and RAG, integrated with Google BigQuery. He trained a RoBERTa model on historical operational data to predict sorting strategies, improving throughput and accuracy.`,
  },
  {
    id: "medical",
    title: "Medical LLMs",
    keywords: ["medical", "clinical", "92", "accuracy", "llama", "gpt-4", "diagnostic", "ner"],
    body: `As an AIML Intern at IntelERA, Aryan fine-tuned medical-domain LLMs (LLaMA-3, GPT-4) and built a RAG-based diagnostic assistant with NER and relation extraction pipelines — achieving 92%+ accuracy on the assistant objective. Stack: FastAPI, LangChain, Azure, explainable AI.`,
  },
  {
    id: "drema",
    title: "Drema AI — auto apply",
    keywords: ["drema", "job", "apply", "playwright", "selenium", "linkedin", "resume"],
    body: `At Drema AI, Aryan built an auto job-apply system: LangChain extracts roles from resumes, searches LinkedIn, MyWorkdayJobs, and Naukri, and automates applications using OpenAI, Selenium, and Playwright.`,
  },
  {
    id: "hindi",
    title: "Hindi chatbot",
    keywords: ["hindi", "futurix", "azure", "llama", "multilingual", "chatbot"],
    body: `At FuturixAI & Quantum Works, Aryan developed a Hindi chatbot using Unsloth LLaMA 3 with NLP, TensorFlow, FastAPI, and Azure for scalable deployment.`,
  },
  {
    id: "drdo",
    title: "DRDO research",
    keywords: ["drdo", "eeg", "parkinson", "fft", "research", "inmas", "lstm", "rnn"],
    body: `At INMAS (DRDO), Aryan applied ML to EEG data with FFT features, built RNN/LSTM models for cognitive state classification, and Parkinson’s vs healthy classification using signal processing and deep learning.`,
  },
  {
    id: "pizza",
    title: "PizzaOnCall",
    keywords: ["pizza", "twilio", "voice", "flask", "razorpay", "ordering"],
    body: `PizzaOnCall is a voice + web pizza ordering system: Flask, Twilio, LangChain + GPT-3.5-turbo for NLU and cart flows, and Razorpay for payments. GitHub: github.com/1aryantyagi/PizzaOnCall`,
  },
  {
    id: "mindware",
    title: "Mindware AI Sales Assistant",
    keywords: ["mindware", "sales", "gpt-4", "multi-agent", "react", "mysql"],
    body: `Mindware AI Sales Assistant is a multi-agent GPT-4 system for voice and text: intent understanding, recommendations, and streamlined support — Flask backend, React frontend, MySQL.`,
  },
  {
    id: "skills",
    title: "Skills",
    keywords: ["skills", "stack", "python", "langchain", "fastapi", "azure", "tools"],
    body: `Core stack: Python, LangChain, FastAPI, Flask, Azure, BigQuery, Playwright/Selenium, transformers/RoBERTa, GPT/LLaMA-class models, multi-agent orchestration, RAG, and classical ML (scikit-learn, signal processing).`,
  },
  {
    id: "education",
    title: "Education",
    keywords: ["education", "degree", "university", "ggsipu", "college", "btech"],
    body: `B.Tech in AI & ML from University School of Automation and Robotics, GGSIPU Delhi (July 2025). Coursework includes ML, DSA, software engineering, OS, and databases.`,
  },
  {
    id: "contact",
    title: "Contact",
    keywords: ["contact", "email", "hire", "reach", "linkedin", "github"],
    body: `Email: 1aryantyagi@gmail.com · GitHub: github.com/1aryantyagi · This site includes a downloadable CV and project deep-dives.`,
  },
];

export const chatFallback =
  "I can answer questions about Aryan’s experience (IntelERA / Home Depot, medical LLMs, Drema, DRDO), projects like PizzaOnCall and Mindware, and tech stack. Try: “What did you build at IntelERA?” or “Tell me about PizzaOnCall.”";
