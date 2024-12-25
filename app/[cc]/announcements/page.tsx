import * as React from "react";
import { type Metadata } from "next";
import { allAnnouncements } from "contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { AnnouncementCard } from "./_components/event-card";
import { CC } from "../page";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Announcement",
  description: "Explore the latest news and updates from the community",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

const config = {
  title: "最新公告",
};

export default function AnnouncementPage({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  const announcements = allAnnouncements.sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <Shell className="md:pb-10 min-h-[calc(100vh-156px)]">
      <PageHeader>
        <div className="text-xl md:text-3xl">{config.title}</div>
        <PageHeaderDescription>announcements..</PageHeaderDescription>
      </PageHeader>
      <Separator className="hidden md:block my-2" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {announcements.map((announcement, i) => (
            <AnnouncementCard
              key={announcement.slug}
              announcement={announcement}
              i={i}
              lang={params.cc!}
            />
          ))}
        </React.Suspense>
      </section>
    </Shell>
  );
}
