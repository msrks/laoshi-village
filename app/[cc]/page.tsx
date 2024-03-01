import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import BlogPage from "./events/page";
import { Separator } from "@/components/ui/separator";
import { ImagesSliderDemo } from "./image-slider-demo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ArticlePage from "./articles/page";

const majorLinks = [
  {
    imgSrc: "/hero_about.jpeg",
    // title: "About the village",
    title: "关于老市村",
    href: "/about",
  },
  {
    imgSrc: "/hero3.jpeg",
    // title: "The education hub of the community",
    title: "艺文阅读",
    href: "/",
  },
  {
    imgSrc: "/hero_diversity.jpeg",
    // title: "Ecologic and diversity livelihodds",
    title: "生态与多元生计",
    href: "/ecology-diversity",
  },
  {
    imgSrc: "/hero_charity.jpeg",
    // title: "Charity Program",
    title: "社区关怀计划",
    href: "/",
  },
];

export type CC = "en" | "cn";

interface Props {
  params: {
    cc?: CC;
  };
}

export default function LandingPage({ params = { cc: "cn" } }: Props) {
  return (
    <div className="grow flex flex-col items-center justify-center relative w-full">
      {/* <Image src="/demo1.jpg" alt="demo1" width={500} height={500} /> */}
      {/* <div className="container relative">
        <ImagesSliderDemo />
        <Separator className="my-8" />
      </div> */}
      <div className="w-full relative ">
        <AspectRatio ratio={16 / 9}>
          <div className="absolute inset-0 z-10 bg-black/10 flex justify-center items-center">
            <h1 className="text-xl md:text-5xl font-bold text-white text-center">
              {siteConfig.heroSlogan}
              <div className="my-12" />
              {params.cc === "cn"
                ? siteConfig.heroSubSloganCn
                : siteConfig.heroSubSlogan}
            </h1>
          </div>
          <Image
            src="/hero1_new.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
      </div>

      <div className="container relative">
        <div className="hidden md:grid grid-cols-4 my-2 gap-2">
          {majorLinks.map((m, i) => (
            <Link
              href={m.href}
              className="col-span-1 relative group overflow-hidden"
              key={i}
            >
              <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
                <h1 className="text-xl font-bold text-white text-center p-2">
                  {m.title}
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
        <Separator className="hidden md:block my-8" />
      </div>
      <div className="container flex">
        <ArticlePage />

        <div className="hidden md:block">
          <BlogPage />
        </div>
      </div>
    </div>
  );
}
