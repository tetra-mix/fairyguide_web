import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

const contents = defineCollection({
  name: "Contents",
  directory: "src/contents",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    month: z.number(),
    day: z.number()
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});
 
export default defineConfig({
  collections: [contents],
});