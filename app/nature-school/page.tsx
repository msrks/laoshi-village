import * as React from "react";
import { type Metadata } from "next";
import { allEvents } from "contentlayer/generated";

import { Separator } from "@/components/ui/separator";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { EventCard } from "./_components/event-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Palmtree } from "lucide-react";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const minorLinks = [
  {
    imgSrc: "/cafe.jpeg",
    title: "Mayor Class",
    href: "/mayor-class",
  },
  {
    imgSrc: "/salt-farm.jpeg",
    title: "Another Guys Class",
    href: "/farm",
  },
  {
    imgSrc: "/salt-farm.jpeg",
    title: "Another Guys Class",
    href: "/farm",
  },
  {
    imgSrc: "/salt-farm.jpeg",
    title: "Another Guys Class",
    href: "/farm",
  },
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
];

const minorLinks2 = [
  {
    imgSrc: "/cafe.jpeg",
    title: "Activity 1",
    href: "/contact",
  },
  {
    imgSrc: "/cafe.jpeg",
    title: "Activity 1",
    href: "/cafe",
  },
  {
    imgSrc: "/cafe.jpeg",
    title: "Activity 1",
    href: "/cafe",
  },
  {
    imgSrc: "/cafe.jpeg",
    title: "Activity 1",
    href: "/cafe",
  },

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
];

export default function BlogPage() {
  const events = allEvents
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="w-full max-w-[1400px] relative">
        <AspectRatio ratio={16 / 6}>
          <Image
            src="/tamarind.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          Nature School
        </PageHeaderHeading>
        <div className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          perferendis adipisci molestiae accusamus dolor quis molestias natus
          aliquam consequatur. Mollitia dignissimos repellat nulla repudiandae
          necessitatibus nesciunt qui quis recusandae voluptatem!
          {/* <Button asChild variant="link">
            <Link
              href="/pdf/livelihoods-en.pdf"
              className="md:text-lg"
              target="_blank"
            >
              Read More
            </Link>
          </Button> */}
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          Past Events Feedbacks
        </PageHeaderHeading>
        <div className="md:text-lg">
          <Button asChild variant="link" className="underline">
            <Link
              href="https://mp.weixin.qq.com/s/QOGtKsTm1BGtyj6_ITvOvA"
              className="md:text-lg"
              target="_blank"
            >
              海童会 : 我们如何在村庄学习，在不同的文化与大自然中吸取能量。
            </Link>
          </Button>
        </div>
      </div>

      <div className="container grid grid-cols-2">
        <div className=" flex flex-col lg:flex-row gap-6 my-6">
          <PageHeaderHeading className="flex-none lg:max-w-[250px]">
            Members of Team
          </PageHeaderHeading>
          <div className="md:text-lg">
            <div>organization-1</div>
            <div>organization-2</div>
            <div>organization-3</div>
            <div>organization-3</div>
            <div>organization-3</div>
            <div>organization-3</div>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-6 my-6">
          <PageHeaderHeading className="flex-none lg:max-w-[250px]">
            List of Experts
          </PageHeaderHeading>
          <div className="md:text-lg">
            <div>expert-1</div>
            <div>expert-2</div>
            <div>expert-3</div>
            <div>expert-3</div>
            <div>expert-3</div>
            <div>expert-3</div>
          </div>
        </div>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {minorLinks.map((m, i) => (
            <Link
              href={m.href}
              className="col-span-1 relative group overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                <h1 className="text-xl font-bold text-white text-center p-2">
                  {m.title}
                </h1>
              </div>
              <AspectRatio ratio={16 / 13}>
                <Image
                  src={m.imgSrc}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105"
                  priority
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </section>

      <Separator className="my-4 container" />

      <div className="container mx-auto  my-6 w-full text-center">
        <PageHeaderHeading className="flex-none w-full mx-auto">
          Activities in Laoshi
        </PageHeaderHeading>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {minorLinks2.map((m, i) => (
            <div key={i}>
              <Link
                href={m.href}
                className="col-span-1 relative group overflow-hidden"
              >
                <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                  <h1 className="text-xl font-bold text-white text-center p-2">
                    {m.title}
                  </h1>
                </div>
                <AspectRatio ratio={16 / 13}>
                  <Image
                    src={m.imgSrc}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105"
                    priority
                  />
                </AspectRatio>
              </Link>
              <div>
                description of activity : Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Explicabo eligendi adipisci iusto aspernatur.
                Molestiae quod possimus sit neque expedita nostrum laudantium
                excepturi maiores minima harum et totam, molestias eos deserunt.
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {events.map((event, i) => (
            <EventCard key={event.slug} event={event} i={i} />
          ))}
        </React.Suspense>
      </section> */}
    </>
  );
}
