import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";

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
  const article = allArticles.find((article) => article.slugAsParams === slug);

  if (!article) {
    null;
  }

  return article;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const article = await getPostFromParams(params);

  if (!article) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set("title", article.title);
  // ogUrl.searchParams.set("type", "Blog Post");
  // ogUrl.searchParams.set("mode", "dark");

  return {
    // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: article.title,
    description: article.description,
    // openGraph: {
    //   title: article.title,
    //   description: article.description,
    //   type: "article",
    //   url: absoluteUrl(article.slug),
    //   images: [
    //     {
    //       url: ogUrl.toString(),
    //       width: 1200,
    //       height: 630,
    //       alt: article.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: article.title,
    //   description: article.description,
    //   images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allArticles.map((article) => ({
    slug: article.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const article = await getPostFromParams(params);

  if (!article) {
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
          {article.date && (
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          )}
          {article.date ? <div>•</div> : null}
          <div>{article.readingTime}min</div>
        </div>
        <h1 className="inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {article.title}
        </h1>
      </div>
      {article.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={article.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={article} allItems={allArticles} />
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
