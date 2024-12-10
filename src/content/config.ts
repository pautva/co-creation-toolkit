import { defineCollection, z } from "astro:content";

const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    img: z.string(),
    img_alt: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    organisation: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
    featured: z.boolean(),
    organisation: z.string().optional(),
    category: z.string().optional(),
  }),
});

const toolkitCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    img: z.string(),
    img_alt: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

// Define an empty schema for drafts and templates
const draftsCollection = defineCollection({
  schema: z.object({}).optional(),
});

const templatesCollection = defineCollection({
  schema: z.object({}).optional(),
});

export const collections = {
  "case-studies": caseStudiesCollection,
  "work": workCollection,
  "toolkit": toolkitCollection,
  "drafts": draftsCollection,
  "templates": templatesCollection,
};
