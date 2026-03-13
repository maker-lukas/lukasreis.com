import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Lukas Reis',
    description: 'test description',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
  });
}