"use client";

import { useParams, usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LangToggle() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <Button variant="ghost" asChild size="sm">
      <Link
        href={
          params.cc === "cn"
            ? pathname.replace("/cn", "/en")
            : pathname.replace("/en", "/cn")
        }
      >
        {params.cc !== "cn" ? "中文" : "English"}
      </Link>
    </Button>
  );
}
