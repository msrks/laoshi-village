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
      <header className="fixed sm:sticky top-0 z-50 w-full border-b bg-background/50 sm:bg-background">
        <div className="container h-8 flex items-center sm:h-12">
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
        <div className="container flex  py-4 items-center  justify-around gap-4">
          {siteConfig.footerNav.map((c) => (
            <Link href={c.href} className="flex flex-col" key={c.href}>
              <h2 className="text-lg font-semibold">
                {params.cc === "cn" ? c.titleCn : c.title}
              </h2>
              <p>{params.cc === "cn" ? c.descriptionCn : c.description}</p>
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
