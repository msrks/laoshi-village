import { type Metadata } from "next";
import { PageHeaderHeading } from "@/components/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { volunteerConfig } from "@/config/volunteer";
import { CC } from "../page";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Volunteer",
  description: "help the community",
};

interface PageProps {
  params: {
    cc: string;
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return [{ cc: "cn" }, { cc: "en" }];
}

export default function Page({
  params = { cc: "cn" },
}: {
  params: {
    cc?: CC;
  };
}) {
  return (
    <>
      {/* mobile */}
      <div className="w-full max-w-[1400px] relative hidden sm:block">
        <AspectRatio ratio={16 / 6}>
          <Image
            src={volunteerConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      {/* desktop */}
      <div className="w-full max-w-[1400px] relative sm:hidden">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={volunteerConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container flex flex-col lg:flex-row gap-6 my-6">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          {params.cc === "cn" ? volunteerConfig.titleCn : volunteerConfig.title}
        </PageHeaderHeading>
        <div className="md:text-lg">
          {params.cc === "cn"
            ? volunteerConfig.descriptionCn
            : volunteerConfig.description}
        </div>
      </div>

      <section className="container">
        <PageHeaderHeading className="flex-none lg:max-w-[250px]">
          {params.cc === "cn"
            ? volunteerConfig.navTitleCn
            : volunteerConfig.navTitle}
        </PageHeaderHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 my-2 gap-2">
          {volunteerConfig.navs.map((m, i) => (
            <div key={i}>
              <Link
                href={`/${params.cc}/volunteer/form?name=${m.paramKey}`}
                className="col-span-1 relative group overflow-hidden"
              >
                <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                  <h1 className="text-xl font-bold text-white text-center p-2">
                    {params.cc === "cn" ? m.titleCn : m.title}
                  </h1>
                </div>
                <AspectRatio ratio={16 / 13}>
                  <Image
                    src={"/volunteer" + m.imgSrc}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105"
                    priority
                  />
                </AspectRatio>
              </Link>
              <p>{params.cc === "cn" ? m.descriptionCn : m.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
