import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
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
      const minutes = numberOfWords / wordsPerMinute;
      return Math.ceil(minutes);
    },
  },
};

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
  computedFields,
}));

export const Announcement = defineDocumentType(() => ({
  name: "Announcement",
  filePathPattern: `announcements/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true },
  },

  computedFields,
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
    ...computedFields,
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

  computedFields,
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: `events/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true },
    externalLink: { type: "string" },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Event, Page, Article, Announcement, Activity],
});
