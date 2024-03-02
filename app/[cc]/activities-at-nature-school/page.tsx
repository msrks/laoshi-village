import { type Metadata } from "next";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { CC } from "../page";
import { CalendarDemo } from "./calendar";
import { CardDemo } from "./card";
import { AgeSelector, GroupSelector, TypeSelector } from "./selector";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Activities at Nature School",
  description: "Activities at Nature School",
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
            src="/tamarin2.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container py-6 space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold">全部活動</h1>

        <div className="flex gap-4 container ">
          <GroupSelector />
          <TypeSelector />
          <AgeSelector />
        </div>

        <div className="flex sm:flex-row flex-col">
          <div className="flex-none mr-2">
            <CalendarDemo />
          </div>
          <div className="flex flex-wrap gap-2">
            <CardDemo />
            <CardDemo />
            <CardDemo />
            <CardDemo />
          </div>
        </div>
      </div>
    </>
  );
}
