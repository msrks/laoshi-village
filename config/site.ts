import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
};

export const siteConfig = {
  name: "Laoshi Village",
  description: "The best place to visit",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "About",
      items: [
        {
          title: "History",
          href: "/history",
          description: "History of 老市.",
          items: [],
        },
        {
          title: "Travel Information",
          href: "/travel-information",
          description: "How to get to 老市.",
          items: [],
        },
        {
          title: "Article",
          href: "/article",
          description: "老市 Article.",
          items: [],
        },
        {
          title: "Policy Plan",
          href: "/policy-plan",
          description: "老市 Policy Plan.",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Contact 老市.",
          items: [],
        },
        {
          title: "Appointment",
          href: "/appointment",
          description: "Visitor Appointment",
          items: [],
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          title: "Events",
          href: "/events",
          description: "Latest Events",
          items: [],
        },
      ],
    },
    {
      title: "Programs",
      items: [
        {
          title: "Elder Care",
          href: "/elder-care",
          description: "Elder Care of 老市.",
          items: [],
        },
        {
          title: "Kid Care",
          href: "/kid-care",
          description: "Kid Care of 老市.",
          items: [],
        },
        {
          title: "Mental Care",
          href: "/mental-care",
          description: "Mental Care of 老市.",
          items: [],
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Library",
          href: "/library",
          description: "Library of 老市.",
          items: [],
        },
        {
          title: "Business",
          href: "/buisness",
          description: "Business of 老市.",
          items: [],
        },
      ],
    },
    {
      title: "Support Us",
      items: [
        {
          title: "Donate",
          href: "/donate",
          description: "Donate to 老市.",
          items: [],
        },
        {
          title: "Volunteer",
          href: "/volunteer",
          description: "Volunteer to 老市.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "老市",
      items: [
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
