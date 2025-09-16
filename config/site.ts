import type { FooterItem, MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Laoshi Village",
  nameCn: "海头老市村",
  heroSlogan: "Hello from 海头老市村",
  heroSubSlogan: "For justice, love thy neighbor, wise living, be the best you",
  heroSubSloganCn: "为正义, 爱邻居, 明智生活, 做最好的自己",
  description: "The best place to visit",
  descriptionCn: "终身学习的生态社区",
  url: "https://alan-webpage.vercel.app",
  ogImage: "https://alan-webpage.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "About",
      titleCn: "关于我们",
      items: [
        {
          title: "About",
          titleCn: "关于老市",
          href: "/about",
          description: "About Laoshi",
          items: [],
        },
        {
          title: "History",
          titleCn: "历史",
          href: "/history",
          description: "History",
          items: [],
        },
        {
          title: "Travel Information",
          titleCn: "交通信息",
          href: "/travel-information",
          description: "How to get to Laoshi",
          items: [],
        },
        // {
        //   title: "Policy Plan",
        //   titleCn: "政策计划",
        //   href: "/policy-plan",
        //   description: "老市 Policy Plan.",
        //   items: [],
        // },
        {
          title: "Contact",
          titleCn: "联系我们",
          href: "/contact",
          description: "Contact 老市.",
          items: [],
        },
        {
          title: "Appointment",
          titleCn: "预约参观",
          href: "/appointment",
          description: "Visitor Appointment",
          items: [],
        },
      ],
    },
    {
      title: "Tamarind Festival",
      titleCn: "酸豆节",
      items: [
        {
          title: "Tamarind Festival",
          titleCn: "酸豆节",
          href: "/tamarind-festival",
          description: "Tamarind Festival",
          items: [],
        },
      ],
    },
    {
      title: "News",
      titleCn: "新闻",
      items: [
        {
          title: "Events",
          titleCn: "最新活动",
          href: "/events",
          description: "Events",
          items: [],
        },
        {
          title: "Announcements",
          titleCn: "最新公告",
          href: "/announcements",
          description: "Announcements",
          items: [],
        },
        {
          title: "Articles",
          titleCn: "文章",
          href: "/articles",
          description: "Article",
          items: [],
        },
      ],
    },
    {
      title: "Programs",
      titleCn: "社区营造项目",
      items: [
        {
          title: "Education Hub",
          titleCn: "教育中心",
          href: "/education-hub",
          description: "The education hub of the community",
          items: [],
        },
        // {
        //   title: "Elder Care",
        //   titleCn: "老人关怀",
        //   href: "/elder-care",
        //   description: "Elder Care",
        //   items: [],
        // },
        // {
        //   title: "Kid Care",
        //   titleCn: "儿童关怀",
        //   href: "/kid-care",
        //   description: "Kid Care",
        //   items: [],
        // },
        // {
        //   title: "Mental Care",
        //   titleCn: "心理关怀",
        //   href: "/mental-care",
        //   description: "Mental Care",
        //   items: [],
        // },
        {
          title: "Ecologic and Diversity Livelihoods",
          titleCn: "生态与多元生计",
          href: "/ecology-diversity",
          description: "Ecologic and Diversity Livelihoods",
          items: [],
        },
        {
          title: "Library",
          titleCn: "图书馆",
          href: "/library",
          description: "Library",
          items: [],
        },
        {
          title: "Laoshi Salt Conservation Center",
          titleCn: "老市盐保育中心",
          href: "/salt-conservation-center",
          description: "Laoshi Salt Conservation Center",
          items: [],
        },
      ],
    },
    {
      title: "Nature School",
      titleCn: "老市自然学校",
      items: [
        {
          title: "Introduction to Nature School",
          titleCn: "自然学校介绍",
          href: "/nature-school",
          description: "Introduction to Nature School",
          items: [],
        },
        {
          title: "Activities & Courses",
          titleCn: "全部活動",
          href: "/activities-at-nature-school",
          description: "Activities & Courses",
          items: [],
        },
        // {
        //   title: "Calendar",
        //   titleCn: "活動日誌",
        //   href: "/calendar-at-nature-schol",
        //   description: "Calendar",
        //   items: [],
        // },
      ],
    },
    {
      title: "Support Us",
      titleCn: "支持我们",
      items: [
        {
          title: "Donate",
          titleCn: "捐款",
          href: "/donate",
          description: "Donate",
          items: [],
        },
        {
          title: "Volunteer",
          titleCn: "志愿者",
          href: "/volunteer",
          description: "Volunteer",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  footerNav: [
    {
      title: "Volunteers Wanted",
      titleCn: "志愿者招募",
      href: "/",
      description: "Join us to build the community!",
      descriptionCn: "定义你的青春, 突破自己的框架；来与我们一起社区营造吧！",
    },
    {
      title: "Donation",
      titleCn: "捐款支持",
      href: "/about",
      description: "Support us with your donation!",
      descriptionCn:
        "爱惜乡土, 积少成多, 卷起衣袖赞助我们；改变, 让你我都看得见。",
    },
    {
      title: "Visiting Appointment",
      titleCn: "参访预约",
      href: "/blog",
      description: "Make an appointment to visit and explore Laoshi Village",
      descriptionCn: "预约参观, 探索老市村, 发掘这片土地上你从未接触过的感动",
    },
  ] satisfies FooterItem[],
};
