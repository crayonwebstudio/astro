import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    excerpt: z.string().optional(),
    pubDate: z.date(),
    readingTime: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    author: z.string().default('Dylan van den Bosch'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
