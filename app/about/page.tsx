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

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const minorLinks = [
  {
    imgSrc: "/hero_temple.jpeg",
    title: "History, What to see and do",
    href: "/history-en",
  },
  {
    imgSrc: "/hero_organization.jpeg",
    title: "Village organization",
    href: "",
  },
  {
    imgSrc: "/hero_woman.jpeg",
    title: "Annual events",
    href: "",
  },
  {
    imgSrc: "/hero_volunteer.jpeg",
    title: "Volunteers wanted",
    href: "",
  },
  {
    imgSrc: "/hero_woman.jpeg",
    title: "Article about us",
    href: "",
  },
  {
    imgSrc: "/hero_woman.jpeg",
    title: "Finantial Reoprt",
    href: "",
  },
  {
    imgSrc: "/hero_woman.jpeg",
    title: "Donations",
    href: "",
  },
  {
    imgSrc: "/hero_travel_information.jpeg",
    title: "Travel Informations",
    href: "/travel-information",
  },
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
            src="/hero_about.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          Introduction to Laoshi Village
        </PageHeaderHeading>
        <div className="md:text-lg">
          老市村, located in 海头镇 of 儋州市, transitioned from its traditional
          salt farming to become a beacon of ecological sustainability and
          community renewal. The village faced ecological and social decline due
          to the shift from salt fields to shrimp ponds in the 1990s, leading to
          environmental damage and an aging population. In response, the
          海南省蓝丝带海洋环境保护协会 initiated a restoration project,
          rehabilitating wetlands, planting mangroves, and promoting community
          involvement in conservation. Efforts expanded to cultural and economic
          revitalization, including the revival of ancient salt farming
          integrated with eco-tourism. These initiatives have earned
          international recognition, showcasing a successful model of combining
          ecological conservation with economic and cultural development for
          rural vitality.
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
