"use client";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { CC } from "./page";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { homepageConfig } from "@/config/homepage";

export default function CarouselComponent({ lang }: { lang: CC }) {
  return (
    <Carousel
      className="w-full h-[calc(100vh-65px)] overflow-hidden px-8"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {homepageConfig.carouselItems.map((item, i) => (
          <CarouselItem key={i}>
            <Card>
              <Link href={`${lang}/${item.href}`}>
                <CardContent className="overflow-hidden relative flex items-center justify-center">
                  <AspectRatio ratio={16 / 13} className="overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-black/20 flex justify-center items-center">
                      <h1 className="text-xl md:text-3xl font-bold text-white text-center p-2 max-w-6xl">
                        {lang === "cn" ? item.titleCn : item.title}
                        <br />
                        <br />
                        {lang === "cn" ? item.descriptionCn : item.description}
                      </h1>
                    </div>
                    <Image
                      src={item.imgSrc}
                      alt=""
                      fill
                      className="object-cover bg-black/10"
                    />
                  </AspectRatio>
                </CardContent>
              </Link>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
