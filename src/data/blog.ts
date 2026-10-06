import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Drafts are hidden everywhere (dev, build, RSS). To preview them locally, run: SHOW_DRAFTS=true npm run dev
const showDrafts = import.meta.env.DEV && process.env.SHOW_DRAFTS === 'true';

/** Published posts, newest first. Posts with `draft: true` are left out (no list entry, no page). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export const readingTime = (body = '') =>
  `${Math.max(1, Math.round(body.trim().split(/\s+/).length / 200))} min read`;
