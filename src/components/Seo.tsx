import { Helmet } from "react-helmet-async";
import { site } from "../data/resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      jobTitle: "AI Engineer",
      url: site.url,
      email: site.email,
      sameAs: [site.github, site.linkedin, site.kaggle],
      knowsAbout: [
        "Large Language Models",
        "Machine Learning",
        "Multi-agent systems",
        "Retrieval Augmented Generation",
      ],
    },
    {
      "@type": "WebSite",
      name: `${site.name} — Portfolio`,
      url: site.url,
      description: site.tagline,
    },
  ],
};

export function Seo() {
  return (
    <Helmet>
      <html lang="en" />
      <title>{site.name} | AI Engineer · LLM Engineer · Machine Learning Engineer</title>
      <meta
        name="description"
        content="Aryan Tyagi — AI Engineer and LLM Engineer building multi-agent systems, RAG pipelines, RoBERTa optimization, and intelligent automation for Fortune-scale retail and healthcare."
      />
      <meta
        name="keywords"
        content="AI Engineer, LLM Engineer, Machine Learning Engineer, RAG, multi-agent, LangChain, Aryan Tyagi"
      />
      <link rel="canonical" href={site.url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.url} />
      <meta
        property="og:title"
        content={`${site.name} | AI Engineer · LLM Engineer`}
      />
      <meta
        property="og:description"
        content={site.tagline}
      />
      <meta property="og:image" content={`${site.url}/og-image.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${site.name} | AI Engineer`} />
      <meta name="twitter:description" content={site.tagline} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
