import { type Metadata } from "next";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { CC } from "../page";
import { Button } from "@/components/ui/button";
import { natureSchoolConfig } from "@/config/nature-school";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Nature School",
  description: "Nature School",
};

export default function Page({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  return (
    <>
      <div className="w-full max-w-[1400px] relative">
        <AspectRatio ratio={16 / 6}>
          <Image
            src={natureSchoolConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:w-[280px]">
          {params.cc === "cn"
            ? natureSchoolConfig.titleCn
            : natureSchoolConfig.title}
        </PageHeaderHeading>
        <div className="md:text-lg ">
          {params.cc === "cn"
            ? natureSchoolConfig.descriptionCn
            : natureSchoolConfig.description}
          {/* <Button asChild variant="link">
            <Link
              href="/pdf/livelihoods-en.pdf"
              className="md:text-lg"
              target="_blank"
            >
              Read More
            </Link>
          </Button> */}
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6 ">
        <PageHeaderHeading className="flex-none lg:w-[280px]">
          {params.cc === "cn"
            ? natureSchoolConfig.feedbackTitleCn
            : natureSchoolConfig.feedbackTitle}
        </PageHeaderHeading>
        <div className="md:text-lg flex flex-col items-start ">
          {natureSchoolConfig.feedbackNavs.map((m, i) => (
            <Button
              key={i}
              asChild
              variant="link"
              className="underline px-0 hover:text-primary/70"
            >
              <Link href={m.href} className="md:text-lg" target="_blank">
                {params.cc === "cn" ? m.titleCn : m.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="container grid grid-cols-2">
        <div>
          {natureSchoolConfig.subsections.map((m, i) => (
            <div key={i} className="flex flex-col my-6 gap-2">
              <h1
                className={cn("font-semibold flex-none", {
                  "text-3xl": i === 0,
                  "text-xl": i !== 0,
                })}
              >
                {params.cc === "cn" ? m.titleCn : m.title}
              </h1>
              <div className="md:text-lg">
                {m.items.map((item, i) => (
                  <div key={i}>
                    {params.cc === "cn" ? item.nameCn : item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          {natureSchoolConfig.subsections2.map((m, i) => (
            <div key={i} className="flex flex-col my-6 gap-2">
              <h1
                className={cn("font-semibold flex-none", {
                  "text-3xl": i === 0,
                  "text-xl": i !== 0,
                })}
              >
                {params.cc === "cn" ? m.titleCn : m.title}
              </h1>
              <div className="md:text-lg">
                {m.items.map((item, i) => (
                  <div key={i}>
                    {params.cc === "cn" ? item.nameCn : item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {natureSchoolConfig.navs.map((m, i) => (
            <Link
              href={`/${params.cc}/${m.href}`}
              className="col-span-1 relative group overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                <h1 className="text-xl font-bold text-white text-center p-2">
                  {params.cc === "cn" ? m.titleCn : m.title}
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

      <Separator className="my-4 container" />

      <div className="container mx-auto  my-6 w-full text-center">
        <PageHeaderHeading className="flex-none w-full mx-auto">
          {params.cc === "cn"
            ? natureSchoolConfig.activitiesTitleCn
            : natureSchoolConfig.activitiesTitle}
        </PageHeaderHeading>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {natureSchoolConfig.activitiesNav.map((m, i) => (
            <div key={i} className="flex flex-col">
              <div className="col-span-1 relative  overflow-hidden">
                <div className="absolute flex flex-col inset-0 z-10 bg-black/30 justify-center items-center">
                  <h1 className="text-xl font-bold text-white text-center p-2">
                    {params.cc === "cn" ? m.titleCn : m.title}
                  </h1>
                </div>
                <AspectRatio ratio={16 / 13}>
                  <Image
                    src={m.imgSrc}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </AspectRatio>
              </div>
              <p className="p-2">
                {params.cc === "cn" ? m.descriptionCn : m.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
