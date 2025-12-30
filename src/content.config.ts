import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            heroImage: image().optional(),
        }),
});

export const collections = { blog };