import { Activity } from "@/.contentlayer/generated";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          <CardDescription className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              {activity.date.split("T")[0]}
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
            {/* <Button size="sm" asChild className="mr-auto">
              <Link href={`/cn/${activity.slug}`}>詳情</Link>
            </Button> */}
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
