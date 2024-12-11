import { type Metadata } from "next";
import { CC } from "../../page";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Volunteer",
  description: "help the community",
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
      <div className="my-20">Volunteer Form Page</div>
    </>
  );
}
