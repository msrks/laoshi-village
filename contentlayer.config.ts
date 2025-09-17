import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";
import ogs from "open-graph-scraper";

async function fetchOpenGraphData(url: string) {
  try {
    // Use the simple approach without browser
    console.log(`Attempting OpenGraph fetch for ${url}`);
    const { result } = await ogs({
      url: url,
      onlyGetOpenGraphInfo: true,
      timeout: {
        request: 10000,
      },
    });
    return result;
  } catch (error) {
    console.error(`OpenGraph fetch failed for ${url}:`, error);

    return {
      ogImage: null,
      ogDescription: null,
      ogTitle: null,
      author: null,
      ogSiteName: null,
    };
  }
}

// Shared computed fields
const baseComputedFields: ComputedFields = {
  slug: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "number",
    resolve: (doc) => {
      const content = doc.body.raw as string;
      const wordsPerMinute = 50;
      const numberOfWords = content.split(/\s/g).length;
      return Math.ceil(numberOfWords / wordsPerMinute);
    },
  },
};

// Shared OpenGraph computed fields
const createOpenGraphFields = (urlField: string) => ({
  image: {
    type: "string" as const,
    resolve: async (doc: any) => {
      const result = await fetchOpenGraphData(doc[urlField]);
      if (Array.isArray(result.ogImage)) {
        return result.ogImage[0]?.url || null;
      }
      if (typeof result.ogImage === "string") {
        return result.ogImage;
      }
      return result.ogImage?.url || null;
    },
  },
  description: {
    type: "string" as const,
    resolve: async (doc: any) => {
      const result = await fetchOpenGraphData(doc[urlField]);
      return result.ogDescription;
    },
  },
  title: {
    type: "string" as const,
    resolve: async (doc: any) => {
      const result = await fetchOpenGraphData(doc[urlField]);
      return result.ogTitle;
    },
  },
  author: {
    type: "string" as const,
    resolve: async (doc: any) => {
      const result = await fetchOpenGraphData(doc[urlField]);
      return result.author || result.ogSiteName;
    },
  },
});

// Document type definitions
export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    image: { type: "string" },
    date: { type: "date", required: true },
  },
  computedFields: baseComputedFields,
}));

export const Announcement = defineDocumentType(() => ({
  name: "Announcement",
  filePathPattern: `announcements/**/*.mdx`,
  contentType: "mdx",
  fields: {
    date: { type: "date", required: true },
    url: { type: "string", required: true },
  },
  computedFields: {
    ...baseComputedFields,
    ...createOpenGraphFields("url"),
  },
}));

export const Activity = defineDocumentType(() => ({
  name: "Activity",
  filePathPattern: `activities-at-nature-school/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    dateList: { type: "string", required: true },
    time: { type: "string" },
    location: { type: "string" },
    age: { type: "string" },
    capacity: { type: "string" },
    fee: { type: "string" },
    requirements: { type: "string" },
    organizer: { type: "string" },
    keywords: { type: "string" },
    theme: { type: "string" },
    instructor: { type: "string" },
    transportation: { type: "string" },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true },
  },
  computedFields: {
    ...baseComputedFields,
    dateItems: {
      type: "list",
      resolve: (doc) => doc.dateList.split(",").map((d) => new Date(d)),
    },
  },
}));

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `articles/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true },
  },
  computedFields: baseComputedFields,
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `events/**/*.mdx`,
  contentType: "mdx",
  fields: {
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    externalLink: { type: "string" },
  },
  computedFields: {
    ...baseComputedFields,
    ...createOpenGraphFields("externalLink"),
    ogImage: {
      type: "string",
      resolve: async (doc: any) => {
        if (!doc.externalLink) return null;
        const result = await fetchOpenGraphData(doc.externalLink);
        if (Array.isArray(result.ogImage)) {
          return result.ogImage[0]?.url || null;
        }
        if (typeof result.ogImage === "string") {
          return result.ogImage;
        }
        return result.ogImage?.url || null;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Event, Page, Article, Announcement, Activity],
});
