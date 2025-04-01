import chromium from "@sparticuz/chromium-min";
import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";
import ogs from "open-graph-scraper";
import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";

const remoteExecutablePath =
  "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";
let browser: any | null = null;
async function getBrowser() {
  if (browser) return browser;

  if (process.env.NEXT_PUBLIC_VERCEL_ENVIRONMENT === "production") {
    browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(remoteExecutablePath),
      headless: true,
    });
  } else {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: true,
    });
  }
  return browser;
}

async function fetchOpenGraphData(url: string) {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const content = await page.content();
    await page.close();

    const { result } = await ogs({
      html: content,
      onlyGetOpenGraphInfo: true,
    });
    return result;
  } catch (error) {
    console.error(`Failed to fetch OpenGraph data for ${url}:`, error);
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
      return result.ogImage?.[0]?.url || null;
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
        return result.ogImage?.[0]?.url || null;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Event, Page, Article, Announcement, Activity],
});
