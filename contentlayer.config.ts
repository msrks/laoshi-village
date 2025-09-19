import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";
import fs from "fs";
import ogs from "open-graph-scraper";
import path from "path";

// メタデータキャッシュを読み込む関数
function loadMetadataCache() {
  try {
    const cacheFile = path.join(
      process.cwd(),
      "content/announcements-metadata.json"
    );
    if (fs.existsSync(cacheFile)) {
      const data = fs.readFileSync(cacheFile, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn("Failed to load metadata cache:", error);
  }
  return {};
}

async function fetchOpenGraphData(url: string) {
  // まずキャッシュをチェック
  const cache = loadMetadataCache();
  if (cache[url]) {
    const cached = cache[url];
    return {
      ogImage: cached.image ? { url: cached.image } : null,
      ogDescription: cached.description,
      ogTitle: cached.title,
      author: cached.author,
      ogSiteName: cached.author,
    };
  }

  // キャッシュにない場合は従来通り取得
  try {
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
    image: { type: "string" },
    description: { type: "string" },
    title: { type: "string" },
    author: { type: "string" },
  },
  computedFields: {
    ...baseComputedFields,
    // frontmatterにメタデータがある場合はそれを使用、なければOpenGraphから取得
    image: {
      type: "string" as const,
      resolve: async (doc: any) => {
        if (doc.image) return doc.image;
        const result = await fetchOpenGraphData(doc.url);
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
        if (doc.description) return doc.description;
        const result = await fetchOpenGraphData(doc.url);
        return result.ogDescription;
      },
    },
    title: {
      type: "string" as const,
      resolve: async (doc: any) => {
        if (doc.title) return doc.title;
        const result = await fetchOpenGraphData(doc.url);
        return result.ogTitle;
      },
    },
    author: {
      type: "string" as const,
      resolve: async (doc: any) => {
        if (doc.author) return doc.author;
        const result = await fetchOpenGraphData(doc.url);
        return result.author || result.ogSiteName;
      },
    },
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
