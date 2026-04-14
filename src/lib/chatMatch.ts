import Fuse from "fuse.js";
import { chatChunks, chatFallback } from "../data/chatKnowledge";

const fuse = new Fuse(chatChunks, {
  keys: [
    { name: "title", weight: 0.3 },
    { name: "body", weight: 0.4 },
    { name: "keywords", weight: 0.3 },
  ],
  threshold: 0.45,
  ignoreLocation: true,
});

export function matchChatQuery(query: string): { answer: string; sources: string[] } {
  const q = query.trim();
  if (!q) {
    return { answer: chatFallback, sources: [] };
  }

  const results = fuse.search(q, { limit: 3 });
  if (results.length === 0) {
    return { answer: chatFallback, sources: [] };
  }

  const best = results[0];
  if (best.score !== undefined && best.score > 0.55) {
    return { answer: chatFallback, sources: [] };
  }

  const top = results.slice(0, 2).map((r) => r.item);
  const answer = top.map((c) => c.body).join("\n\n");
  return {
    answer,
    sources: top.map((c) => c.title),
  };
}
