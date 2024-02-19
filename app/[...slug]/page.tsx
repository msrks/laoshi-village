import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allPages.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  const basePath = params.slug[params.slug.length - 1].slice(0, -3);

  return (
    <article className="container max-w-3xl py-8 md:py-10 space-y-6">
      <div className="flex items-center">
        <h1 className="inline-block text-3xl font-bold leading-tight lg:text-4xl mr-auto">
          {page.title}
        </h1>
        <Button size="icon" variant="ghost" asChild>
          <Link href={basePath + "-en"}>🇺🇸</Link>
        </Button>
        <Button size="icon" variant="ghost" asChild>
          <Link href={basePath + "-cn"}>🇨🇳</Link>
        </Button>
        <Button size="icon" variant="ghost" asChild>
          <Link href={basePath + "-ja"}>🇯🇵</Link>
        </Button>
      </div>

      {/* {page.description && <p className="text-xl">{page.description}</p>} */}
      {page.image && (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={page.image}
            alt={page.title}
            fill
            className="rounded-md border bg-muted"
            priority
          />
        </AspectRatio>
      )}
      <Mdx code={page.body.code} />
    </article>
  );
}
