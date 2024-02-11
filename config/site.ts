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
          description: "History of Laoshi Villadge.",
          items: [],
        },
        {
          title: "Access",
          href: "/access",
          description: "How to get to Laoshi Villadge.",
          items: [],
        },
        {
          title: "Magazine",
          href: "/magazine",
          description: "Laoshi Villadge Magazine.",
          items: [],
        },
        {
          title: "Policy Plan",
          href: "/policy-plan",
          description: "Laoshi Villadge Policy Plan.",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Contact Laoshi Villadge.",
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
          description: "Elder Care of Laoshi Villadge.",
          items: [],
        },
        {
          title: "Kid Care",
          href: "/kid-care",
          description: "Kid Care of Laoshi Villadge.",
          items: [],
        },
        {
          title: "Mental Care",
          href: "/mental-care",
          description: "Mental Care of Laoshi Villadge.",
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
          description: "Library of Laoshi Villadge.",
          items: [],
        },
        {
          title: "Business",
          href: "/buisness",
          description: "Business of Laoshi Villadge.",
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
          description: "Donate to Laoshi Villadge.",
          items: [],
        },
        {
          title: "Volunteer",
          href: "/volunteer",
          description: "Volunteer to Laoshi Villadge.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Laoshi Villadge",
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
