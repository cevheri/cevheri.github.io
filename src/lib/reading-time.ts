const WORDS_PER_MINUTE = 200;

/**
 * Calculate the estimated reading time for a given text content.
 *
 * Strips MDX/Markdown syntax artifacts before counting words.
 * Assumes an average reading speed of 200 words per minute.
 *
 * @returns A human-readable string like "3 min read"
 */
export function calculateReadingTime(content: string): string {
  // Strip common MDX/Markdown artifacts for a cleaner word count
  const cleaned = content
    .replace(/```[\s\S]*?```/g, "") // fenced code blocks
    .replace(/`[^`]*`/g, "") // inline code
    .replace(/import\s+.*?from\s+['"].*?['"]/g, "") // import statements
    .replace(/<[^>]+>/g, "") // HTML/JSX tags
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1") // links (keep text)
    .replace(/#{1,6}\s/g, "") // headings
    .replace(/[*_~]+/g, "") // bold, italic, strikethrough markers
    .replace(/---+/g, "") // horizontal rules
    .replace(/>\s/g, "") // blockquotes
    .trim();

  const words = cleaned.split(/\s+/).filter((word) => word.length > 0);
  const minutes = Math.max(1, Math.ceil(words.length / WORDS_PER_MINUTE));

  return `${minutes} min read`;
}
