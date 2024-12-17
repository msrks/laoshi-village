import { notFound } from "next/navigation";
import { allActivities } from "contentlayer/generated";
import { Mdx } from "@/components/mdx/mdx-components";
import "@/styles/mdx.css";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { cn, formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdxPager } from "@/components/pagers/mdx-pager";
import { Shell } from "@/components/shells/shell";
import {
  AlertTriangle,
  Calendar,
  Clock4,
  DollarSign,
  Guitar,
  MapPin,
  Smile,
  Train,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const activity = allActivities.find(
    (activity) => activity.slugAsParams === slug
  );

  if (!activity) {
    null;
  }

  return activity;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const activity = await getPostFromParams(params);

  if (!activity) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  // const ogUrl = new URL(`${url}/api/og`);
  // ogUrl.searchParams.set("title", activity.title);
  // ogUrl.searchParams.set("type", "Blog Post");
  // ogUrl.searchParams.set("mode", "dark");

  return {
    // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: activity.title,
    description: activity.description,
    // openGraph: {
    //   title: activity.title,
    //   description: activity.description,
    //   type: "article",
    //   url: absoluteUrl(activity.slug),
    //   images: [
    //     {
    //       url: ogUrl.toString(),
    //       width: 1200,
    //       height: 630,
    //       alt: activity.title,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: activity.title,
    //   description: activity.description,
    //   images: [ogUrl.toString()],
    // },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allActivities.map((activity) => ({
    cc: "cn",
    slug: activity.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const activity = await getPostFromParams(params);

  if (!activity) {
    notFound();
  }

  return (
    <Shell as="article" variant="markdown">
      <Link
        href="/cn/activities-at-nature-school"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        See all activities
      </Link>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>{activity.readingTime}min to read</div>
        </div>
        <h1 className="inline-block text-3xl font-bold leading-tight lg:text-4xl">
          {activity.title}
        </h1>
        <h1 className="text-sm text-muted-foreground">
          {activity.description}
        </h1>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <Calendar className="size-4" />
          {activity.dateItems.map((d: string) => d.split("T")[0]).join(", ")}
        </div>
        <div className="flex items-center gap-2">
          <Clock4 className="size-4" />
          {activity.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          {activity.location}
        </div>
        <div className="flex items-center gap-2">
          <Smile className="size-4" />
          {activity.age}
        </div>
        <div className="flex items-center gap-2">
          <Users className="size-4" />
          {activity.capacity}
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 flex-shrink-0" />
          {activity.requirements}
        </div>
        <div className="flex gap-2 flex-wrap">
          {activity.keywords!.split(",").map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <AspectRatio ratio={16 / 9}>
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="rounded-md border bg-muted"
          priority
        />
      </AspectRatio>

      <div>{activity.theme}</div>

      <div className="flex items-center gap-2 flex-wrap bg-muted px-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 flex-shrink-0 items-center">
            <Users className="size-4" />
            活动举办方:
          </div>
          {activity.organizer}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2 flex-shrink-0 items-center">
            <Guitar className="size-4" />
            导师:
          </div>
          {activity.instructor}
        </div>

        <div className="flex items-center  gap-2">
          <div className="flex gap-2 flex-shrink-0 items-center">
            <DollarSign className="size-4" />
            费用:
          </div>
          {activity.fee}
        </div>
        <div className="flex items-center  gap-2">
          <div className="flex gap-2 flex-shrink-0 items-center">
            <Train className="size-4" />
            交通:
          </div>
          {activity.transportation}
        </div>
      </div>

      {/* 
      requirements: ""
      theme: ""
       */}
      <Mdx code={activity.body.code} />
      <Separator className="my-4" />
      <MdxPager currentItem={activity} allItems={allActivities} />
      <Link
        href="/cn/activities-at-nature-school"
        className={cn(
          buttonVariants({ variant: "ghost", className: "mx-auto mt-4 w-fit" })
        )}
      >
        <ChevronLeftIcon className="mr-2 size-4" aria-hidden="true" />
        See all activities
        <span className="sr-only">See all activities</span>
      </Link>
    </Shell>
  );
}
