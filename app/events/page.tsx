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

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

export default function BlogPage() {
  const events = allEvents
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Shell className="md:pb-10">
      <PageHeader>
        <PageHeaderHeading>Events</PageHeaderHeading>
        <PageHeaderDescription>
          Explore the latest news and updates from the community
        </PageHeaderDescription>
      </PageHeader>
      <Separator className="mb-2.5" />
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <React.Suspense
          fallback={Array.from({ length: 4 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {events.map((event, i) => (
            <EventCard key={event.slug} event={event} i={i} />
          ))}
        </React.Suspense>
      </section>
    </Shell>
  );
}
