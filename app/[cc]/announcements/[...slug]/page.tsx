import { notFound } from "next/navigation";
import { allAnnouncements } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import "@/styles/mdx.css";

import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

import { absoluteUrl, cn, formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdxPager } from "@/components/pagers/mdx-pager";
import { Shell } from "@/components/shells/shell";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const announcement = allAnnouncements.find(
    (announcement) => announcement.slugAsParams === slug
  );

  if (!announcement) {
    null;
  }

  return announcement;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const announcement = await getPostFromParams(params);

  if (!announcement) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set("title", announcement.title);
  // ogUrl.searchParams.set("type", "Blog Post");
  // ogUrl.searchParams.set("mode", "dark");

  return {
    // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: announcement.title,
    description: announcement.description,
    // openGraph: {
    //   title: announcement.title,
    //   description: announcement.description,
    //   type: "announcement",
    //   url: absoluteUrl(announcement.slug),
    //   images: [
    //     {
    //       url: ogUrl.toString(),
    //       width: 1200,
    //       height: 630,
    //       alt: announcement.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: announcement.title,
    //   description: announcement.description,
    //   images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allAnnouncements.map((announcement) => ({
    cc: "cn",
    slug: announcement.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const announcement = await getPostFromParams(params);

  if (!announcement) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href="/events"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        See all events
      </Link>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {announcement.date && (
            <time dateTime={announcement.date}>
              {formatDate(announcement.date)}
            </time>
          )}
          {announcement.date ? <div>•</div> : null}
          <div>{announcement.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {announcement.title}
        </h1>
      </div>
      {/* {announcement.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={announcement.image}
            alt={announcement.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )} */}
      <Mdx code={announcement.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={announcement} allItems={allAnnouncements} />
      <Link
        href="/events"
        className={cn(
          buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" })
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        See all events
        <span className="sr-only">See all events</span>
      </Link>
    </Shell>
  );
}
