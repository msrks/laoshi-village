import * as React from "react";
import { type Metadata } from "next";
import { allEvents } from "contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { EventCard } from "./_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const config = {
  title: "Events",
  titleCn: "最新活动",
  description: "Explore the latest news and updates from the community",
};

export default function EventPages({
  params = { cc: "cn" },
  asSubsection = false,
}: {
  params: {
    cc?: CC;
  };
  asSubsection?: boolean;
}) {
  const events = allEvents
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Shell
      className={cn("md:pb-10 ", {
        "min-h-[calc(100vh-172px)]": !asSubsection,
      })}
    >
      <PageHeader>
        <div className="text-xl md:text-3xl">
          {params.cc === "cn" ? config.titleCn : config.title}
        </div>
        <PageHeaderDescription>{config.description}</PageHeaderDescription>
      </PageHeader>
      <Separator className="hidden md:block my-2" />
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {events.map((event, i) =>
            i < 3 ? (
              <EventCard
                key={event.slug}
                event={event}
                i={i}
                lang={params.cc!}
              />
            ) : null
          )}
        </React.Suspense>
      </section>
    </Shell>
  );
}
