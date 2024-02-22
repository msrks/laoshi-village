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

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const minorLinks = [
  {
    imgSrc: "/cafe.jpeg",
    title: "Cafe",
    href: "/cafe",
  },
  {
    imgSrc: "/salt-farm.jpeg",
    title: "Farm",
    href: "/farm",
  },
  {
    imgSrc: "/hero_organization.jpeg",
    title: "Camping",
    href: "",
  },
  {
    imgSrc: "/hero_organization.jpeg",
    title: "Lodging",
    href: "",
  },
  {
    imgSrc: "/hero_organization.jpeg",
    title: "Ecological Investigation & Academic Comperation",
    href: "/ecological-investigation-and-academic-comperation",
  },
  {
    imgSrc: "/hero_organization.jpeg",
    title: "Jobs",
    href: "",
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
          Ecologic and diversity livelihoods
        </PageHeaderHeading>
        <div className="md:text-lg">
          Talking about the natural resources of LaoShi Village, there are 113
          tamarind trees, most of which are ancient trees over a hundred years
          old. They surround the residential areas of LaoShi Village, blending
          into the front streets and backyards of the village, providing
          residents with daily shade and yielding tamarind fruits year after
          year. Located to the north of LaoShi Village is the Zhu Bi River, an
          estuarine habitat where fresh and brackish waters converge. It hosts a
          variety of crabs, with a majority being fiddler crabs, as well as
          diverse shellfish, fish, and shrimp. A flat wetland area of over 300
          acres was once developed by the ancestors of LaoShi Village into salt
          fields (using ancient sand drying techniques). The former salt fields
          of LaoShi Village were registered by the Danzhou Salt Bureau, and
          during its heyday, over 30 households in the village were engaged in
          traditional salt production. At that time, the people of LaoShi
          Village relied on the salt industry for their livelihoods. Although it
          was hard work, it provided security, and life was worry-free.
          <Button asChild variant="link">
            <Link
              href="/pdf/livelihoods-en.pdf"
              className="md:text-lg"
              target="_blank"
            >
              Read More
            </Link>
          </Button>
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
