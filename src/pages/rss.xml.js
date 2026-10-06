import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// RSS feed of published posts only (drafts never go into the feed, even in dev).
export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Shreevas M Karanth · Writing',
    description: 'Notes on backend architecture, supply-chain platforms, integration and AI-assisted engineering.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
  });
}
