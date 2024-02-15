import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import BlogPage from "./events/page";
import { Separator } from "@/components/ui/separator";
import { ImagesSliderDemo } from "./image-slider-demo";
import Link from "next/link";

const majorLinks = [
  { imgSrc: "/hero_about.jpeg", title: "About the village", href: "/about" },
  {
    imgSrc: "/hero3.jpeg",
    title: "The education hub of the community",
    href: "/about",
  },
  {
    imgSrc: "/hero_diversity.jpeg",
    title: "Ecologic and diversity livelihodds",
    href: "/about",
  },
  { imgSrc: "/hero_charity.jpeg", title: "Charity Program", href: "/about" },
];

export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-center relative w-full">
      {/* <Image src="/demo1.jpg" alt="demo1" width={500} height={500} /> */}
      {/* <div className="container relative">
        <ImagesSliderDemo />
        <Separator className="my-8" />
      </div> */}
      <div className="container relative">
        <AspectRatio ratio={16 / 8}>
          <div className="absolute inset-0 z-10 bg-black/30 flex justify-center items-center">
            <h1 className="text-xl md:text-5xl font-bold text-white">
              Hello from 海头镇老市
            </h1>
          </div>
          <Image
            src="/hero1.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </AspectRatio>
        <div className="grid grid-cols-1 md:grid-cols-4 my-2 gap-2">
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
        <Separator className="my-8" />
      </div>
      <div className="container flex">
        <BlogPage />

        <BlogPage />
      </div>
    </div>
  );
}
