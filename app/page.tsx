import { allPosts } from "@/.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <h1 className="text-xl mb-2">Hello from 海头镇老市</h1>
      <Image src="/demo1.jpg" alt="demo1" width={500} height={500} />
    </div>
  );
}
