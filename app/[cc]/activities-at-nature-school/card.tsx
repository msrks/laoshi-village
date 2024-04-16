"use client";

import { Activity } from "@/.contentlayer/generated";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock4, MapPin, Smile, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ActivityCard({ activity }: { activity: Activity }) {
  console.log(activity);
  return (
    <Link href={`/cn/${activity.slug}`}>
      <Card className="w-[350px] overflow-hidden">
        <CardContent>
          <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
            <Image
              src={activity.image}
              alt=""
              fill
              className="object-cover hover:scale-105"
              // priority
            />
          </AspectRatio>
        </CardContent>
        <CardHeader>
          <CardTitle>{activity.title}</CardTitle>
          <CardDescription className="flex gap-2">
            <Calendar className="size-4" />
            {activity.dateItems
              .map((di: string) => di.split("T")[0])
              .join(", ")}
          </CardDescription>
          <CardDescription className="flex gap-2">
            <Clock4 className="size-4" />
            {activity.time}
          </CardDescription>
          <CardDescription className="flex gap-2">
            <MapPin className="size-4" />
            {activity.location}
          </CardDescription>
          <CardDescription className="flex gap-2">
            <Smile className="size-4" />
            {activity.age}
          </CardDescription>
          <CardDescription className="flex gap-2">
            <Users className="size-4" />
            {activity.capacity}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex px-6 pb-4 flex-wrap gap-2">
          {activity.keywords!.split(",").map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
          {/* <Badge variant="secondary">低碳生活体验</Badge> */}
          {/* <Badge variant="secondary">启迪课程</Badge> */}
          {/* <Badge variant="secondary">线上活动</Badge> */}
        </CardFooter>
      </Card>
    </Link>
  );
}
