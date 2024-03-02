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
import { Calendar, Clock4 } from "lucide-react";
import Image from "next/image";

export function CardDemo() {
  return (
    <Card className="w-[350px] overflow-hidden">
      <CardContent>
        <AspectRatio ratio={16 / 9} className="relative overflow-hidden">
          <Image
            src="/event-sample.jpeg"
            alt=""
            fill
            className="object-cover"
            // priority
          />
        </AspectRatio>
      </CardContent>
      <CardHeader>
        <CardTitle>活動標題</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            2023年12月12日
          </div>
          <div className="flex items-center gap-2">
            <Clock4 className="size-4" />
            10:00 ~ 16:00
          </div>
          <div>
            <Button size="sm">詳情</Button>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex px-6 pb-4 gap-6">
        <Badge variant="secondary">低碳生活体验</Badge>
        <Badge variant="secondary">启迪课程</Badge>
        <Badge variant="secondary">线上活动</Badge>
      </CardFooter>
    </Card>
  );
}
