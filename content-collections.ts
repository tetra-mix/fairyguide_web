import { defineCollection, defineConfig } from "@content-collections/core";

const contents = defineCollection({
  name: "Contents",
  directory: "src/contents",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    month: z.number(),
    day: z.number(),
  }),
  transform: (doc) => {
    return {
      ...doc,
      image: `./Article/${doc._meta.path}.jpg`,
    };
  },
});

export default defineConfig({
  collections: [contents],
});
