import { useCallback, useEffect, useState } from "react";
import { aiKeywords, githubRepoPriority } from "../data/resume";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  pushed_at: string;
  language: string | null;
  topics: string[];
  homepage: string | null;
};

const CACHE_KEY = "gh_repos_cache_v1";
const TTL_MS = 1000 * 60 * 45;

type CacheShape = { at: number; repos: GitHubRepo[] };

function scoreRepo(r: GitHubRepo): number {
  const pri = githubRepoPriority[r.name] ?? 0;
  const stars = r.stargazers_count * 3;
  const pushed = new Date(r.pushed_at).getTime();
  const recency = Math.min(1, (pushed - Date.UTC(2020, 0)) / 1e11) * 20;
  const text = `${r.name} ${r.description ?? ""} ${r.topics.join(" ")}`;
  const aiBonus = aiKeywords.test(text) ? 25 : 0;
  return pri + stars + recency + aiBonus;
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed: CacheShape = JSON.parse(raw);
        if (Date.now() - parsed.at < TTL_MS && parsed.repos?.length) {
          setRepos([...parsed.repos].sort((a, b) => scoreRepo(b) - scoreRepo(a)));
          setLoading(false);
          return;
        }
      }
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
      );
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const data: GitHubRepo[] = await res.json();
      const mapped = data.map((r) => {
        const row = r as GitHubRepo & { topics?: string[] };
        return {
          ...r,
          topics: row.topics ?? [],
        };
      });
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos: mapped }));
      setRepos([...mapped].sort((a, b) => scoreRepo(b) - scoreRepo(a)));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load repos");
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    void load();
  }, [load]);

  return { repos, loading, error, reload: load };
}
