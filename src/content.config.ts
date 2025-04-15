// Import glob loader
import { glob } from "astro/loaders";
// Import utils from astro:content
import { z, defineCollection } from "astro:content";
// Define a loader and schema for each collection
const journal = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog/journals" }),
    schema: z.object({
        title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string())
    })
});
const moodJournal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog/daily-mood-journals" }),
  schema: z.object({
      title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog/' }),
  schema: z.object({
      title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});
// Export a single collections object to register your collection(s)
export const collections = { journal, moodJournal, blog };