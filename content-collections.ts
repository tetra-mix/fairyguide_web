import { defineCollection, defineConfig } from "@content-collections/core";

const contents = defineCollection({
  name: "Contents",
  directory: "src/app/contents",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    month: z.number(),
    day: z.number()
  }),
});
 
export default defineConfig({
  collections: [contents],
});