import { type Metadata } from "next";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { CC } from "../page";
import { allActivities } from "@/.contentlayer/generated";
import { activitiesConfig } from "@/config/activities-at-nature-school";
import ActivitiesView from "./activitiesView";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Activities at Nature School",
  description: "Activities at Nature School",
};

export default function Page({
  params = { cc: "cn" },
}: {
  params: { cc?: CC };
}) {
  const activities = allActivities
    .filter((event) => event.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="w-full max-w-[1400px] relative">
        <AspectRatio ratio={16 / 2}>
          <Image
            src={activitiesConfig.imgSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container py-6 space-y-4">
        <h1 className="text-xl md:text-3xl font-semibold">
          {params.cc === "cn"
            ? activitiesConfig.titleCn
            : activitiesConfig.title}
        </h1>

        <ActivitiesView activities={activities} />
      </div>
    </>
  );
}
