import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNav } from "@/components/layout/main-nav";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PropsWithChildren, Suspense } from "react";
import { AudioPlayer } from "./audio-player";
import LangToggle from "@/components/layout/lang-toggle";

export default function Layout({
  children,
  params,
}: PropsWithChildren & { params: { cc: "en" | "cn" } }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center ">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center ">
          <MainNav items={siteConfig.mainNav} lang={params.cc} />
          <MobileNav
            mainNavItems={siteConfig.mainNav}
            lang={params.cc}
            // sidebarNavItems={dashboardConfig.sidebarNav}
          />
          <ModeToggle />
          <Suspense fallback={<div>Loading...</div>}>
            <AudioPlayer />
          </Suspense>
          <LangToggle />
        </div>
      </header>
      {children}
      <footer className="hidden md:block w-full border-t bg-secondary ">
        <div className="container flex py-4 items-center text-lg font-semibold justify-around">
          {siteConfig.footerNav.map((c) => (
            <Link href={c.href} key={c.href}>
              {params.cc === "cn" ? c.titleCn : c.title}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
