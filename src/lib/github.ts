export interface RepoStats {
  stars: number;
  forks: number;
  description: string;
}

export interface ProjectData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  url?: string;
  repo: string;
  techStack: string[];
  category: string;
  featured: boolean;
  sortOrder: number;
  stars?: number;
  forks?: number;
  githubDescription?: string;
}

/**
 * Fetch repository statistics from the GitHub API.
 *
 * Uses the GITHUB_TOKEN environment variable for authenticated requests
 * (higher rate limit in CI). Returns null on any failure to ensure
 * graceful degradation.
 */
export async function fetchRepoStats(
  repo: string,
): Promise<RepoStats | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "cevheri.github.io-build",
    };

    const token =
      import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${repo}`,
      { headers },
    );

    if (!response.ok) {
      console.warn(
        `[github] Failed to fetch stats for ${repo}: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const data = await response.json();

    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      description: data.description ?? "",
    };
  } catch (error) {
    console.warn(`[github] Error fetching stats for ${repo}:`, error);
    return null;
  }
}

/**
 * Enrich an array of project entries with live GitHub statistics.
 * Projects that fail to fetch stats retain their existing values.
 */
export async function enrichProjects<T extends ProjectData>(
  projects: T[],
): Promise<T[]> {
  const enriched = await Promise.all(
    projects.map(async (project) => {
      const stats = await fetchRepoStats(project.repo);
      if (!stats) return project;

      return {
        ...project,
        stars: stats.stars,
        forks: stats.forks,
        githubDescription: stats.description || project.githubDescription,
      };
    }),
  );

  return enriched;
}
