import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-center relative w-full">
      {/* <Image src="/demo1.jpg" alt="demo1" width={500} height={500} /> */}
      <div className="container relative">
        <AspectRatio ratio={16 / 9}>
          <div className="absolute inset-0 z-10 bg-black/30" />
          <Image src="/us.avif" alt="" fill className="object-cover" priority />
        </AspectRatio>
      </div>
      <div className="absolute z-20 flex justify-center items-center">
        <h1 className="text-xl md:text-5xl font-bold text-white">
          Hello from 海头镇老市
        </h1>
      </div>
    </div>
  );
}
