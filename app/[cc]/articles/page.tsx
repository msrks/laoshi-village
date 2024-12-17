import * as React from "react";
import { type Metadata } from "next";
import { allArticles } from "contentlayer/generated";
import { Separator } from "@/components/ui/separator";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { EventCardSkeleton } from "./_components/event-card-skeleton";
import { ArticleCard } from "./_components/event-card";
import { CC } from "../page";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

const config = {
  title: "Articles",
  titleCn: "焦点文章",
  description: "Articles about the latest news and updates from the community",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function ArticlePage({
  params = { cc: "cn" },
  asSubsection = false,
}: {
  params: {
    cc?: CC;
  };
  asSubsection?: boolean;
}) {
  const articles = allArticles
    .filter((article) => article.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Shell
      className={cn("md:pb-10", {
        "min-h-[calc(100vh-156px)]": !asSubsection,
      })}
    >
      <PageHeader>
        <div className="text-xl md:text-3xl">
          {params.cc === "cn" ? config.titleCn : config.title}
        </div>
        <PageHeaderDescription>{config.description}</PageHeaderDescription>
      </PageHeader>
      <Separator className="hidden md:block my-2" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <React.Suspense
          fallback={Array.from({ length: 3 }).map((_, i) => (
            <EventCardSkeleton key={i} />
          ))}
        >
          {articles.map((article, i) =>
            i < 3 ? (
              <ArticleCard
                key={article.slug}
                article={article}
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
