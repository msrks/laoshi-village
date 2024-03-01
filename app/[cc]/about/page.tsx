import { type Metadata } from "next";
import { allEvents } from "contentlayer/generated";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { aboutConfig } from "@/config/about";
import { CC } from "../page";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Event",
  description: "Explore the latest news and updates from the community",
};

export default function Page({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  const events = allEvents
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="w-full max-w-[1400px] relative">
        <AspectRatio ratio={16 / 6}>
          <Image
            src={aboutConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          {params.cc === "cn" ? aboutConfig.titleCn : aboutConfig.title}
        </PageHeaderHeading>
        <div className="md:text-lg">
          {params.cc === "cn"
            ? aboutConfig.descriptionCn
            : aboutConfig.description}
        </div>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {aboutConfig.navs.map((m, i) => (
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
    </>
  );
}
