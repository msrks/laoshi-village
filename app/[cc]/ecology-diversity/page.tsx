import { type Metadata } from "next";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { CC } from "../page";
import { Button } from "@/components/ui/button";
import { ecologyDiversityConfig } from "@/config/ecology-diversity";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Ecologic and diversity livelihoods",
  description: "Ecologic and diversity livelihoods",
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
      {/* desktop */}
      <div className="w-full max-w-[1400px] relative hidden sm:block">
        <AspectRatio ratio={16 / 6}>
          <Image
            src={ecologyDiversityConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      {/* mobile */}
      <div className="w-full max-w-[1400px] relative sm:hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={ecologyDiversityConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          {params.cc === "cn"
            ? ecologyDiversityConfig.titleCn
            : ecologyDiversityConfig.title}
        </PageHeaderHeading>
        <div className="md:text-lg">
          {params.cc === "cn"
            ? ecologyDiversityConfig.descriptionCn
            : ecologyDiversityConfig.description}
          <Button asChild variant="link">
            <Link
              href="/pdf/livelihoods-en.pdf"
              className="md:text-lg"
              target="_blank"
            >
              Read More
            </Link>
          </Button>
        </div>
      </div>

      <section className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {ecologyDiversityConfig.navs.map((m, i) => (
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
