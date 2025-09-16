import { type Metadata } from "next";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { CC } from "../page";
import { Suspense } from "react";
import { EventCardSkeleton } from "../events/_components/event-card-skeleton";
import { CardDescription } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Tamarind Festival",
  description: "Tamarind Festival",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function Page({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  return (
    <>
      {/* desktop */}
      <div className="w-full max-w-[1400px] relative hidden sm:block">
        <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white text-center p-2 px-60">
            {params.cc === "cn"
              ? "老市酸豆节，连接大自然、祖先、地方社区，每年5月1号，举全村之力，迎接你的来访 "
              : "Old Town Tamarind Festival, connecting nature, ancestors, and local community, held annually on May 1st, with the entire village mobilized to welcome you."}
          </h1>
        </div>
        <AspectRatio ratio={16 / 6}>
          <Image
            src="/tamarind2025.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      {/* mobile */}
      <div className="w-full max-w-[1400px] relative  sm:hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src="/tamarind2025.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <section className="container">
        {/* navigation menu */}
        <NavigationMenu className="py-2">
          <NavigationMenuList className="flex justify-around">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/tamarind2025/schedule/2023"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          2023
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/tamarind2025/schedule/2024"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          2024
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/tamarind2025/schedule/2025"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          2025
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/tamarind2025/partners-and-exhibitors"
                  className={navigationMenuTriggerStyle()}
                >
                  Partners and Exhibitors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/tamarind2025/hotels-and-atrractions"
                  className={navigationMenuTriggerStyle()}
                >
                  Hotels and Attractions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/tamarind2025/faq"
                  className={navigationMenuTriggerStyle()}
                >
                  FAQ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* about the festival */}
        <div className="container flex flex-col gap-6 my-6">
          <PageHeaderHeading className="flex-none lg:max-w-[250px]">
            {params.cc === "cn" ? "关于酸豆节" : "About the Festival"}
          </PageHeaderHeading>
          <div>
            {params.cc === "cn"
              ? `关于酸豆节About Tarmarind Festival老市的“酸豆节”是老市村为增强居民彼此之间连接，协同外部共创伙伴生发合作的尝试。酸豆节来源于老市村长久以来的人-自然关系，村民依靠古酸豆树休憩、寻求荫蔽、获取食物，也守护着这里的酸豆树。
我们相信，相比于过度依赖外部的资源，看见我们自己的价值，并且去挖掘、唤醒它，会给我们自身的发展带来许多可能性！
同时，我们期待有这样一次社区活动，可以让人们因土地、自然、食物和人文得以相聚，并从中感知到一种不同于城市生活的生命律动以及与乡土的连接。
在劳动节之际，我们向各位对乡村、食物、好玩感兴趣的伙伴发出邀请，邀请你们来到老市村共赴这场初夏的约会！`
              : `About Tarmarind FestivalOld Town Tamarind Festival is a community event organized by Laoshi Village to strengthen connections among residents, foster collaboration with external partners, and generate new partnerships. The festival originated from the long-standing relationship between the villagers and the tamarind tree, where they rested under its shade, sought refuge, and harvested food from it.
We believe that instead of relying solely on external resources, by recognizing our own value and awakening it, we can unlock many possibilities for our own development.
We also hope that this community event will bring people together through land, nature, food, and culture, allowing them to experience a different kind of life rhythm and connection to the countryside.
During Labor Day, we invite partners interested in rural life, food, and fun to join us in this summer's gathering in Laoshi Village.`}
          </div>
        </div>

        {/* festival histories : videos and articles */}
        <div className="container flex flex-col gap-6 my-6">
          <PageHeaderHeading className="flex-none lg:max-w-[250px]">
            {params.cc === "cn" ? "酸豆节历史" : "Festival Histories"}
          </PageHeaderHeading>

          {/* articles section */}
          <div className="flex flex-col gap-6">
            {/* title of article section : articles */}
            <PageHeaderHeading className="flex-none lg:max-w-[250px]">
              {params.cc === "cn" ? "文章" : "Articles"}
            </PageHeaderHeading>
            {/* articles */}
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Suspense
                fallback={Array.from({ length: 3 }).map((_, i) => (
                  <EventCardSkeleton key={i} />
                ))}
              >
                {[
                  {
                    url: "https://mp.weixin.qq.com/s/GyonzuQcnmfZf-uVIJDu7Q",
                    title: "变化就是日常：应用戏剧工作者的乡村节日现场笔记",
                    image:
                      "https://mmbiz.qpic.cn/sz_mmbiz_jpg/DTmhl65YibribQnqeNqyCSNDO7ibr6PFCuict1Tx24CEE2ATkyo0HBUmmyn9R5lK7GLy759KP5sfqOgyeO8uYjbv0w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=7",
                    date: "2025-05-05",
                  },
                  {
                    url: "https://mp.weixin.qq.com/s/hZo-7W7_WwzkSbjg0S4EiQ",
                    title: "「海岛二三事」·让儋州被看见——老市村酸豆节",
                    image:
                      "https://mmbiz.qpic.cn/sz_mmbiz_jpg/mibHy2yNOicLliaMfuOY8UT5NkcKc8rjbtx3H4N3oSKicGk82RYISoSXyOic86A3cFkJpdRrTias2nLg01pGGic6ZcbYA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=13",
                    date: "2025-05-07",
                  },
                  {
                    url: "https://mp.weixin.qq.com/s/t1q3160DkjyRagorCyyETQ",
                    title: "“酸豆节”活动回顾｜原来土地有声音",
                    image:
                      "https://mmbiz.qpic.cn/mmbiz_jpg/ZTenUonahNm4R540QAe5clHKDpsnun3OT1wap4BNboRnVVWFf27uM0zeyPwJic1doQTq29tJrXv7RdmQSCqEH5g/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=12",
                    date: "2025-05-10",
                  },
                ].map((a, i) => (
                  <Link key={i} href={a.url}>
                    <span className="sr-only">{a.title}</span>
                    <article className="space-y-4">
                      <AspectRatio
                        ratio={16 / 9}
                        className="overflow-hidden relative"
                      >
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                          className="rounded-lg object-cover hover:scale-105"
                          priority={i <= 1}
                        />
                      </AspectRatio>
                      <div className="space-y-2">
                        <CardHeader className="space-y-2.5 p-0">
                          <CardTitle className="line-clamp-1">
                            {a.title}
                          </CardTitle>
                        </CardHeader>
                        <CardDescription>{formatDate(a.date)}</CardDescription>
                      </div>
                    </article>
                  </Link>
                ))}
              </Suspense>
            </section>
          </div>

          {/* videos section */}
          <div className="flex flex-col gap-6">
            {/* title of video section : videos */}
            <PageHeaderHeading className="flex-none lg:max-w-[250px]">
              {params.cc === "cn" ? "视频" : "Videos"}
            </PageHeaderHeading>
            {/* videos */}
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {["/1.mp4", "/3.mp4", "/2.mp4"].map((src, i) => (
                <video
                  key={i}
                  src={src}
                  className="w-full max-h-[300px]"
                  loop
                  controls
                  muted
                />
              ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
