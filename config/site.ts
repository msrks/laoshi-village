import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "海头老市村",
  // name: "Laoshi Village",
  heroSlogan: "Hello from 海头老市村",
  description: "The best place to visit",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  mainNav: [
    {
      // title: "About",
      title: "关于我们",
      items: [
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
        // {
        //   title: "Nature School",
        //   href: "/nature-school",
        //   description: "自然学校",
        //   items: [],
        // },
      ],
    },

    // title: "Salt History",
    // items: [
    //   {
    //     title: "Historical Background",
    //     href: "/history-en",
    //     description: "歴史背景",
    //     items: [],
    //   },
    //   {
    //     title: "Seasalt Making Process",
    //     href: "/seasalt-making-process-en",
    //     description: "制盐过程",
    //     items: [],
    //   },
    //   {
    //     title: "Health Benefit of Sea Salt",
    //     href: "/health-benefit-en",
    //     description: "传统海盐对健康的益处",
    //     items: [],
    //   },
    //   {
    //     title: "Laoshi Salt Conservation Center",
    //     href: "/salt-conservation-center-en",
    //     description: "老市挝石盐保护中心",
    //     items: [],
    //   },
    // ],
    {
      // title: "Events",
      title: "最新活动",
      items: [
        {
          title: "Events",
          href: "/events",
          description: "Latest Events",
          items: [],
        },
        {
          title: "Education Hub",
          href: "/education-hub",
          description: "The education hub of the community",
          items: [],
        },
      ],
    },
    {
      // title: "Programs",
      title: "社区营造项目",
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
      // title: "???",
      title: "老市自然学校",
      items: [
        {
          title: "Nature School",
          href: "/nature-school",
          description: "自然学校",
          items: [],
        },
        {
          title: "Ecologic and Diversity Livelihoods",
          href: "/ecology-diversity",
          description: "..",
          items: [],
        },
        {
          title: "Library",
          href: "/library",
          description: "Library of 老市.",
          items: [],
        },
      ],
    },
    {
      // title: "Support Us",
      title: "支持我们",
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
