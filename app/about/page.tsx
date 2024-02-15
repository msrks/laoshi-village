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
    href: "/history",
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
    <Shell className="md:pb-10">
      <div className="container relative">
        <AspectRatio ratio={16 / 5}>
          <Image
            src="/hero_about.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>
      <div className="flex space-x-6">
        <PageHeaderHeading className="flex-none">
          Introduction to
          <br /> Laoshi Village
        </PageHeaderHeading>
        <div className="text-lg">
          老市村, located in 海头镇 of 儋州市, has embarked on an ecological
          revival journey, transforming from its traditional salt production
          roots to a model of environmental sustainability and community
          revitalization. Historically, the village thrived on salt farming, but
          the conversion of salt fields to shrimp ponds in the 1990s led to
          ecological degradation, loss of biodiversity, and a decline in
          community vitality. The shift not only resulted in pollution but also
          left the village without a sustainable economic base, driving the
          younger population to seek employment elsewhere and leading to a
          demographic shift towards an aging and diminished population. In
          response to these challenges, the 海南省蓝丝带海洋环境保护协会
          initiated an ecological restoration project, focusing on wetland
          restoration and waste management. The project involved the
          comprehensive restoration of 1800 square meters of mangrove wetlands,
          planting 6000 mangrove saplings, and establishing a mangrove
          women&apos;s patrol team to empower local women and engage the
          community in conservation efforts. The initiative also included
          educational programs to raise environmental awareness and promote
          waste
          {/* segregation among villagers. The revitalization efforts extend beyond
          ecological restoration to include cultural and economic development.
          The village is exploring the revival of its salt farming heritage by
          restoring ancient salt fields and integrating them into eco-tourism
          and educational projects. This not only preserves the traditional
          craftsmanship of salt production but also offers new livelihood
          opportunities for villagers, aligning with the broader vision of
          turning "green waters and mountains into gold and silver mountains," a
          Chinese concept emphasizing the economic value of environmental
          conservation. These efforts have garnered recognition, with the
          village's project being selected as one of the "Biodiversity 100+
          Global Typical Cases" by the United Nations Convention on Biological
          Diversity. This acknowledgment highlights the village's commitment to
          biodiversity conservation and sustainable development. The
          collaborative approach, involving government support, non-profit
          organizations, and community engagement, serves as a model for rural
          revitalization. It showcases the potential of integrating ecological
          conservation with cultural preservation and economic development to
          create resilient and vibrant rural communities. */}
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 gap-2">
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
    </Shell>
  );
}
